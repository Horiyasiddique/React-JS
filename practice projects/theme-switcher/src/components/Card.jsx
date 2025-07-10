import { useContext } from "react";
import themeContext from "../context/themeContext";
import Button from "./Button";

function Card() {
  const { currentTheme } = useContext(themeContext);

  return (
    <div className={`max-w-md mx-auto p-8 rounded-xl shadow-xl transition-all duration-300 ${currentTheme.card} border-2`}>
      <h2 className="text-3xl font-bold mb-4">Theme Switcher</h2>
      <p className="mb-6 text-lg opacity-90">Experience sleek design with our purple & dark theme toggle</p>
      <div className="flex justify-center">
        <Button />
      </div>
    </div>
  );
}

export default Card;