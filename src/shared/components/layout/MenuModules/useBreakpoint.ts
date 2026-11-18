import { useMediaQuery } from "./useMediaQuery";

export type TBreakpoint = "mobile" | "tablet" | "smallDesktop" | "largeDesktop";

export function useBreakpoint(): TBreakpoint {
  const isTablet = useMediaQuery("(min-width: 640px)");
  const isSmallDesktop = useMediaQuery("(min-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");

  if (isLargeDesktop) return "largeDesktop";
  if (isSmallDesktop) return "smallDesktop";
  if (isTablet) return "tablet";
  return "mobile";
}