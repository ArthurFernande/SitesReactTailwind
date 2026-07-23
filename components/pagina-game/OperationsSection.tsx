"use client";

import { useState } from "react";
import { MiniChart } from "./ShowcaseSection";
import { ShieldIcon } from "./Icons";

type OpsKey = "dashboard" | "kyc" | "risk" | "wallet" | "affiliates" | "reports";

const tabs: Array<{ key: OpsKey; title: string; description: string }> = [
  { key: "dashboard", title: "Dashboard executivo", description: "GGR · NGR · retenção · LTV em tempo real." },
  { key: "kyc", title: "KYC & onboarding", description: "Verificação por OCR, biometria e checagem AML." },
  { key: "risk", title: "Risco & antifraude", description: "Detecção de padrões, alertas e bloqueio em tempo real." },
  { key: "wallet", title: "Carteira & pagamentos", description: "PIX, TED, cripto e conciliação automática." },
  { key: "affiliates", title: "Afiliados & aquisição", description: "Tracking, comissionamento por níveis e relatórios." },
  { key: "reports", title: "Relatórios & BI", description: "Exportação de GGR, NGR, depósitos, saques e KPIs." },
];

function TabIcon({ type }: { type: OpsKey }) {
  if (type === "kyc") return <ShieldIcon width="16" height="16" />;
  if (type === "dashboard") return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="8" height="10" rx="1" /><rect x="13" y="3" width="8" height="6" rx="1" /><rect x="3" y="15" width="8" height="6" rx="1" /><rect x="13" y="11" width="8" height="10" rx="1" /></svg>;
  if (type === "risk") return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 12h4l3-8 4 16 3-8h4" /></svg>;
  if (type === "wallet") return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="6" width="20" height="13" rx="2" /><path d="M16 11.5h2" /></svg>;
  if (type === "affiliates") return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="9" cy="8" r="3" /><circle cx="17" cy="11" r="2.5" /><path d="M3 20c0-3 3-5 6-5s6 2 6 5m-1 0c0-2 2-4 4.5-4S23 18 23 20" /></svg>;
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h12l4 4v12H4V4Z" /><path d="M14 4v6h6M8 14h8m-8 3h5" /></svg>;
}

function DisplayHeader({ title, meta }: { title: string; meta: string }) {
  return <div className="ops-display-head"><div className="ops-display-title">{title}</div><div className="ops-display-meta"><span className="dot" />{meta}</div></div>;
}

function Stat({ label, value, valueClass = "", detail }: { label: string; value: React.ReactNode; valueClass?: string; detail: string }) {
  return <div className="dash-stat"><div className="l">{label}</div><div className={`v mono ${valueClass}`}>{value}</div><div className="delta">{detail}</div></div>;
}

function DashboardPanel() {
  return (
    <>
      <DisplayHeader title="Dashboard Executivo · Tempo Real" meta="OPERACIONAL · ÚLT. SYNC 2s" />
      <div className="dash-row"><Stat label="GGR Hoje" value="R$ 284.3K" valueClass="cy" detail="▲ +18.4% vs ontem" /><Stat label="NGR Hoje" value="R$ 198.1K" valueClass="go" detail="▲ +12.7%" /><Stat label="Jogadores ativos" value="12.847" valueClass="gr" detail="▲ 1.2K hoje" /></div>
      <div className="chart"><div className="chart-head"><div className="chart-title">GGR · últimos 7 dias</div><div className="chart-legend"><span><span className="dot cyan-dot" />Cassino</span><span><span className="dot gold-dot" />Sports</span><span><span className="dot violet-dot" />Live</span></div></div><MiniChart bars /></div>
      <table className="dtable"><thead><tr><th>Métrica</th><th className="r">Hoje</th><th className="r">7d</th><th className="r">Δ</th></tr></thead><tbody>
        <tr><td>Depósitos</td><td className="r mono">R$ 412K</td><td className="r mono">R$ 2.8M</td><td className="r mono st-ok">+14%</td></tr>
        <tr><td>Saques</td><td className="r mono">R$ 198K</td><td className="r mono">R$ 1.4M</td><td className="r mono st-ok">+8%</td></tr>
        <tr><td>FTD (novos)</td><td className="r mono">312</td><td className="r mono">2.184</td><td className="r mono st-ok">+22%</td></tr>
        <tr><td>Retenção D7</td><td className="r mono">38.4%</td><td className="r mono">36.8%</td><td className="r mono st-ok">+1.6 pp</td></tr>
        <tr><td>LTV (90d)</td><td className="r mono">R$ 142</td><td className="r mono">—</td><td className="r mono st-ok">+R$ 8</td></tr>
      </tbody></table>
    </>
  );
}

