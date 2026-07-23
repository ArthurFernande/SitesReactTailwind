"use client";

import { FormEvent, useState } from "react";
import { ArrowRightIcon, CheckIcon, MailIcon, MessageIcon } from "./Icons";

export function ContactFooter() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="cta" id="contato">
        <div className="cta-inner">
          <div className="eyebrow"><span className="d" />Pronto para começar</div>
          <h2 className="cta-title">Sua bet digital começa <span className="h">aqui.</span></h2>
          <p className="cta-sub">Sem burocracia. Sem custo de entrada. Com toda a tecnologia que o mercado exige — pronta para operar.</p>

          <div className="lead-block lead-block-react">
            <div className="lead-eyebrow">Cadastro Comercial · Sem Compromisso</div>
            <div className="lead-title">Quero minha <span className="h">plataforma</span></div>
            {!submitted ? (
              <form className="lead-form" onSubmit={handleSubmit}>
                <div className="fg full"><label htmlFor="pagina-game-nome">Nome completo *</label><input id="pagina-game-nome" type="text" name="nome" placeholder="Seu nome" required /></div>
                <div className="fg"><label htmlFor="pagina-game-whatsapp">WhatsApp *</label><input id="pagina-game-whatsapp" type="tel" name="whatsapp" placeholder="+55 00 00000-0000" required /></div>
                <div className="fg"><label htmlFor="pagina-game-cidade">Cidade *</label><input id="pagina-game-cidade" type="text" name="cidade" placeholder="Sua cidade" required /></div>
                <div className="fg full"><label htmlFor="pagina-game-email">E-mail</label><input id="pagina-game-email" type="email" name="email" placeholder="seu@email.com" /></div>
                <div className="fg full">
                  <label htmlFor="pagina-game-experiencia">Experiência com plataformas digitais *</label>
                  <select id="pagina-game-experiencia" name="experiencia" required defaultValue="">
                    <option value="" disabled>Selecione</option>
                    <option value="nenhuma">Nenhuma — quero começar do zero</option>
                    <option value="pouca">Pouca — já operei brevemente</option>
                    <option value="intermediaria">Intermediária — opero atualmente</option>
                    <option value="avancada">Avançada — grupo / multi-marca</option>
                  </select>
                </div>
                <button type="submit" className="fsub"><ArrowRightIcon width="14" height="14" strokeWidth="2" />Falar com o comercial</button>
                <div className="lead-trust lead-trust-full"><span><span className="c">✓</span> Sem custo de entrada</span><span><span className="c">✓</span> Resposta em até 24h</span><span><span className="c">✓</span> Dados seguros (LGPD)</span></div>
              </form>
            ) : (
              <div className="form-success on" role="status">
                <div className="ic"><CheckIcon width="22" height="22" strokeWidth="2" /></div>
                <div className="t">Recebemos seu cadastro!</div>
                <div className="s">Pedro Frej entrará em contato em breve pelo WhatsApp informado. Prepare-se para conhecer sua plataforma.</div>
              </div>
            )}
          </div>

          <div className="contact-card">
            <div className="person"><div className="av">PF</div><div><div className="nm">Pedro Frej</div><div className="rl">COMERCIAL · GLOBAL TECH INTERNACIONAL</div></div></div>
            <div className="sep" />
            <a href="mailto:pedro.frej@gtech.uy"><MailIcon width="14" height="14" />pedro.frej@gtech.uy</a>
            <a href="https://wa.me/59897859466" target="_blank" rel="noopener noreferrer"><MessageIcon width="14" height="14" />+598 97859466</a>
          </div>
        </div>
      </section>

      <footer>
        <div className="foot-grid">
          <div className="foot-brand">
            <a href="#top" className="logo"><span className="logo-mark" /><span className="logo-text">global tech<span className="d">INTERNATIONAL</span></span></a>
            <p className="desc">Plataforma de iGaming desenvolvida pela união XSA Sports + Global Tech. Tecnologia, compliance Lei 14.790/23 e operação em uma única solução.</p>
            <span className="responsible-tag">● Jogo Responsável</span>
          </div>
          <div className="foot-col"><h6>Plataforma</h6><ul><li><a href="#plataforma">Recursos</a></li><li><a href="#produto">Verticais</a></li><li><a href="#operacao">Backoffice</a></li><li><a href="#fluxo">White Label</a></li></ul></div>
          <div className="foot-col"><h6>Empresa</h6><ul><li><a href="#compliance">Compliance</a></li><li><a href="https://gtech.uy" target="_blank" rel="noopener noreferrer">gtech.uy</a></li><li><a href="#faq">FAQ</a></li><li><a href="#contato">Contato</a></li></ul></div>
          <div className="foot-col"><h6>Legal</h6><ul><li><a href="#">Termos de Uso</a></li><li><a href="#">Política de Privacidade</a></li><li><a href="#">Jogo Responsável</a></li><li><a href="#">LGPD</a></li></ul></div>
        </div>
        <div className="foot-disclaim"><div className="age-badge">18+</div><div><strong className="inline-white">Aposte com responsabilidade.</strong> Apostas são para maiores de 18 anos. O jogo pode causar dependência — defina limites de tempo e de gastos. Em caso de necessidade, procure ajuda especializada. Operação sob licenciamento internacional. Esta página é institucional e destinada a operadores e parceiros comerciais.</div></div>
        <div className="foot-bottom"><span>© 2026 GLOBAL TECH INTERNACIONAL · GTECH.UY</span><span>BUILD 2026.05.15 · v3.1</span></div>
      </footer>
    </>
  );
}
