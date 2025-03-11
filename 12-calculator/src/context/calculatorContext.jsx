import { createContext, useContext, useState } from "react";

export const CalculatorContext = createContext();

export const UseCalculator = () => useContext(CalculatorContext);

export const ContextProvider = ({ children }) => {
  const [currentValue, setCurrentValue] = useState("");

  const handleButtonClick = (value) => {
    if (value === "AC") {
      setCurrentValue(""); // Clear all
    } else if (value === "=") {
      try {
        setCurrentValue(eval(currentValue).toString());
      } catch {
        setCurrentValue("Error");
      }
    } else {
      setCurrentValue((prev) => prev + value); // Append values
    }
  };

  return (
    <CalculatorContext.Provider value={{ currentValue, handleButtonClick }}>
      {children}
    </CalculatorContext.Provider>
  );
};
