import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

export const ThemeProvider = ({
  children,
  defaultTheme = "dark",
  storageKey = "zinc-theme",
  darkModeClass = "dark-mode",
}: {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
  darkModeClass?: string;
}) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
    }
    return defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "system") {
      const sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.toggle(darkModeClass, sys === "dark");
      localStorage.removeItem(storageKey);
    } else {
      root.classList.toggle(darkModeClass, theme === "dark");
      localStorage.setItem(storageKey, theme);
    }
  }, [theme, darkModeClass, storageKey]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
