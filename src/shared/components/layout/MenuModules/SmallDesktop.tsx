import { useEffect, useRef, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router";
import { Icon } from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { translations } from "../../../../config/translationAssets";
import { useLang } from "../../../hooks/useLang";

export default function SmallDesktop({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { language } = useLang();

  const desktopRef = useRef<HTMLDivElement>(null);

  const desktopMenuItems = Object.entries(translations[language]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!desktopRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, setOpen]);

  return (
    <div
      data-testid="layout-menu__container-tablet"
      className="relative w-full h-full flex flex-row justify-evenly items-center z-50"
    >
      {desktopMenuItems.slice(0,4).map((item, index) => {
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
      <div ref={desktopRef} data-testid="layout-menu__item" className="relative">
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon
            path={mdiMenu}
            size={2}
            className="text-white/75 cursor-pointer"
          />
        </button>
        {open && (
          <ul
            data-testid="layout-menu__mobile-list"
            className="absolute right-0 top-full min-w-45 min-h-20 p-1 rounded-md flex flex-col items-center bg-white/75 list-none"
          >
            {desktopMenuItems.slice(4).map((item, index) => {
              const link = item[0].split(".")[1];
              const text = item[1];
              return (
                <li
                  key={index}
                  data-testid="layout-menu__mobile-item"
                  className="font-oldania font-bold text-3xl"
                >
                  <Link
                    to={`/${link}`}
                    data-testid="layout-menu__mobile-item-link"
                    className="cursor-pointer"
                  >
                    {text}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
