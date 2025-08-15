import Display from "./components/Display/Display";
import IncrementButton from "./components/Buttons/IncrementButton";
import DecrementButton from "./components/Buttons/DecrementButton";

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <Display />
        <div className="flex justify-center">
          <IncrementButton />
          <DecrementButton />
        </div>
      </div>
    </div>
  );
}

export default App;
