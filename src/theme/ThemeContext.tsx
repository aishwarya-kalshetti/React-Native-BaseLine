import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  scheme: "light" | "dark";
  toggle: () => void;
  colors: {
    background: string;
    text: string;
  };
};

const ThemeContext = createContext<ThemeContextType>({
  scheme: "light",
  toggle: () => {},
  colors: { background: "#fff", text: "#000" },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [scheme, setScheme] = useState<"light" | "dark">("light");

  const toggle = () => setScheme((s) => (s === "light" ? "dark" : "light"));

  const colors = scheme === "light"
    ? { background: "#fff", text: "#000" }
    : { background: "#000", text: "#fff" };

  return (
    <ThemeContext.Provider value={{ scheme, toggle, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
