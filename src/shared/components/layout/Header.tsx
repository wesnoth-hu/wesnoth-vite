import LanguageSwitcher from "./LanguageSwitcher";
import { useLang } from "../../hooks/useLang";
import { languageAssets } from "../../../config/translationAssets";

export default function Header() {
  const { language } = useLang();
  return (
    <header
      data-testid="layout-header__bg"
      className="relative w-full h-[385px] bg-[url('/images/bg/spring_fall_season.jpg')] bg-no-repeat bg-cover bg-center z-20"
    >
      <div
        data-testid="layout-header__logo-container"
        className="absolute top-25 w-full mx-auto h-auto flex flex-row justify-center items-center z-30"
      >
        <img
          data-testid="layout-header__logo-image"
          src={languageAssets[language].logo}
          alt={languageAssets[language].alt}
          width={400}
          height={200}
          className="object-contain"
        />
      </div>
      <div id="layout-header__i10n" className="absolute top-5 right-5 z-40">
        <LanguageSwitcher />
      </div>
    </header>
  );
}
