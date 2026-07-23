import { CheckIcon } from "./Icons";

const highlights = [
  ["Cashout Pré-Jogo", "Permita que o jogador encerre o bilhete antes do início da partida, com cálculo automático de retorno."],
  ["Manipulação de Odds", "Ajuste manual ou automático das cotações por evento, modalidade ou mercado em tempo real."],
  ["Criação de Eventos", "Cadastre seus próprios eventos personalizados — locais, regionais ou exclusivos da sua marca."],
  ["Campinho & Estatísticas", "Visualização tática ao vivo com posicionamento, posse, escanteios, cartões e estatísticas detalhadas."],
  ["Plataforma Híbrida", "Operação física (cambistas/POS) e digital integradas — saldo, bilhetes e relatórios unificados."],
  ["Gerente Regional", "Hierarquia operacional com permissões por região, comissionamento e relatórios segmentados."],
] as const;

const metrics = [
  ["Jogos integrados", "6.000", "+", "10+ provedores top", ""],
  ["Modalidades esportivas", "30", "+", "cobertura global", "g"],
  ["Uptime garantido", "99.98", "%", "SLA contratual", ""],
  ["Custo de implementação", "R$ 0", "", "modelo white-label", "g"],
  ["Latência média de odds", "42", "ms", "via Genius Sports", ""],
  ["PIX confirmado", "< 10", "s", "end-to-end", "g"],
  ["Tempo até go-live", "7", "d", "cadastro → produção", ""],
  ["Suporte dedicado", "24", "/7", "operações + técnico", "g"],
] as const;

export function HighlightsSection() {
  return (
    <>
      <section className="destaque" id="destaque">
        <div className="dest-layout">
          <div>
            <div className="sec-head" style={{ marginBottom: "2.2rem" }}>
              <div className="sec-tag"><span className="num">03 /</span>Impulsione seu negócio</div>
              <h2 className="sec-title">Recursos de <span className="ac">destaque</span></h2>
              <p className="sec-desc">Funcionalidades estratégicas que dão à sua operação a vantagem competitiva que o mercado brasileiro de iGaming exige.</p>
            </div>
            <div className="dest-grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              {highlights.map(([title, description]) => (
                <div className="dest-card" key={title}>
                  <div className="dest-check"><CheckIcon width="18" height="18" strokeWidth="2.2" /></div>
                  <div><h4>{title}</h4><p>{description}</p></div>
                </div>
              ))}
            </div>
          </div>
          <div className="dest-phone">
            <img src="/assets/imgs/pagina-game/mobile-platform.png" alt="Plataforma móvel" />
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="sec-head center">
          <div className="sec-tag center-tag"><span className="num">04 /</span>Números da plataforma</div>
          <h2 className="sec-title">Performance que <span className="ac">fala por si.</span></h2>
        </div>
        <div className="metrics-grid">
          {metrics.map(([label, value, unit, description, variant]) => (
            <div className="metric" key={label}>
              <div className="metric-l">{label}</div>
              <div className={`metric-v${variant ? ` ${variant}` : ""}`}>{value}<span className="u">{unit}</span></div>
              <div className="metric-sub">{label === "Uptime garantido" && <span className="up">▲</span>} {description}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
