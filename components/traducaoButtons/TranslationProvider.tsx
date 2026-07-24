"use client";

import { usePathname } from "next/navigation";
import { createContext, useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { translations } from "./translations";
import { getPageDefaultLanguage } from "./translations/pageDefaultLanguages";
import type { Language, TranslationKey } from "./types";

type TranslationContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey) => string;
};

export const TranslationContext = createContext<TranslationContextValue | null>(null);
const storagePrefix = "site-language:";

export function TranslationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const defaultLanguage = getPageDefaultLanguage(pathname);
  const [routeLanguage, setRouteLanguage] = useState({
    pathname,
    language: defaultLanguage,
  });
  const language = routeLanguage.pathname === pathname
    ? routeLanguage.language
    : defaultLanguage;

  useEffect(() => {
    const saved = window.localStorage.getItem(`${storagePrefix}${pathname}`);
    const next = saved === "pt-BR" || saved === "es" ? saved : defaultLanguage;
    setRouteLanguage({ pathname, language: next });
    document.documentElement.lang = next;
    window.localStorage.setItem(`${storagePrefix}${pathname}`, next);
  }, [defaultLanguage, pathname]);

  const setLanguage = useCallback((next: Language) => {
    setRouteLanguage({ pathname, language: next });
    document.documentElement.lang = next;
    window.localStorage.setItem(`${storagePrefix}${pathname}`, next);
  }, [pathname]);
  const t = useCallback((key: TranslationKey) => {
    const translated = translations[language][key]
      ?? translations[defaultLanguage][key]
      ?? translations["pt-BR"][key];
    if (!translated && process.env.NODE_ENV !== "production") {
      console.warn(`[translations] Chave ausente: ${key}`);
    }
    return translated ?? key;
  }, [defaultLanguage, language]);
  const value = useMemo(() => ({ language, setLanguage, t }), [language, setLanguage, t]);

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
}
