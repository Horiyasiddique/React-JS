import { useState } from "react";
import calculatorContext from "./calculatorContext";

const CalculatorContextProvider = ({ children }) => {
  const add = (num1, num2) => {
    return num1 + num2;
  };
  const sub = (num1, num2) => {
    return num1 - num2;
  };
  const multiply = (num1, num2) => {
    return num1 * num2;
  };
  const divide = (num1, num2) => {
    return num1 / num2;
  };
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  return (
    <calculatorContext.Provider value={{ add, sub, multiply, divide, num1, num2, setNum1, setNum2 }}>
      {children}
    </calculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
