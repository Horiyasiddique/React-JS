import Input from "./components/Input";
import Output from "./components/Output";
import { useState, useEffect, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    document.title = `Characters: ${text.length}`;
  }, [text]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex flex-col items-center justify-start pt-20 px-4">
      <h1 className="text-4xl font-bold mb-10 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400">
        Characters Counter
      </h1>
      <div className="w-full max-w-2xl space-y-8">
        <Input value={text} inputRef={inputRef} setValue={setText} />
        <Output count={text.length} />
      </div>
    </div>
  );
}

export default App;