import "./App.css";
import CounterButton from "./components/CounterButton";
import CounterResult from "./components/CounterResult";
import CounterContextProvider from "./context/CounterContextProvider";

function App() {
  return (
    <CounterContextProvider>
      <CounterResult />
      <CounterButton />
    </CounterContextProvider>
  );
}

export default App;