function KycPanel() {
  const items = [
    ["done", "✓", "Cadastro básico", "Email · WhatsApp · CPF validado", "42s", "ok"],
    ["done", "✓", "Nível 1 · Documento (RG / CNH)", "OCR aprovado · documento autêntico (96.4% conf.)", "1m 18s", "ok"],
    ["done", "✓", "Nível 2 · Biometria facial", "Prova de vida · match 99.1% com documento", "38s", "ok"],
    ["curr", "●", "Nível 3 · Comprovante de endereço", "Em análise · documento submetido há 2 min", "em revisão", "wait"],
    ["", "5", "AML & PEP screening", "Cruzamento com listas restritivas globais", "aguardando", "wait"],
    ["", "6", "Aprovação final & ativação", "Liberação de depósito e saque", "—", "wait"],
  ] as const;
  return (
    <>
      <DisplayHeader title="KYC · Onboarding em 3 Níveis" meta="BIOMETRIA · OCR · AML" />
      <div className="dash-row"><Stat label="KYC concluídos hoje" value="847" valueClass="cy" detail="94.2% taxa de aprovação" /><Stat label="Tempo médio Nível 1" value={<>42<span className="small-unit">s</span></>} valueClass="go" detail="▼ -8s vs semana" /><Stat label="Em revisão manual" value="23" valueClass="gold-stat" detail="3 críticos" /></div>
      <div className="panel-caption">Fluxo do jogador #284917 · Maria L.</div>
      <div className="kyc-list">{items.map(([stepClass, step, title, detail, status, statusClass]) => (
        <div className="kyc-item" key={title}><div className={`kyc-step${stepClass ? ` ${stepClass}` : ""}`}>{step}</div><div className="kyc-text">{title}<span className="sub">{detail}</span></div><div className={`kyc-status ${statusClass}`}>{status}</div></div>
      ))}</div>
    </>
  );
}

function RiskPanel() {
  const events = [
    ["crit", "Tentativa de saque incompatível com perfil", "Jogador #294881 · R$ 12.400 · device fingerprint inédito", "há 12s"],
    ["warn", "Múltiplos logins em 5min", "Jogador #281047 · 4 IPs distintos (SP/RJ)", "há 38s"],
    ["ok", "KYC Nível 3 aprovado", "Jogador #299142 · documento validado, liberado", "há 1m"],
    ["warn", "Padrão de aposta atípico detectado", "Jogador #285519 · 47 apostas em odds idênticas (arbitragem?)", "há 2m"],
    ["ok", "Depósito PIX confirmado", "Jogador #298804 · R$ 250 · conciliado", "há 2m"],
    ["crit", "Conta suspensa · suspeita de bot", "Jogador #284113 · 312 apostas em 8 minutos", "há 3m"],
  ] as const;
  return (
    <>
      <DisplayHeader title="Monitor de Risco & Antifraude" meta="TEMPO REAL · 247 EVENTOS/MIN" />
      <div className="dash-row"><Stat label="Alertas (24h)" value="38" valueClass="gold-stat" detail="▼ -12% vs ontem" /><Stat label="Bloqueios automáticos" value="7" valueClass="red-stat" detail="multi-conta / VPN" /><Stat label="Risco score médio" value="0.18" valueClass="gr" detail="▼ saudável" /></div>
      <div className="panel-caption">Feed ao vivo · últimos eventos</div>
      {events.map(([level, title, detail, time]) => <div className="risk-row" key={title}><div className={`risk-dot ${level}`} /><div className="risk-text">{title}<span className="sub">{detail}</span></div><div className="risk-time">{time}</div></div>)}
    </>
  );
}

