"use client";

import { createContext, useState } from "react";
import {
  Theme,
  ThemeContextType,
  ThemeProviderProps,
} from "@/app/lib/interfaces/Theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  setTheme: () => {},
});

export default function ThemeProvider({
  children,
  initialTheme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const contextValue: ThemeContextType = {
    theme,
    setTheme: (newTheme: Theme) => setTheme(newTheme),
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
