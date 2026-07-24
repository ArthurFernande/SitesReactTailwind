import type { translations } from "./translations";

export type Language = "pt-BR" | "es";
export type TranslationKey = keyof typeof translations["pt-BR"];
