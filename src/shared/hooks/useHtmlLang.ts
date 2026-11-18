import { useEffect } from "react";
import { useLanguageStore } from "../../stores/uiStore";

export function useHtmlLang() {
  const language = useLanguageStore((state) => state.language);
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
}