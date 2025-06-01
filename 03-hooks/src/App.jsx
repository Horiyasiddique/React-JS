import { useState } from "react";
import "./App.css";

const App = () => {
  let [count, setCount] = useState(15);
  //increment functionality
  function increment() {
    if (count >= 20) {
      alert("counter value can not be greater than 20");
      setCount(count);
    } else {
      setCount(count + 1);
    }
  }
  //decrement functionality
  function decrement() {
    if (count <= 5) {
      alert("counter value can not be smaller than 5");
      setCount(count);
    } else {
      setCount(count - 1);
    }
  }
  return (
    <>
      <h2>Counter App</h2>
      <h3>counter value is {count}</h3>
      <button onClick={increment}>Increment : {count}</button>
      <button onClick={decrement}>Decrement : {count}</button>
      <h3>counter value is : {count}</h3>
    </>
  );
};

export default App;
