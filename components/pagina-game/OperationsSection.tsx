"use client";

import { useState } from "react";
import { useTranslation } from "@/components/traducaoButtons";
import type { TranslationKey } from "@/components/traducaoButtons";
import { MiniChart } from "./ShowcaseSection";
import { ShieldIcon } from "./Icons";

type OpsKey = "dashboard" | "kyc" | "risk" | "wallet" | "affiliates" | "reports";

const tabs = [
  { key: "dashboard", titleKey: "game.operations.tab.dashboard.title", descriptionKey: "game.operations.tab.dashboard.description" },
  { key: "kyc", titleKey: "game.operations.tab.kyc.title", descriptionKey: "game.operations.tab.kyc.description" },
  { key: "risk", titleKey: "game.operations.tab.risk.title", descriptionKey: "game.operations.tab.risk.description" },
  { key: "wallet", titleKey: "game.operations.tab.wallet.title", descriptionKey: "game.operations.tab.wallet.description" },
  { key: "affiliates", titleKey: "game.operations.tab.affiliates.title", descriptionKey: "game.operations.tab.affiliates.description" },
  { key: "reports", titleKey: "game.operations.tab.reports.title", descriptionKey: "game.operations.tab.reports.description" },
] as const satisfies ReadonlyArray<{ key: OpsKey; titleKey: TranslationKey; descriptionKey: TranslationKey }>;

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
  const { t } = useTranslation();

  return (
    <>
      <DisplayHeader title={t("game.operations.dashboard.title")} meta={t("game.operations.dashboard.meta")} />
      <div className="dash-row"><Stat label={t("game.operations.dashboard.ggrToday")} value="R$ 284.3K" valueClass="cy" detail={t("game.operations.dashboard.vsYesterday")} /><Stat label={t("game.operations.dashboard.ngrToday")} value="R$ 198.1K" valueClass="go" detail="▲ +12.7%" /><Stat label={t("game.operations.dashboard.activePlayers")} value="12.847" valueClass="gr" detail={t("game.operations.dashboard.today")} /></div>
      <div className="chart"><div className="chart-head"><div className="chart-title">{t("game.operations.dashboard.chart")}</div><div className="chart-legend"><span><span className="dot cyan-dot" />Casino</span><span><span className="dot gold-dot" />Sports</span><span><span className="dot violet-dot" />Live</span></div></div><MiniChart bars /></div>
      <table className="dtable"><thead><tr><th>{t("game.operations.dashboard.metric")}</th><th className="r">{t("game.operations.dashboard.todayHeader")}</th><th className="r">7d</th><th className="r">Δ</th></tr></thead><tbody>
        <tr><td>{t("game.operations.dashboard.deposits")}</td><td className="r mono">R$ 412K</td><td className="r mono">R$ 2.8M</td><td className="r mono st-ok">+14%</td></tr>
        <tr><td>{t("game.operations.dashboard.withdrawals")}</td><td className="r mono">R$ 198K</td><td className="r mono">R$ 1.4M</td><td className="r mono st-ok">+8%</td></tr>
        <tr><td>{t("game.operations.dashboard.newFtd")}</td><td className="r mono">312</td><td className="r mono">2.184</td><td className="r mono st-ok">+22%</td></tr>
        <tr><td>{t("game.operations.dashboard.retention")}</td><td className="r mono">38.4%</td><td className="r mono">36.8%</td><td className="r mono st-ok">+1.6 pp</td></tr>
        <tr><td>LTV (90d)</td><td className="r mono">R$ 142</td><td className="r mono">—</td><td className="r mono st-ok">+R$ 8</td></tr>
      </tbody></table>
    </>
  );
}

