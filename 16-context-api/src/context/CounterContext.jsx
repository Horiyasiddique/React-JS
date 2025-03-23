import { createContext, useState } from "react";

export const CounterContext = createContext(null);

const CounterProvider = (props) => {
  let [count, setCount] = useState(5);
  return (
    <CounterContext.Provider value={{ count, setCount}}>
      {props.children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
