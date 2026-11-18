import { useEffect, useRef, type RefObject } from "react";

/**
 * Calls `onDismiss` when the user presses the pointer OUTSIDE the element in `ref`,
 * or presses Escape. Meant for dropdowns, menus, popovers and dialogs.
 *
 * `enabled`: pass the "is it open" state, so nothing listens while the thing is closed.
 */
export function useDismiss(
  ref: RefObject<HTMLElement | null>,
  onDismiss: () => void,
  enabled = true,
) {
  // Keep the newest callback in a ref. Callers can pass an inline arrow function
  // (a new function every render) without the listeners being removed and
  // re-added on every render, and a click never reaches an outdated callback.
  const onDismissRef = useRef(onDismiss);
  useEffect(() => {
    onDismissRef.current = onDismiss;
  });

  useEffect(() => {
    if (!enabled) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) onDismissRef.current();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onDismissRef.current();
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [ref, enabled]);
}