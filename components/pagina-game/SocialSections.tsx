"use client";

import { useState } from "react";
import { PlusIcon } from "./Icons";

const testimonials = [
  ["A entrada técnica foi o que mais me preocupava — em sete dias estávamos com a marca no ar e o primeiro PIX já tinha caído. O backoffice é tudo que prometeram.", "RC", "R. Carvalho", "CEO · OPERADOR REGIONAL · SP"],
  ["A integração com Genius Sports muda o jogo. Nossas odds são as mesmas das casas grandes — e o time fica focado em produto e marketing, não em infraestrutura.", "LF", "L. Ferraz", "HEAD DE PRODUTO · MG"],
  ["O módulo de KYC e antifraude é exatamente o que precisávamos para dormir tranquilos. Auditoria foi aprovada na primeira rodada.", "AM", "A. Mendes", "DIRETOR DE COMPLIANCE · RJ"],
] as const;

const faqs = [
  ["Quanto custa para começar a operar?", <>O modelo white-label tem custo de implementação <strong>R$ 0</strong>. A Global Tech monetiza por participação na receita da operação (rev share), de forma alinhada — quanto mais a sua bet cresce, melhor para todos.</>],
  ["Quanto tempo leva do contrato ao go-live?", <>O processo padrão é de <strong>7 dias úteis</strong> entre o briefing e a plataforma no ar com a sua marca, considerando setup de domínio, gateway de pagamentos e KYC.</>],
  ["Preciso de equipe técnica própria?", <>Não. Toda a infraestrutura — servidores, integrações, atualizações de jogos, segurança, backups — fica sob responsabilidade da Global Tech. Sua equipe foca em <strong>marca, marketing, aquisição e suporte ao jogador</strong>.</>],
  ["Como funciona o módulo de afiliados?", <>Sistema próprio com tracking de links, sub-afiliados, três modelos de comissionamento (CPA, RevShare, Híbrido) e dashboard de performance dedicado para cada afiliado.</>],
  ["Qual a estrutura de compliance e licenciamento?", <>A operação roda sob licenciamento internacional, com KYC em três níveis, antifraude em tempo real, política de jogo responsável e trilha de auditoria imutável — auditada trimestralmente.</>],
  ["Quais métodos de pagamento estão integrados?", <><strong>PIX automático</strong> (depósito e saque), TED, boleto e criptomoedas (BTC, USDT). Confirmação de PIX em até 10 segundos, com conciliação automática no backoffice.</>],
] as const;

export function SocialSections() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <>
      <section className="testi">
        <div className="sec-head">
          <div className="sec-tag"><span className="num">09 /</span>Quem opera com a Global Tech</div>
          <h2 className="sec-title">Operadores que já estão<br /><span className="ac">no ar com a gente.</span></h2>
        </div>
        <div className="testi-grid">
          {testimonials.map(([quote, initials, name, role]) => (
            <div className="testi-card" key={name}>
              <div className="testi-quote">{quote}</div>
              <div className="testi-author"><div className="testi-avatar">{initials}</div><div><div className="testi-name">{name}</div><div className="testi-role">{role}</div></div></div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">10 /</span>Perguntas Frequentes</div>
          <h2 className="sec-title">Tudo sobre a <span className="ac">parceria.</span></h2>
        </div>
        <div className="faq-list">
          {faqs.map(([question, answer], index) => {
            const isOpen = open === index;
            return (
              <div className={`faq-item${isOpen ? " open" : ""}`} key={question}>
                <button className="faq-q" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                  {question}
                  <span className="ic"><PlusIcon width="14" height="14" strokeWidth="2" /></span>
                </button>
                <div className="faq-a" style={{ maxHeight: isOpen ? "220px" : "0px" }}><div className="faq-a-inner"><p>{answer}</p></div></div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
