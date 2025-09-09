import { useContext } from "react";
import { ThemeProvider } from "./themeSwitcher";

function ThemeButton() {
  const { theme, setThemeValue } = useContext(ThemeProvider);

  console.log("themeValue", theme);
  return (
    <div className="btnSwitch">
      <button
        className={`btn ${theme == "light" ? "active" : ""}`}
        onClick={() => setThemeValue("light")}
      >
        Light
      </button>
      <button
        className={`btn ${theme == "dark" ? "active" : ""}`}
        onClick={() => setThemeValue("dark")}
      >
        Dark
      </button>
    </div>
  );
}

export default ThemeButton;
