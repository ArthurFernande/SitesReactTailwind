import { after, NextResponse } from "next/server";

const CRM_URL =
  process.env.CRM_URL ??
  "https://api-leads.assinelm.com.br/api/integration/leads";

const N8N_URL =
  process.env.N8N_URL ??
  "https://n8n.proxserverabner.site/webhook/webhook-receiver";

const CRM_TOKEN = process.env.CRM_TOKEN;

export const maxDuration = 60;

type ArcadeLeadRequestBody = {
  nome?: string;
  telefone?: string;
  cidade?: string;
  plataforma_origem?: string;
};

function limparTexto(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function limparTelefone(value: unknown): string {
  return typeof value === "string" ? value.replace(/\D/g, "") : "";
}

async function enviarParaN8N(
  payloadN8N: Record<string, string>,
): Promise<void> {
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

    console.log("n8n Arcade - Status:", responseN8N.status);
    console.log(
      "n8n Arcade - Resposta:",
      respostaN8N || "Sem corpo de resposta",
    );
    console.log("n8n Arcade - Tempo:", `${tempoN8N}ms`);

    if (!responseN8N.ok) {
      console.warn(
        `CRM recebeu o lead Arcade, mas o n8n retornou ${responseN8N.status}.`,
      );
    }
  } catch (error) {
    console.error("CRM recebeu o lead Arcade, mas ocorreu erro no n8n:", error);
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

    const body = (await request.json()) as ArcadeLeadRequestBody;

    const nome = limparTexto(body.nome);
    const telefone = limparTelefone(body.telefone);
    const cidade = limparTexto(body.cidade);

    const plataformaOrigem =
      limparTexto(body.plataforma_origem) ||
      request.headers.get("referer") ||
      "Não informado";

    /*
     * Validação dos dados recebidos
     */
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

    if (cidade.length < 2) {
      return NextResponse.json(
        {
          success: false,
          message: "Informe uma cidade válida.",
        },
        {
          status: 400,
        },
      );
    }

    const payloadCRM = {
      nome,
      email: "nao veio pelo popup",
      telefone,
      nomeEmpresa: cidade,
      necessidadeEmpresa: "Lead enviado pelo formulário HTML da landing page",
      urgenciaSolucao: "Não informado",
      solucao: "sim",
      origem: "pagina_arcade",
      plataforma_origem: plataformaOrigem,
    };

    const payloadN8N = {
      nome,
      whatsapp: telefone,
      cidade,
      experiencia: "",
      origem: "pagina_arcade",
      plataforma_origem: plataformaOrigem,
    };

    /*
     * CRM principal e obrigatório.
     * O formulário aguarda somente esta integração.
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
      console.error("Erro de conexão ou timeout no CRM Arcade:", error);

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

    console.log("CRM Arcade - Status:", responseCRM.status);
    console.log(
      "CRM Arcade - Resposta:",
      respostaCRM || "Sem corpo de resposta",
    );

    if (!responseCRM.ok) {
      console.error(`CRM Arcade recusou o lead. Status: ${responseCRM.status}`);

      return NextResponse.json(
        {
          success: false,
          message: "O CRM não aceitou os dados enviados.",
        },
        {
          status: 502,
        },
      );
    }

    /*
     * n8n secundário.
     * Continua executando depois que o formulário recebe sucesso.
     */
    after(async () => {
      await enviarParaN8N(payloadN8N);
    });

    /*
     * O componente recebe sucesso assim que o CRM confirmar.
     */
    return NextResponse.json({
      success: true,
      message: "Cadastro enviado com sucesso.",
    });
  } catch (error) {
    console.error("Erro interno no Route Arcade:", error);

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
