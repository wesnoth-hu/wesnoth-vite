import { useEffect, useRef, useState } from "react";
import { Icon } from "@mdi/react";
import { mdiChevronDown } from "@mdi/js";
import { useLang } from "../../hooks/useLang";
import { LANGUAGES } from "../../../config/languages";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLang();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
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
  }, [open]);

  const current = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  return (
    <div
      ref={rootRef}
      data-testid="dropdown-container"
      className="relative rounded-md bg-[#d1c379]"
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="language-list"
        aria-label={`Nyelv: ${current.label}`}
        onClick={() => setOpen((isOpen) => !isOpen)}
        className="flex flex-row items-center p-2 cursor-pointer"
      >
        <span className={`fi fi-${current.flag}`}></span>
        <Icon
          path={mdiChevronDown}
          size={1}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          data-testid="dropdown-list"
          className="absolute right-0 top-full mt-1 p-1 rounded-md flex flex-col bg-[#d1c379]"
        >
          {LANGUAGES.map(({ code, flag, label }) => (
            <li key={code}>
              <button
                type="button"
                lang={code}
                aria-label={label}
                aria-current={code === language}
                onClick={() => {
                  setLanguage(code);
                  setOpen(false);
                }}
                className="p-1 w-full cursor-pointer"
              >
                <span className={`fi fi-${flag}`}></span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}