function KycPanel() {
  const { t } = useTranslation();
  const items = [
    ["done", "✓", "game.operations.kyc.basic", "game.operations.kyc.basicDetail", null, "42s", "ok"],
    ["done", "✓", "game.operations.kyc.document", "game.operations.kyc.documentDetail", null, "1m 18s", "ok"],
    ["done", "✓", "game.operations.kyc.biometry", "game.operations.kyc.biometryDetail", null, "38s", "ok"],
    ["curr", "●", "game.operations.kyc.address", "game.operations.kyc.addressDetail", "game.operations.kyc.review", null, "wait"],
    ["", "5", "game.operations.kyc.screening", "game.operations.kyc.screeningDetail", "game.operations.kyc.waiting", null, "wait"],
    ["", "6", "game.operations.kyc.final", "game.operations.kyc.finalDetail", null, "—", "wait"],
  ] as const satisfies ReadonlyArray<readonly [string, string, TranslationKey, TranslationKey, TranslationKey | null, string | null, string]>;
  return (
    <>
      <DisplayHeader title={t("game.operations.kyc.title")} meta={t("game.operations.kyc.meta")} />
      <div className="dash-row"><Stat label={t("game.operations.kyc.completed")} value="847" valueClass="cy" detail={t("game.operations.kyc.approvalRate")} /><Stat label={t("game.operations.kyc.averageTime")} value={<>42<span className="small-unit">s</span></>} valueClass="go" detail={t("game.operations.kyc.weekDelta")} /><Stat label={t("game.operations.kyc.manualReview")} value="23" valueClass="gold-stat" detail={t("game.operations.kyc.critical")} /></div>
      <div className="panel-caption">{t("game.operations.kyc.flow")}</div>
      <div className="kyc-list">{items.map(([stepClass, step, titleKey, detailKey, statusKey, statusValue, statusClass]) => (
        <div className="kyc-item" key={titleKey}><div className={`kyc-step${stepClass ? ` ${stepClass}` : ""}`}>{step}</div><div className="kyc-text">{t(titleKey)}<span className="sub">{t(detailKey)}</span></div><div className={`kyc-status ${statusClass}`}>{statusKey ? t(statusKey) : statusValue}</div></div>
      ))}</div>
    </>
  );
}

function RiskPanel() {
  const { t } = useTranslation();
  const events = [
    ["crit", "game.operations.risk.withdrawal", "game.operations.risk.withdrawalDetail", "game.operations.risk.seconds12"],
    ["warn", "game.operations.risk.logins", "game.operations.risk.loginsDetail", "game.operations.risk.seconds38"],
    ["ok", "game.operations.risk.approved", "game.operations.risk.approvedDetail", "game.operations.risk.minute1"],
    ["warn", "game.operations.risk.pattern", "game.operations.risk.patternDetail", "game.operations.risk.minutes2"],
    ["ok", "game.operations.risk.deposit", "game.operations.risk.depositDetail", "game.operations.risk.minutes2"],
    ["crit", "game.operations.risk.suspended", "game.operations.risk.suspendedDetail", "game.operations.risk.minutes3"],
  ] as const satisfies ReadonlyArray<readonly [string, TranslationKey, TranslationKey, TranslationKey]>;
  return (
    <>
      <DisplayHeader title={t("game.operations.risk.title")} meta={t("game.operations.risk.meta")} />
      <div className="dash-row"><Stat label={t("game.operations.risk.alerts")} value="38" valueClass="gold-stat" detail={t("game.operations.risk.alertsDelta")} /><Stat label={t("game.operations.risk.blocks")} value="7" valueClass="red-stat" detail={t("game.operations.risk.blocksDetail")} /><Stat label={t("game.operations.risk.score")} value="0.18" valueClass="gr" detail={t("game.operations.risk.healthy")} /></div>
      <div className="panel-caption">{t("game.operations.risk.feed")}</div>
      {events.map(([level, titleKey, detailKey, timeKey]) => <div className="risk-row" key={titleKey}><div className={`risk-dot ${level}`} /><div className="risk-text">{t(titleKey)}<span className="sub">{t(detailKey)}</span></div><div className="risk-time">{t(timeKey)}</div></div>)}
    </>
  );
}

