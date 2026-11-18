import type { TLanguage } from "../../types/common";

export type TLanguageStore = {
  language: TLanguage;
  setLanguage: (language: TLanguage) => void;
};
