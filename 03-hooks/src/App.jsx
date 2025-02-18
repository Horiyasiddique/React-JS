import { useState } from "react";
import "./App.css";

const app = () => {
  let [counter, setCounter] = useState(15);

  //function for add value
  const add = () => {
    if (counter >= 20) {
      alert('counter value can not be greater than 20')
      setCounter(counter);
    } else setCounter(counter + 1);
  };

  //function for remove value
  const sub = () => {
    if (counter <= 0) {
      alert('counter value can not be lesser than 0')
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Counter App</h1>
      <h4>Counter value is {counter}</h4>
      <button onClick={add}>Increase Value : {counter}</button>
      <br />
      <br />
      <button onClick={sub}>Decrease Value : {counter}</button>
    </>
  );
};

export default app;
