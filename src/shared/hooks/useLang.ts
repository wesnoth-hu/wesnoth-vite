import { useCallback } from "react";
import { useLanguageStore } from "../../stores/uiStore";
import {
  translations,
  type TranslationKey,
} from "../../config/translationAssets";

export function useLang() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const t = useCallback(
    (key: TranslationKey): string =>
      translations[language][key] ?? translations.hu[key] ?? key,
    [language],
  );

  return { language, setLanguage, t };
}
