import { useContext } from "react";
import "./App.css";
import Button from "../src/components/Button";
import {CounterContext} from "../src/context/CounterContext";

function App() {
  const counterState = useContext(CounterContext)

  console.log('context is :', counterState)
  return (
    <>
      <h1>Count is {counterState.count}</h1>
      <Button />
      <Button />
      <Button />
      <Button />
    </>
  );
}

export default App;
