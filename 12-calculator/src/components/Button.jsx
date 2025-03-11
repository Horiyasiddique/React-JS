import React from "react";
import { UseCalculator } from "../context/calculatorContext";

function Button({ buttonText }) {
  const { handleButtonClick } = UseCalculator();
  return (
    <div
      className="py-3 px-5 text-white text-2xl bg-[#FF9808] text-center rounded-full font-semibold inline-block cursor-pointer"
      onClick={() => handleButtonClick(buttonText)}
    >
      {buttonText}
    </div>
  );
}

export default Button;
