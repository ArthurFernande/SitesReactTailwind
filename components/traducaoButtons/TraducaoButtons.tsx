"use client";

import { useTranslation } from "./useTranslation";

function BrazilFlag() {
  return <svg aria-hidden="true" viewBox="0 0 28 20" className="h-4 w-[22px] overflow-hidden rounded-[3px]"><rect width="28" height="20" fill="#169B62"/><path d="M14 2.8 25 10 14 17.2 3 10Z" fill="#FFDF00"/><circle cx="14" cy="10" r="4.4" fill="#002776"/><path d="M10.1 9.2c2.8-.8 5.4-.5 7.8.9" fill="none" stroke="#fff" strokeWidth=".8"/></svg>;
}
function SpainFlag() {
  return <svg aria-hidden="true" viewBox="0 0 28 20" className="h-4 w-[22px] overflow-hidden rounded-[3px]"><rect width="28" height="20" fill="#AA151B"/><rect y="5" width="28" height="10" fill="#F1BF00"/><rect x="7" y="7" width="2" height="5" rx=".5" fill="#AA151B"/></svg>;
}

export function TraducaoButtons({ mobile = false }: { mobile?: boolean }) {
  const { language, setLanguage, t } = useTranslation();
  const option = (active: boolean) => [
    "group flex items-center justify-center gap-2 rounded-lg border font-medium tracking-wide outline-none transition-all duration-200 focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
    mobile ? "min-h-11 flex-1 px-3 text-sm" : "h-9 min-w-[72px] px-3 text-xs",
    active ? "border-cyan-300/70 bg-cyan-300/15 text-white shadow-[0_0_16px_rgba(34,211,238,.18)]" : "border-white/15 bg-white/[.04] text-slate-300 hover:border-cyan-300/35 hover:bg-white/[.08] hover:text-white",
  ].join(" ");

  return (
    <div data-language-selector data-no-translate className={`inline-flex items-center gap-1 rounded-[10px] border border-white/10 bg-slate-950/70 p-1 backdrop-blur ${mobile ? "w-full" : ""}`} role="group" aria-label={t("language.selector")}>
      <button type="button" onClick={() => setLanguage("pt-BR")} aria-label={t("language.selectPortuguese")} aria-pressed={language === "pt-BR"} title={t("language.selectPortuguese")} className={option(language === "pt-BR")}><BrazilFlag/><span>BR</span></button>
      <button type="button" onClick={() => setLanguage("es")} aria-label={t("language.selectSpanish")} aria-pressed={language === "es"} title={t("language.selectSpanish")} className={option(language === "es")}><SpainFlag/><span>ES</span></button>
    </div>
  );
}
