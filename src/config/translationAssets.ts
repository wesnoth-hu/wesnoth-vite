import type { TLanguage } from "../types/common";

const hu = {
  "nav.game": "Játék",
  "nav.kb": "Tudástár",
  "nav.media": "Média",
  "nav.forum": "Fórum",
  "nav.signin": "Bejelentkezés",
  "nav.signup": "Regisztráció",
} as const;

export type TranslationKey = keyof typeof hu;
export type TDictionary = Partial<Record<TranslationKey, string>>;

export const translations: Record<TLanguage, TDictionary> = {
  hu,
  ro: {
    "nav.game": "Jocul",
    "nav.kb": "Articole",
    "nav.media": "Media",
    "nav.forum": "Forum",
    "nav.signin": "Conectare",
    "nav.signup": "Înscriere",
  },
  pl: {
    "nav.game": "Gra",
    "nav.kb": "Baza Wiedzy",
    "nav.media": "Media",
    "nav.forum": "Forum",
    "nav.signin": "Zagolowac Sie",
    "nav.signup": "Zapisac Sie",
  },
};

export const languageAssets: Record<TLanguage, { logo: string; alt: string }> =
  {
    hu: {
      logo: "/images/logos/mwesnoth_fall_logo_text.png",
      alt: "Magyar Wesnoth Logó",
    },
    ro: {
      logo: "/images/logos/rwesnoth_fall_logo_text.png",
      alt: "Siglă Wesnoth Română",
    },
    pl: {
      logo: "/images/logos/lwesnoth_fall_logo_text.png",
      alt: "Polskie Logo Wesnoth",
    },
  };
