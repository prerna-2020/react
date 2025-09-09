import { useState, createContext } from "react";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export const ThemeProvider = createContext();

function ThemeSwitcher() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeProvider.Provider
      value={{ theme: theme, setThemeValue: (val) => setTheme(val) }}
    >
      <div className={`container ${theme}`}>
        <div className={`header ${theme === "light" ? "dark" : "light"}`}>
          <Header />
        </div>
        <div className="main">
          <Content />
        </div>
        <div className={`footer ${theme === "light" ? "dark" : "light"}`}>
          <Footer />
        </div>
      </div>
    </ThemeProvider.Provider>
  );
}

export default ThemeSwitcher;
