import { Link } from "react-router";
import { translations } from "../../../../config/translationAssets";
import { useLang } from "../../../hooks/useLang";

export default function LargeDesktop() {
  const { language } = useLang();

  const desktopMenuItems = Object.entries(translations[language]);

  return (
    <div
      data-testid="layout-menu__container-tablet"
      className="relative w-full h-full flex flex-row justify-evenly items-center z-50"
    >
      {desktopMenuItems.map((item, index) => {
        const link = item[0].split(".")[1];
        const text = item[1];
        return (
          <div
            key={index}
            data-testid="layout-menu__tablet-item"
            className="font-oldania font-bold text-3xl text-white/75"
          >
            <Link
              to={`/${link}`}
              data-testid="layout-menu__tablet-item-link"
              className="cursor-pointer"
            >
              {text}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
