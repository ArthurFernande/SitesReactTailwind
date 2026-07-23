import { after, NextResponse } from "next/server";

const CRM_URL =
  process.env.CRM_URL ??
  "https://api-leads.assinelm.com.br/api/integration/leads";

const N8N_URL =
  process.env.N8N_URL ??
  "https://n8n.proxserverabner.site/webhook/webhook-receiver";

const CRM_TOKEN = process.env.CRM_TOKEN;

// Tempo máximo permitido para o processamento em segundo plano.
// Em algumas hospedagens essa configuração pode ser ignorada.
export const maxDuration = 60;

type LeadRequestBody = {
  nome?: string;
  email?: string;
  telefone?: string;
  quantidade_empregados?: string;
  empregados?: string;
  plataforma_origem?: string;
};

function limparTexto(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function limparTelefone(value: unknown): string {
  return typeof value === "string" ? value.replace(/\D/g, "") : "";
}

async function enviarParaN8N(payloadN8N: Record<string, string>) {
  const inicioN8N = Date.now();

  try {
    const responseN8N = await fetch(N8N_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadN8N),
      cache: "no-store",
    });

    const respostaN8N = await responseN8N.text();
    const tempoN8N = Date.now() - inicioN8N;

    console.log("n8n formulário - Status:", responseN8N.status);
    console.log(
      "n8n formulário - Resposta:",
      respostaN8N || "Sem corpo de resposta",
    );
    console.log("n8n formulário - Tempo:", `${tempoN8N}ms`);

    if (!responseN8N.ok) {
      console.warn(
        `CRM recebeu o lead, mas o n8n retornou ${responseN8N.status}.`,
      );
    }
  } catch (error) {
    console.error(
      "CRM recebeu o lead, mas ocorreu um erro no envio ao n8n:",
      error,
    );
  }
}

export async function POST(request: Request) {
  try {
    if (!CRM_TOKEN) {
      console.error("CRM_TOKEN não foi configurado.");

      return NextResponse.json(
        {
          success: false,
          message: "Configuração interna incompleta.",
        },
        {
          status: 500,
        },
      );
    }

    const body = (await request.json()) as LeadRequestBody;

    const nome = limparTexto(body.nome);
    const email = limparTexto(body.email);
    const telefone = limparTelefone(body.telefone);

    const empregados = limparTexto(
      body.quantidade_empregados ?? body.empregados,
    );

    const plataformaOrigem =
      limparTexto(body.plataforma_origem) ||
      request.headers.get("referer") ||
      "Não informado";

    if (nome.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe um nome válido.",
        },
        {
          status: 400,
        },
      );
    }

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe um e-mail válido.",
        },
        {
          status: 400,
        },
      );
    }

    if (telefone.length < 10 || telefone.length > 11) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe um telefone válido com DDD.",
        },
        {
          status: 400,
        },
      );
    }

    if (!empregados) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe a quantidade de empregados.",
        },
        {
          status: 400,
        },
      );
    }

    const payloadCRM = {
      nome,
      email,
      telefone,
      nomeEmpresa: "Não informado",
      necessidadeEmpresa: `Quantidade de empregados: ${empregados}`,
      urgenciaSolucao: "Não informado",
      solucao: "sim",
      origem: "react",
      plataforma_origem: plataformaOrigem,
    };

    const payloadN8N = {
      nome,
      whatsapp: telefone,
      cidade: "",
      experiencia: "",
      email,
      quantidade_empregados: empregados,
      origem: "react",
      plataforma_origem: plataformaOrigem,
    };

    /*
     * CRM é obrigatório.
     * O usuário aguarda somente esta requisição.
     */
    let responseCRM: Response;

    try {
      responseCRM = await fetch(CRM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${CRM_TOKEN}`,
        },
        body: JSON.stringify(payloadCRM),
        cache: "no-store",
        signal: AbortSignal.timeout(20_000),
      });
    } catch (error) {
      console.error("Erro de conexão ou timeout no CRM:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Não foi possível conectar ao CRM.",
        },
        {
          status: 502,
        },
      );
    }

    const respostaCRM = await responseCRM.text();

    console.log("CRM formulário - Status:", responseCRM.status);
    console.log("CRM formulário - Resposta:", respostaCRM);

    if (!responseCRM.ok) {
      return NextResponse.json(
        {
          success: false,
          message: `O CRM recusou o cadastro. Status: ${responseCRM.status}`,
        },
        {
          status: 502,
        },
      );
    }

    /*
     * Agenda o envio ao n8n para depois da resposta ao usuário.
     * O React não precisa esperar os 20 ou 30 segundos do n8n.
     */
    after(async () => {
      await enviarParaN8N(payloadN8N);
    });

    /*
     * Retorna imediatamente após o sucesso do CRM.
     * O componente já poderá redirecionar para o WhatsApp.
     */
    return NextResponse.json({
      success: true,
      message: "Lead enviado ao CRM com sucesso.",
    });
  } catch (error) {
    console.error("Erro interno no envio do formulário:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Erro interno ao processar o formulário.",
      },
      {
        status: 500,
      },
    );
  }
}
