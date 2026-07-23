import { CheckIcon, DeviceIcon, FootballIcon, ShieldIcon } from "./Icons";

const tickerItems = [
  ["", "Cassino Ao Vivo"],
  ["g", "3.000+ Jogos"],
  ["gr", "PIX Automático"],
  ["", "API Genius Sports"],
  ["g", "Mobile-first PWA"],
  ["", "KYC Automatizado"],
  ["g", "Dashboard Operacional"],
  ["gr", "Antifraude em Tempo Real"],
  ["", "White-label"],
  ["g", "Suporte 24/7"],
  ["", "30+ Modalidades"],
  ["gr", "Cash Out"],
] as const;

const providers = [
  ["Pragmatic Play", "Slots · Live"],
  ["Evolution", "Live Casino"],
  ["PG Soft", "Slots"],
  ["BGaming", "Slots"],
  ["Belatra", "Slots"],
  ["Tom Horn", "Slots"],
  ["EvoPlay", "Slots"],
  ["Turbo Games", "Crash"],
  ["Aviatrix", "Crash"],
  ["SmartSoft", "JetX · BalloonX"],
] as const;

const features = [
  ["Cassino Completo", "Slots, crash, table games, roleta, blackjack e cassino ao vivo com dealers — integrados em uma única biblioteca.", ["3.000+ jogos", "30+ provedores", "HD Live"], ""],
  ["Esportes & Live", "Mais de 30 modalidades, odds em tempo real, in-play, cash out, parlay e cobertura de campeonatos globais.", ["In-Play", "Cash Out", "Streaming"], ""],
  ["API Genius Sports", "Dados, odds e estatísticas da maior referência global em inteligência esportiva, direto na sua plataforma.", ["Odds live", "Estatísticas", "Placar"], "go"],
  ["Mobile-first & PWA", "Interface responsiva, otimizada para mobile com experiência nativa via Progressive Web App.", ["iOS", "Android", "PWA"], ""],
  ["Pagamentos & Carteira", "PIX automático, transferência, criptomoedas e carteira digital. Depósito e saque rápidos, sem fricção.", ["PIX", "TED", "Crypto"], ""],
  ["VIP & Fidelização", "Programa de fidelidade por níveis, ranking competitivo, bônus dinâmicos e gestão de retenção.", ["Ranking", "Cashback", "Missões"], ""],
  ["KYC & Compliance", "Verificação automatizada via biometria e documento, anti-fraude em tempo real e jogo responsável.", ["OCR", "Biometria", "AML"], "go"],
  ["Afiliados & Aquisição", "Sistema completo de afiliados com tracking, comissionamento por níveis e dashboards de performance.", ["CPA", "RevShare", "Híbrido"], ""],
  ["Painel & BI", "Dashboard executivo com GGR, NGR, retenção, LTV, comportamento de jogadores e exportação de dados.", ["Real-time", "Export", "API"], ""],
] as const;

function FeatureIcon({ index }: { index: number }) {
  if (index === 1) return <FootballIcon width="20" height="20" />;
  if (index === 3) return <DeviceIcon width="20" height="20" />;
  if (index === 6) return <ShieldIcon width="20" height="20" />;
  if (index === 2) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m3 17 6-6 4 4 8-8M14 7h7v7" /></svg>;
  }
  if (index === 4) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M2 11h20M6 16h2m3 0h2" /></svg>;
  }
  if (index === 5) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 2 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1 3-6Z" /></svg>;
  }
  if (index === 7) return <CheckIcon width="20" height="20" />;
  if (index === 8) {
    return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a13 13 0 0 1 0 18M12 3a13 13 0 0 0 0 18" /></svg>;
  }
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 3v18" /></svg>;
}

export function Ticker() {
  return (
    <div className="ticker" aria-label="Recursos da plataforma">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map(([variant, text], index) => (
          <span className={`tk${variant ? ` ${variant}` : ""}`} key={`${text}-${index}`}><span className="d" />{text}</span>
        ))}
      </div>
    </div>
  );
}

export function InstitutionalSections() {
  return (
    <>
      <section className="about" id="quem-somos">
        <div className="about-grid">
          <div>
            <div className="eyebrow"><span className="d" />Apresentação Institucional</div>
            <h2 className="about-disp">Quem<br />Somos</h2>
            <p>Temos o prazer de apresentar uma <strong>proposta exclusiva</strong> que surge de uma união estratégica de grande impacto no mercado de jogos online: a fusão da <strong>XSA Sports</strong> com a <strong>Global Tech</strong>.</p>
            <p>Combinando décadas de expertise em jogos e esportes digitais, esta fusão cria uma potência no desenvolvimento de soluções inovadoras e tecnológicas para plataformas de jogos, oferecendo a você uma oportunidade única de impulsionar seu negócio a novos horizontes.</p>
            <div className="about-fusion"><span className="b">XSA SPORTS</span><span className="x">×</span><span className="b">GLOBAL TECH</span></div>
          </div>
          <div className="about-img"><img src="/assets/imgs/pagina-game/global-tech-office.png" alt="Sede Global Tech" /></div>
        </div>
      </section>

      <section className="providers" style={{ padding: "3.5rem 5%" }}>
        <div className="providers-head">Os melhores fornecedores de cassino · 6.000+ jogos integrados</div>
        <div className="providers-real">
          {providers.map(([name, type]) => <div className="prov-card" key={name}><div className="nm">{name}</div><div className="sub">{type}</div></div>)}
        </div>
      </section>

      <section className="photo-section photo-sports">
        <div className="photo-inner">
          <div className="eyebrow"><span className="d" />Vertical Esportes</div>
          <h2 className="photo-title">NOSSOS<br /><span className="ac2">ESPORTES.</span></h2>
          <p>Mais de 30 modalidades, dos campeonatos brasileiros aos torneios globais. Cotações no padrão das maiores casas, atualização em tempo real e cobertura completa de futebol, basquete, tênis, MMA, e-sports e mais.</p>
          <a href="#produto" className="btn btn-pri">Ver a vertical de esportes →</a>
        </div>
      </section>

      <section className="features" id="plataforma">
        <div className="sec-head">
          <div className="sec-tag"><span className="num">01 /</span>O que está incluído</div>
          <h2 className="sec-title">Tudo que sua operação<br />precisa para escalar.</h2>
          <p className="sec-desc">Plataforma modular pronta para operar — cada componente integrado e validado. Você foca no produto, na marca e na aquisição.</p>
        </div>
        <div className="feat-grid">
          {features.map(([title, description, tags, variant], index) => (
            <div className={`feat-card${variant ? ` ${variant}` : ""}`} key={title}>
              <div className="feat-icon"><FeatureIcon index={index} /></div>
              <div className="feat-title">{title}</div>
              <div className="feat-desc">{description}</div>
              <div className="feat-meta">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="photo-section photo-casino">
        <div className="photo-inner photo-right">
          <div className="eyebrow"><span className="d" />Vertical Cassino</div>
          <h2 className="photo-title">NOSSO<br /><span className="ac2">CASSINO.</span></h2>
          <p>Mais de 6.000 jogos integrados — slots, crash, table games, raspadinha, esportes virtuais e cassino ao vivo com dealers reais. Os melhores fornecedores do mundo, sob a sua marca.</p>
        </div>
      </section>
    </>
  );
}
