import { useState } from "react";
import { useBreakpoint } from "../../hooks/useBreakpoint";
import Mobile from "./MenuModules/Mobile";
import Tablet from "./MenuModules/Tablet";
import SmallDesktop from "./MenuModules/SmallDesktop";
import LargeDesktop from "./MenuModules/LargeDesktop";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const breakpoint = useBreakpoint();

  return (
    <div
      data-testid="layout-menu__bg"
      className="relative w-full h-[100px] bg-[url('/images/bg/dark_brown.jpg')] bg-no-repeat bg-cover bg-center z-20 shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
    >
      <div
        data-testid="layout-menu__decor"
        className="absolute top-0 left-0 z-30 w-full flex flex-row justify-between items-center"
      >
        <img
          data-testid="layout-menu__decor-corner-left"
          src="/images/decor/fleur_de_lis.png"
          alt="Medieval Corner Decor Pattern"
          width="50"
          height="50"
          className="rotate-[135deg]"
        />
        <img
          data-testid="layout-menu__decor-corner-right"
          src="/images/decor/fleur_de_lis.png"
          alt="Medieval Corner Decor Pattern"
          width="50"
          height="50"
          className="rotate-[-135deg]"
        />
      </div>
      {breakpoint === "mobile" && <Mobile open={open} setOpen={setOpen} />}
      {breakpoint === "tablet" && <Tablet open={open} setOpen={setOpen} />}
      {breakpoint === "smallDesktop" && (
        <SmallDesktop open={open} setOpen={setOpen} />
      )}
      {breakpoint === "largeDesktop" && <LargeDesktop />}
    </div>
  );
}
