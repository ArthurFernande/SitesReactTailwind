import { NextResponse } from "next/server";

import { contactSchema } from "@/components/produtos/contactSchema";

const CRM_URL =
  process.env.CRM_URL ??
  "https://api-leads.assinelm.com.br/api/integration/leads";

const CRM_TOKEN = process.env.CRM_TOKEN;

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

    const body: unknown = await request.json();

    const validationResult = contactSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Verifique os campos informados.",
          errors:
            validationResult.error.flatten().fieldErrors,
        },
        {
          status: 400,
        },
      );
    }

    const { nome, telefone, email, mensagem } =
      validationResult.data;

    const telefoneLimpo = telefone.replace(/\D/g, "");

    const origem =
      request.headers.get("referer") ??
      "pagina_produtos";

    /*
     * Payload completo exigido pelo CRM.
     *
     * Apenas nome, telefone, e-mail e mensagem
     * são informados pelo usuário.
     */
    const payloadCRM = {
      nome,
      email,
      telefone: telefoneLimpo,

      nomeEmpresa: "Não informado",

      necessidadeEmpresa:
        "Mensagem enviada pelo formulário principal: " +
        mensagem,

      urgenciaSolucao: "Não informado",

      solucao: "sim",

      origem,

      plataforma_origem: "pagina_produtos",
    };

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
      console.error(
        "Erro de conexão ou timeout no CRM Produtos:",
        error,
      );

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

    console.log("CRM Produtos - Status:", responseCRM.status);

    console.log(
      "CRM Produtos - Resposta:",
      respostaCRM || "Sem corpo de resposta",
    );

    if (!responseCRM.ok) {
      console.error(
        `CRM Produtos recusou o lead. Status: ${responseCRM.status}`,
      );

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

    console.log("CRM Produtos - Lead enviado:", {
      nome,
      email,
      telefone: telefoneLimpo,
      plataforma_origem: "pagina_produtos",
    });

    return NextResponse.json({
      success: true,
      message: "Mensagem enviada com sucesso.",
    });
  } catch (error) {
    console.error(
      "Erro interno na rota /api/produtos-lead:",
      error,
    );

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