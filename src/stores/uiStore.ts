import { create } from "zustand";
import { persist } from "zustand/middleware";
/** Language related imports */
import type { TLanguageStore } from "../shared/types/language";
import type { TLanguage } from "../types/common";
import { translations } from "../config/translationAssets";

/** Language related definitions */
const DEFAULT_LANGUAGE: TLanguage = "hu";

function isLanguage(value: unknown): value is TLanguage {
  return typeof value === "string" && Object.hasOwn(translations, value);
}

export const useLanguageStore = create<TLanguageStore>()(
  persist(
    (set) => ({
      language: DEFAULT_LANGUAGE,
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "mwk-language",
      merge: (persisted, current) => {
        const stored = (persisted as { language?: unknown | null | undefined })
          ?.language;
        return {
          ...current,
          language: isLanguage(stored) ? stored : current.language,
        };
      },
    },
  ),
);