function WalletPanel() {
  return (
    <>
      <DisplayHeader title="Carteira Digital · Pagamentos" meta="PIX · TED · CRYPTO" />
      <div className="wallet"><div className="balance-l">Saldo consolidado da operação</div><div className="balance-v"><span className="cur">R$</span>4.218.430,<span className="balance-cents">76</span></div><div className="balance-row"><div>Reserva técnica<span className="v">R$ 1.20M</span></div><div>Liquidez D+0<span className="v">R$ 3.02M</span></div></div></div>
      <div className="panel-caption">Métodos · transações 24h</div>
      <div className="pay-methods"><div className="pm"><span className="v">8.2K</span>PIX in</div><div className="pm g"><span className="v">3.1K</span>PIX out</div><div className="pm"><span className="v">412</span>TED</div><div className="pm g"><span className="v">38</span>Crypto</div></div>
      <table className="dtable table-spaced"><thead><tr><th>Hora</th><th>Tipo</th><th>Jogador</th><th className="r">Valor</th><th>Status</th></tr></thead><tbody>
        <tr><td className="mono">14:32:18</td><td>PIX in</td><td>#298804</td><td className="r mono">R$ 250,00</td><td><span className="pill ok">CONCILIADO</span></td></tr>
        <tr><td className="mono">14:31:55</td><td>PIX out</td><td>#284991</td><td className="r mono">R$ 1.840,00</td><td><span className="pill ok">PAGO 7s</span></td></tr>
        <tr><td className="mono">14:31:42</td><td>PIX in</td><td>#299142</td><td className="r mono">R$ 50,00</td><td><span className="pill ok">CONCILIADO</span></td></tr>
        <tr><td className="mono">14:31:08</td><td>PIX in</td><td>#298881</td><td className="r mono">R$ 1.000,00</td><td><span className="pill warn">REVIEW</span></td></tr>
        <tr><td className="mono">14:30:54</td><td>PIX out</td><td>#284113</td><td className="r mono">R$ 12.400,00</td><td><span className="pill err">BLOQUEADO</span></td></tr>
        <tr><td className="mono">14:30:21</td><td>USDT in</td><td>#290017</td><td className="r mono">R$ 5.200,00</td><td><span className="pill ok">CONFIRMADO</span></td></tr>
      </tbody></table>
    </>
  );
}

function AffiliatesPanel() {
  return (
    <>
      <DisplayHeader title="Afiliados · Tracking & Comissionamento" meta="847 AFILIADOS ATIVOS" />
      <div className="dash-row"><Stat label="Afiliados ativos" value="847" valueClass="cy" detail="▲ +12 esta semana" /><Stat label="Comissões pagas (mês)" value="R$ 184K" valueClass="go" detail="via RevShare + CPA" /><Stat label="FTDs via afiliados" value="1.247" valueClass="gr" detail="42% do total" /></div>
      <div className="panel-caption">Tiers de comissão · seleção dinâmica</div>
      <div className="aff-tiers"><div className="aff-tier"><div className="tier-name">Bronze</div><div className="tier-rate">25<span className="small-unit">%</span></div><div className="tier-r">RevShare · até 10 FTDs/mês</div></div><div className="aff-tier active"><div className="tier-name">Prata</div><div className="tier-rate">35<span className="small-unit">%</span></div><div className="tier-r">RevShare · 10–50 FTDs/mês</div></div><div className="aff-tier"><div className="tier-name">Ouro</div><div className="tier-rate">45<span className="small-unit">%</span></div><div className="tier-r">RevShare · 50+ FTDs/mês</div></div></div>
      <table className="dtable table-spaced-sm"><thead><tr><th>Afiliado</th><th>Tier</th><th className="r">FTDs</th><th className="r">NGR gerado</th><th className="r">Comissão</th></tr></thead><tbody>
        <tr><td>casadaaposta_</td><td><span className="pill ok">OURO</span></td><td className="r mono">84</td><td className="r mono">R$ 42.8K</td><td className="r mono st-ok">R$ 19.2K</td></tr>
        <tr><td>tip_do_dia</td><td><span className="pill warn">PRATA</span></td><td className="r mono">42</td><td className="r mono">R$ 18.4K</td><td className="r mono st-ok">R$ 6.4K</td></tr>
        <tr><td>verde_e_amarelo</td><td><span className="pill ok">OURO</span></td><td className="r mono">67</td><td className="r mono">R$ 31.2K</td><td className="r mono st-ok">R$ 14.0K</td></tr>
        <tr><td>palpiteiro.br</td><td><span className="pill warn">PRATA</span></td><td className="r mono">28</td><td className="r mono">R$ 9.8K</td><td className="r mono st-ok">R$ 3.4K</td></tr>
      </tbody></table>
    </>
  );
}

