import { ContextProvider } from "./context/calculatorContext.jsx";
import Calculator from "./components/Calculator";

function App() {
  return (
    <ContextProvider>
      <Calculator />
    </ContextProvider>
  );
}

export default App;
