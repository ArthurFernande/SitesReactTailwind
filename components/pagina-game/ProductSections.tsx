import {
  ArcadeIcon,
  CheckIcon,
  DeviceIcon,
  FruitIcon,
  PlayIcon,
  RocketIcon,
  StoreIcon,
  TrainIcon,
} from "./Icons";

const games = [
  ["subway", TrainIcon, <>SUBWAY<br />CASH</>],
  ["pac", ArcadeIcon, <>PAC<br />MONEY</>],
  ["jet", RocketIcon, <>JETPACK<br />MONEY</>],
  ["fruit", FruitIcon, <>FRUIT<br />NINJA</>],
] as const;

const flow = [
  ["01", "Cadastro & Setup", "Briefing comercial, definição de marca, paleta e identidade visual da sua bet."],
  ["02", "Configuração Técnica", "Provisionamento de ambiente, domínio, integração de provedores e gateway de pagamentos."],
  ["03", "Compliance & KYC", "Ajuste fino de políticas de jogo responsável, KYC e regras de risco operacional."],
  ["04", "Go-Live", "Plataforma no ar com suporte 24/7, treinamento da equipe e acompanhamento operacional."],
] as const;

export function ProductSections() {
  return (
    <>
      <section className="skill" id="skill">
        <div className="sec-head">
          <div className="sec-tag"><span className="num">05 /</span>A febre do momento</div>
          <h2 className="sec-title">Jogos de <span className="ac">habilidade.</span></h2>
          <p className="sec-desc">Linha exclusiva de skill games com tema arcade — engajamento alto, ticket médio crescente e retenção comprovada no público brasileiro.</p>
        </div>
        <div className="media-frame"><img src="/assets/imgs/pagina-game/skill-games.png" alt="Skill games da plataforma" /></div>
        <div className="skill-grid">
          {games.map(([variant, Icon, label]) => (
            <div className="skill-card" key={variant}>
              <div className={`art ${variant}`}><Icon className="game-art-icon" /></div>
              <div className="glow" />
              <div className="play"><PlayIcon width="20" height="20" /></div>
              <div className="label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="appn" id="app">
        <div className="appn-grid">
          <div>
            <div className="sec-tag"><span className="num">06 /</span>App nativo para cambistas</div>
            <h2 className="sec-title">Aplicativo<br />Android <span className="ac">nativo.</span></h2>
            <p className="sec-desc">Cambistas podem baixar o aplicativo nativo Android diretamente da Play Store para uso em celulares, tablets e máquinas POS — com sincronização em tempo real com a plataforma central.</p>
            <div className="rating-box">
              <div className="rating-num">4.5</div>
              <div className="rating-stars"><div className="stars">★★★★<span style={{ opacity: 0.5 }}>★</span></div><div className="count">+1.000 avaliações</div></div>
            </div>
            <div className="store-badges">
              <a className="store-badge" href="#contato"><StoreIcon width="20" height="20" /><div><div className="lbl">Disponível na</div><div className="name">Google Play</div></div></a>
              <a className="store-badge" href="#contato"><DeviceIcon width="20" height="20" /><div><div className="lbl">Compatível com</div><div className="name">POS · Tablet</div></div></a>
            </div>
          </div>
          <div className="appn-img"><img src="/assets/imgs/pagina-game/android-app.png" alt="Aplicativo Android para cambistas" /></div>
        </div>
      </section>

      <section className="iface">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">07 /</span>Personalização total</div>
          <h2 className="sec-title">Escolha a sua <span className="ac">interface.</span></h2>
          <p className="sec-desc">Personalize quase tudo no seu site — paletas, layouts, idioma, conteúdo em destaque. Sua marca, sua experiência, seu posicionamento.</p>
        </div>
        <div className="iface-img"><img src="/assets/imgs/pagina-game/interface-variants.png" alt="Variações de interface da plataforma" /></div>
      </section>

      <section className="flow" id="fluxo">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">06 /</span>White Label</div>
          <h2 className="sec-title">Do cadastro à operação<br />em <span className="ac">7 dias.</span></h2>
          <p className="sec-desc">Fluxo padronizado, sem complexidade técnica. Você cuida da marca e da aquisição — nós entregamos a plataforma.</p>
        </div>
        <div className="flow-steps">
          {flow.map(([number, title, description]) => <div className="flow-step" key={number}><div className="flow-num">{number}</div><div className="flow-title">{title}</div><div className="flow-desc">{description}</div></div>)}
        </div>
      </section>

      <section className="photo-section photo-kyc">
        <div className="photo-inner">
          <div className="eyebrow g"><span className="d" />KYC · Know Your Customer</div>
          <h2 className="photo-title">SEGURANÇA<br /><span className="ac2">NA PLATAFORMA.</span></h2>
          <p>Através da verificação de dados e documentos, prevenimos fraudes, protegemos operações e asseguramos um ambiente confiável para todos os jogadores e parceiros.</p>
          <a href="#compliance" className="btn btn-pri">Ver compliance completo →</a>
        </div>
      </section>
    </>
  );
}

const complianceItems = [
  ["KYC — Know Your Customer", "Validação de identidade, prevenção de fraudes e proteção da integridade da plataforma."],
  ["Triagem PPE/PEP & Sanções", "Cruzamento automático contra listas restritivas nacionais e internacionais (OFAC, UN, EU)."],
  ["Jogo Responsável", "Limites de depósito, tempo, perda e autoexclusão. Sinalização ativa de comportamento de risco."],
  ["Trilha de Auditoria Imutável", "Log completo de transações e sessões — exportável para órgãos reguladores brasileiros."],
] as const;

const badges = [
  ["Lei 14.790/23", "Plataforma atende integralmente à nova legislação brasileira de apostas esportivas e iGaming.", "Adequação Total"],
  ["Criptografia E2E", "TLS 1.3 e tokenização de dados sensíveis em repouso. PCI-DSS-ready.", "AES-256"],
  ["SLA 99.98%", "Infraestrutura redundante multi-região com monitoramento 24/7 e DR plan.", "RTO < 15min"],
  ["LGPD & GDPR", "Pipeline de privacidade, consentimento granular e direito ao esquecimento.", "DPO Disponível"],
] as const;

function BadgeIcon({ index }: { index: number }) {
  if (index === 1) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>;
  if (index === 2) return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
  if (index === 3) return <CheckIcon width="18" height="18" />;
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="m12 2 9 4v6c0 5-4 9-9 10-5-1-9-5-9-10V6l9-4Z" /></svg>;
}

export function ComplianceSection() {
  return (
    <section className="compliance" id="compliance">
      <div className="comp-grid">
        <div>
          <div className="sec-tag g"><span className="num">08 /</span>Compliance · Lei 14.790/23 · KYC</div>
          <h2 className="sec-title">Em <span className="ag">compliance</span> com a regulamentação brasileira.</h2>
          <p className="sec-desc">A plataforma <strong className="inline-white">atende integralmente a Lei 14.790/23</strong> e cumpre os requisitos de identificação de clientes (KYC), incluindo informações sobre pessoas politicamente expostas (PPE/PEP), sanções e restrições — em âmbito nacional e internacional.</p>
          <div className="comp-list">
            {complianceItems.map(([title, description]) => (
              <div className="comp-item" key={title}><div className="ic"><CheckIcon width="16" height="16" /></div><div><h4>{title}</h4><p>{description}</p></div></div>
            ))}
          </div>
        </div>
        <div className="comp-badges">
          {badges.map(([title, description, stat], index) => (
            <div className="comp-badge" key={title}><div className="ic"><BadgeIcon index={index} /></div><h5>{title}</h5><p>{description}</p><div className="stat">{stat}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}
