import { useState, useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

type Responsive = "sm" | "xs" | "md" | "lg" | "xl" | "2xl" | "2xs" | "3xs";

export default function useResponsive(): Responsive {
  const is2xs: boolean = useMediaQuery("(min-width: 350px)");
  const isXs: boolean = useMediaQuery("(min-width: 480px)");
  const isSm: boolean = useMediaQuery("(min-width: 640px)");
  const isMd: boolean = useMediaQuery("(min-width: 768px)");
  const isLg: boolean = useMediaQuery("(min-width: 1024px)");
  const isXl: boolean = useMediaQuery("(min-width: 1280px)");
  const is2xl: boolean = useMediaQuery("(min-width: 1536px)");

  const [screen, setScreen] = useState<Responsive>("3xs");

  useEffect(() => {
    if (is2xs) {
      setScreen("2xs");
    }

    if (isXs) {
      setScreen("xs");
    }

    if (isSm) {
      setScreen("sm");
    }

    if (isMd) {
      setScreen("md");
    }

    if (isLg) {
      setScreen("lg");
    }

    if (isXl) {
      setScreen("xl");
    }

    if (is2xl) {
      setScreen("2xl");
    }
  }, [isXl, isSm, isLg, isMd, isXs, is2xs, is2xl]);

  return screen;
}

export const useMobileTablet = (): boolean => {
  const responsive = useResponsive();

  return ["3xs", "2xs", "xs", "sm", "md"].includes(responsive);
};

export const useDesktop = (): boolean => {
  const responsive = useResponsive();

  return ["lg", "xl", "2xl"].includes(responsive);
};
