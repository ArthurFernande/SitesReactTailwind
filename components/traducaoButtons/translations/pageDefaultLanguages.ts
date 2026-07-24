import type { Language } from "../types";

export const pageDefaultLanguages = {
  "/": "es",
  "/arcade": "es",
  "/form-contato": "pt-BR",
  "/produtos": "pt-BR",
  "/pagina-game": "pt-BR",
  "/global-gaming-erp": "es",
  "/gaming-legacy-erp": "es",
  "/politica-de-privacidad": "es",
} as const satisfies Record<string, Language>;

export function getPageDefaultLanguage(pathname: string): Language {
  return pageDefaultLanguages[pathname as keyof typeof pageDefaultLanguages] ?? "pt-BR";
}
