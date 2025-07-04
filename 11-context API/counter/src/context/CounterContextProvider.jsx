import  { useState } from "react";
import counterContext from "./counterContext";

const CounterContextProvider = ({ children }) => {
  const [count, setCount] = useState(5);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <counterContext.Provider value={{ increment, decrement, count, setCount }}>
      {children}
    </counterContext.Provider>
  );
};

export default CounterContextProvider;
