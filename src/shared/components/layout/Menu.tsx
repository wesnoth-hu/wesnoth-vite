import { Link } from "react-router";
import { Icon } from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { MENU_ITEMS } from "../../../config/routes";

//TODO dynamic items to the right side(auth related)
export default function Menu() {
  return (
    <div
      data-testid="layout-menu__container-mobile"
      className="relative w-full h-full flex flex-row justify-evenly items-center z-50"
    >
      {MENU_ITEMS.map((item, index) => {
        if (index > 0) {
          return;
        }
        return (
          <div
            key={index}
            data-testid="layout-menu__item"
            className="font-oldania font-bold text-3xl text-white/75"
          >
            <Link
              to={item.href}
              data-testid="layout-menu__item-link"
              className="w-full p-2 cursor-pointer"
            >
              {item.label}
            </Link>
          </div>
        );
      })}
      <div data-testid="layout-menu__item" className="relative">
        <Icon
          path={mdiMenu}
          size={2}
          className="text-white/75 cursor-pointer"
        />
        {/* //TODO hover menu only on smaller sizes */}
      </div>
    </div>
  );
}
