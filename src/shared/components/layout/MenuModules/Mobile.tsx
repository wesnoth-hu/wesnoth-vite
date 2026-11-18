import { useRef, type Dispatch, type SetStateAction } from "react";
import { Link } from "react-router";
import { Icon } from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useLang } from "../../../hooks/useLang";
import { useDismiss } from "../../../hooks/useDismiss";
import { MENU_ITEMS } from "../../../../config/menuItems";

const [firstItem, ...dropdownItems] = MENU_ITEMS;

/* Menu Container for Mobile size */
export default function Mobile({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const { t } = useLang();
  const mobileRef = useRef<HTMLDivElement>(null);

  useDismiss(mobileRef, () => setOpen(false), open);

  return (
    <div
      data-testid="layout-menu__container-mobile"
      className="relative w-full h-full flex flex-row justify-evenly items-center z-50"
    >
      <div
        data-testid="layout-menu__item"
        className="font-oldania font-bold text-3xl text-white/75"
      >
        <Link
          to={firstItem.href}
          data-testid="layout-menu__item-link"
          className="w-full p-2 cursor-pointer"
        >
          {t(firstItem.labelKey)}
        </Link>
      </div>
      <div ref={mobileRef} data-testid="layout-menu__item" className="relative">
        <button
          type="button"
          aria-expanded={open}
          aria-label="Dropdown Menu"
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
            className="absolute right-0 top-full min-w-45 min-h-30 p-1 rounded-md flex flex-col items-center bg-white/75 list-none"
          >
            {dropdownItems.map(({ href, labelKey }) => (
              <li
                key={href}
                data-testid="layout-menu__mobile-item"
                className="font-oldania font-bold text-3xl"
              >
                <Link
                  to={href}
                  data-testid="layout-menu__mobile-item-link"
                  className="cursor-pointer"
                >
                  {t(labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