function ReportsPanel() {
  const rows = [
    ["GGR / NGR consolidado", "hoje 09:00", "Diário", "2.4 MB"],
    ["Cohort de retenção", "hoje 06:00", "Semanal", "8.1 MB"],
    ["Depósitos por método", "hoje 09:00", "Diário", "1.2 MB"],
    ["KYC & AML auditoria", "hoje 08:00", "Diário", "4.8 MB"],
    ["Performance de afiliados", "hoje 09:00", "Diário", "3.1 MB"],
    ["Comportamento de jogadores", "hoje 07:00", "Diário", "12.4 MB"],
  ] as const;
  return (
    <>
      <DisplayHeader title="Relatórios & Inteligência de Dados" meta="EXPORT · API · BI" />
      <div className="dash-row"><Stat label="Relatórios disponíveis" value="42" valueClass="cy" detail="+8 customizáveis" /><Stat label="Exportações (mês)" value="1.847" valueClass="go" detail="CSV · XLSX · JSON" /><Stat label="Endpoints API" value="87" valueClass="gr" detail="REST + Webhooks" /></div>
      <div className="chart"><div className="chart-head"><div className="chart-title">Receita líquida · cohort 90 dias</div><div className="chart-legend"><span><span className="dot cyan-dot" />Brutos</span><span><span className="dot gold-dot" />Líquidos</span></div></div><MiniChart bars /></div>
      <table className="dtable"><thead><tr><th>Relatório</th><th>Último export</th><th>Frequência</th><th className="r">Tamanho</th></tr></thead><tbody>
        {rows.map(([report, last, frequency, size]) => <tr key={report}><td>{report}</td><td className="mono">{last}</td><td>{frequency}</td><td className="r mono">{size}</td></tr>)}
      </tbody></table>
    </>
  );
}

function ActivePanel({ active }: { active: OpsKey }) {
  if (active === "kyc") return <KycPanel />;
  if (active === "risk") return <RiskPanel />;
  if (active === "wallet") return <WalletPanel />;
  if (active === "affiliates") return <AffiliatesPanel />;
  if (active === "reports") return <ReportsPanel />;
  return <DashboardPanel />;
}

export function OperationsSection() {
  const [active, setActive] = useState<OpsKey>("dashboard");

  return (
    <section className="ops" id="operacao">
      <div className="sec-head">
        <div className="sec-tag"><span className="num">04 /</span>Backoffice Operacional</div>
        <h2 className="sec-title">Console completo para<br />operar com <span className="ac">controle total.</span></h2>
        <p className="sec-desc">Cada módulo do backoffice foi desenhado para dar visibilidade em tempo real sobre receita, jogadores, risco e compliance.</p>
      </div>
      <div className="ops-grid">
        <div className="ops-tabs" role="tablist" aria-label="Módulos do backoffice">
          {tabs.map((tab) => (
            <button className={`ops-tab${active === tab.key ? " on" : ""}`} type="button" role="tab" aria-selected={active === tab.key} onClick={() => setActive(tab.key)} key={tab.key}>
              <div className="ops-tab-icon"><TabIcon type={tab.key} /></div>
              <div className="ops-tab-info"><div className="tt">{tab.title}</div><div className="dd">{tab.description}</div></div>
            </button>
          ))}
        </div>
        <div className="ops-display"><ActivePanel active={active} /></div>
      </div>
    </section>
  );
}
