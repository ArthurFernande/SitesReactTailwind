"use client";
import { createContext, useEffect, useState, type ReactNode } from "react";
import { translations } from "./translations";
import type { Language, TranslationKey } from "./types";

type TranslationContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
export const TranslationContext = createContext<TranslationContextValue | null>(null);
const storageKey = "site-language";

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("pt-BR");
  useEffect(() => { const saved = localStorage.getItem(storageKey); if (saved === "pt-BR" || saved === "es") setLanguageState(saved); }, []);
  useEffect(() => { document.documentElement.lang = language; localStorage.setItem(storageKey, language); }, [language]);
  const t = (key: TranslationKey) => translations[language][key] ?? translations["pt-BR"][key] ?? key;
  return <TranslationContext.Provider value={{ language, setLanguage: setLanguageState, t }}>{children}</TranslationContext.Provider>;
}
