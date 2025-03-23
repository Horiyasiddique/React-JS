import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Button() {
  const { count, setCount } = useContext(CounterContext);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Button;
