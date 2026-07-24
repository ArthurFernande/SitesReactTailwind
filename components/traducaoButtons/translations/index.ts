import { commonTranslations } from "./common";
import { productsTranslations } from "./pages/produtos";
import { globalGamingErpTranslations } from "./pages/global-gaming-erp";
import { gamingLegacyErpTranslations } from "./pages/gaming-legacy-erp";
import { homeTranslations } from "./pages/home";
import { arcadeTranslations } from "./pages/arcade";
import { formContactTranslations } from "./pages/form-contato";
import { paginaGameTranslations } from "./pages/pagina-game";
import { privacyPolicyTranslations } from "./pages/politica-de-privacidad";

export const translations = {
  "pt-BR": {
    ...commonTranslations["pt-BR"],
    ...productsTranslations["pt-BR"],
    ...globalGamingErpTranslations["pt-BR"],
    ...gamingLegacyErpTranslations["pt-BR"],
    ...homeTranslations["pt-BR"],
    ...arcadeTranslations["pt-BR"],
    ...formContactTranslations["pt-BR"],
    ...paginaGameTranslations["pt-BR"],
    ...privacyPolicyTranslations["pt-BR"],
  },
  es: {
    ...commonTranslations.es,
    ...productsTranslations.es,
    ...globalGamingErpTranslations.es,
    ...gamingLegacyErpTranslations.es,
    ...homeTranslations.es,
    ...arcadeTranslations.es,
    ...formContactTranslations.es,
    ...paginaGameTranslations.es,
    ...privacyPolicyTranslations.es,
  },
} as const;

type PortugueseKey = keyof typeof translations["pt-BR"];
type SpanishKey = keyof typeof translations.es;

const _catalogParity: Record<PortugueseKey, string> = translations.es;
const _reverseCatalogParity: Record<SpanishKey, string> = translations["pt-BR"];
void _catalogParity;
void _reverseCatalogParity;
