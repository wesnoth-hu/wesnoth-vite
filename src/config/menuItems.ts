import type { TranslationKey } from "./translationAssets";

export type TMenuItem = {
  href: string;
  labelKey: TranslationKey;
};

export const MENU_ITEMS: readonly TMenuItem[] = [
  { href: "/game", labelKey: "nav.game" },
  { href: "/kb", labelKey: "nav.kb" },
  { href: "/media", labelKey: "nav.media" },
  { href: "/forum", labelKey: "nav.forum" },
  { href: "/signin", labelKey: "nav.signin" },
  { href: "/signup", labelKey: "nav.signup" },
];
