import { useState } from "react";
import themeContext from "./themeContext";

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  const themeStyles = {
    dark: {
      background: "bg-gray-900",
      text: "text-purple-100",
      card: "bg-gray-800 border-purple-900/50",
      button: "bg-purple-800 hover:bg-purple-700 text-purple-100"
    },
    light: {
      background: "bg-purple-50",
      text: "text-purple-900",
      card: "bg-white border-purple-200",
      button: "bg-purple-600 hover:bg-purple-500 text-white"
    }
  };

  const currentTheme = themeStyles[theme];

  return (
    <themeContext.Provider value={{ theme, toggleTheme, currentTheme }}>
      <div className={`min-h-screen ${currentTheme.background} ${currentTheme.text} transition-colors duration-300 flex justify-center items-center`}>
        {children}
      </div>
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;