function WalletPanel() {
  const { t } = useTranslation();

  return (
    <>
      <DisplayHeader title={t("game.operations.wallet.title")} meta="PIX · TED · CRYPTO" />
      <div className="wallet"><div className="balance-l">{t("game.operations.wallet.balance")}</div><div className="balance-v"><span className="cur">R$</span>4.218.430,<span className="balance-cents">76</span></div><div className="balance-row"><div>{t("game.operations.wallet.reserve")}<span className="v">R$ 1.20M</span></div><div>{t("game.operations.wallet.liquidity")}<span className="v">R$ 3.02M</span></div></div></div>
      <div className="panel-caption">{t("game.operations.wallet.methods")}</div>
      <div className="pay-methods"><div className="pm"><span className="v">8.2K</span>PIX in</div><div className="pm g"><span className="v">3.1K</span>PIX out</div><div className="pm"><span className="v">412</span>TED</div><div className="pm g"><span className="v">38</span>Crypto</div></div>
      <table className="dtable table-spaced"><thead><tr><th>{t("game.operations.wallet.time")}</th><th>{t("game.operations.wallet.type")}</th><th>{t("game.operations.wallet.player")}</th><th className="r">{t("game.operations.wallet.value")}</th><th>{t("game.operations.wallet.status")}</th></tr></thead><tbody>
        <tr><td className="mono">14:32:18</td><td>PIX in</td><td>#298804</td><td className="r mono">R$ 250,00</td><td><span className="pill ok">{t("game.operations.wallet.settled")}</span></td></tr>
        <tr><td className="mono">14:31:55</td><td>PIX out</td><td>#284991</td><td className="r mono">R$ 1.840,00</td><td><span className="pill ok">{t("game.operations.wallet.paid")}</span></td></tr>
        <tr><td className="mono">14:31:42</td><td>PIX in</td><td>#299142</td><td className="r mono">R$ 50,00</td><td><span className="pill ok">{t("game.operations.wallet.settled")}</span></td></tr>
        <tr><td className="mono">14:31:08</td><td>PIX in</td><td>#298881</td><td className="r mono">R$ 1.000,00</td><td><span className="pill warn">{t("game.operations.wallet.review")}</span></td></tr>
        <tr><td className="mono">14:30:54</td><td>PIX out</td><td>#284113</td><td className="r mono">R$ 12.400,00</td><td><span className="pill err">{t("game.operations.wallet.blocked")}</span></td></tr>
        <tr><td className="mono">14:30:21</td><td>USDT in</td><td>#290017</td><td className="r mono">R$ 5.200,00</td><td><span className="pill ok">{t("game.operations.wallet.confirmed")}</span></td></tr>
      </tbody></table>
    </>
  );
}

function AffiliatesPanel() {
  const { t } = useTranslation();

  return (
    <>
      <DisplayHeader title={t("game.operations.affiliates.title")} meta={t("game.operations.affiliates.meta")} />
      <div className="dash-row"><Stat label={t("game.operations.affiliates.active")} value="847" valueClass="cy" detail={t("game.operations.affiliates.weekDelta")} /><Stat label={t("game.operations.affiliates.paid")} value="R$ 184K" valueClass="go" detail={t("game.operations.affiliates.via")} /><Stat label={t("game.operations.affiliates.ftd")} value="1.247" valueClass="gr" detail={t("game.operations.affiliates.total")} /></div>
      <div className="panel-caption">{t("game.operations.affiliates.tiers")}</div>
      <div className="aff-tiers"><div className="aff-tier"><div className="tier-name">{t("game.operations.affiliates.bronze")}</div><div className="tier-rate">25<span className="small-unit">%</span></div><div className="tier-r">{t("game.operations.affiliates.bronzeRule")}</div></div><div className="aff-tier active"><div className="tier-name">{t("game.operations.affiliates.silver")}</div><div className="tier-rate">35<span className="small-unit">%</span></div><div className="tier-r">{t("game.operations.affiliates.silverRule")}</div></div><div className="aff-tier"><div className="tier-name">{t("game.operations.affiliates.gold")}</div><div className="tier-rate">45<span className="small-unit">%</span></div><div className="tier-r">{t("game.operations.affiliates.goldRule")}</div></div></div>
      <table className="dtable table-spaced-sm"><thead><tr><th>{t("game.operations.affiliates.affiliate")}</th><th>{t("game.operations.affiliates.tier")}</th><th className="r">FTDs</th><th className="r">{t("game.operations.affiliates.ngr")}</th><th className="r">{t("game.operations.affiliates.commission")}</th></tr></thead><tbody>
        <tr><td>casadaaposta_</td><td><span className="pill ok">{t("game.operations.affiliates.gold").toUpperCase()}</span></td><td className="r mono">84</td><td className="r mono">R$ 42.8K</td><td className="r mono st-ok">R$ 19.2K</td></tr>
        <tr><td>tip_do_dia</td><td><span className="pill warn">{t("game.operations.affiliates.silver").toUpperCase()}</span></td><td className="r mono">42</td><td className="r mono">R$ 18.4K</td><td className="r mono st-ok">R$ 6.4K</td></tr>
        <tr><td>verde_e_amarelo</td><td><span className="pill ok">{t("game.operations.affiliates.gold").toUpperCase()}</span></td><td className="r mono">67</td><td className="r mono">R$ 31.2K</td><td className="r mono st-ok">R$ 14.0K</td></tr>
        <tr><td>palpiteiro.br</td><td><span className="pill warn">{t("game.operations.affiliates.silver").toUpperCase()}</span></td><td className="r mono">28</td><td className="r mono">R$ 9.8K</td><td className="r mono st-ok">R$ 3.4K</td></tr>
      </tbody></table>
    </>
  );
}

