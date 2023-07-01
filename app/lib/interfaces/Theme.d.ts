import { ReactNode } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Function to update the theme (Accepts prop of type Theme and returns void)
}

export interface ThemeProviderProps {
  children: ReactNode;
  initialTheme: Theme;
}