function ReportsPanel() {
  const { t } = useTranslation();
  const rows = [
    ["game.operations.reports.ggr", "game.operations.reports.today0900", "game.operations.reports.daily", "2.4 MB"],
    ["game.operations.reports.retention", "game.operations.reports.today0600", "game.operations.reports.weekly", "8.1 MB"],
    ["game.operations.reports.deposits", "game.operations.reports.today0900", "game.operations.reports.daily", "1.2 MB"],
    ["game.operations.reports.kyc", "game.operations.reports.today0800", "game.operations.reports.daily", "4.8 MB"],
    ["game.operations.reports.affiliates", "game.operations.reports.today0900", "game.operations.reports.daily", "3.1 MB"],
    ["game.operations.reports.players", "game.operations.reports.today0700", "game.operations.reports.daily", "12.4 MB"],
  ] as const satisfies ReadonlyArray<readonly [TranslationKey, TranslationKey, TranslationKey, string]>;
  return (
    <>
      <DisplayHeader title={t("game.operations.reports.title")} meta="EXPORT · API · BI" />
      <div className="dash-row"><Stat label={t("game.operations.reports.available")} value="42" valueClass="cy" detail={t("game.operations.reports.custom")} /><Stat label={t("game.operations.reports.exports")} value="1.847" valueClass="go" detail="CSV · XLSX · JSON" /><Stat label={t("game.operations.reports.endpoints")} value="87" valueClass="gr" detail="REST + Webhooks" /></div>
      <div className="chart"><div className="chart-head"><div className="chart-title">{t("game.operations.reports.chart")}</div><div className="chart-legend"><span><span className="dot cyan-dot" />{t("game.operations.reports.gross")}</span><span><span className="dot gold-dot" />{t("game.operations.reports.net")}</span></div></div><MiniChart bars /></div>
      <table className="dtable"><thead><tr><th>{t("game.operations.reports.report")}</th><th>{t("game.operations.reports.last")}</th><th>{t("game.operations.reports.frequency")}</th><th className="r">{t("game.operations.reports.size")}</th></tr></thead><tbody>
        {rows.map(([reportKey, lastKey, frequencyKey, size]) => <tr key={reportKey}><td>{t(reportKey)}</td><td className="mono">{t(lastKey)}</td><td>{t(frequencyKey)}</td><td className="r mono">{size}</td></tr>)}
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
  const { t } = useTranslation();

  return (
    <section className="ops" id="operacao">
      <div className="sec-head">
        <div className="sec-tag"><span className="num">04 /</span>{t("game.operations.eyebrow")}</div>
        <h2 className="sec-title">{t("game.operations.heading.line1")}<br />{t("game.operations.heading.beforeHighlight")}<span className="ac">{t("game.operations.heading.highlight")}</span></h2>
        <p className="sec-desc">{t("game.operations.description")}</p>
      </div>
      <div className="ops-grid">
        <div className="ops-tabs" role="tablist" aria-label={t("game.operations.tabsAria")}>
          {tabs.map((tab) => (
            <button className={`ops-tab${active === tab.key ? " on" : ""}`} type="button" role="tab" aria-selected={active === tab.key} onClick={() => setActive(tab.key)} key={tab.key}>
              <div className="ops-tab-icon"><TabIcon type={tab.key} /></div>
              <div className="ops-tab-info"><div className="tt">{t(tab.titleKey)}</div><div className="dd">{t(tab.descriptionKey)}</div></div>
            </button>
          ))}
        </div>
        <div className="ops-display"><ActivePanel active={active} /></div>
      </div>
    </section>
  );
}
