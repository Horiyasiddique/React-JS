import React, { useRef, useState } from "react";

const App = () => {
  let [timer, setTimer] = useState(60);
  let intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTimer((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resume = () => {
    start();
  };

  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-700 min-h-screen flex flex-col items-center justify-center gap-8 p-6">
      <h1 className="text-white text-4xl font-extrabold mb-5">⏳ 60 Seconds Timer</h1>

      <div className="w-40 h-40 flex items-center justify-center rounded-full shadow-2xl bg-white border-4 border-amber-500">
        <h1 className="text-5xl font-bold text-amber-500">{timer}s</h1>
      </div>

      <div className="flex items-center justify-center gap-5">
        <button
          className="bg-amber-500 px-5 py-2 text-lg text-white font-bold cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform"
          onClick={start}
        >
          Start
        </button>
        <button
          className="bg-red-500 px-5 py-2 text-lg text-white font-bold cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform"
          onClick={pause}
        >
          Pause
        </button>
        <button
          className="bg-green-500 px-5 py-2 text-lg text-white font-bold cursor-pointer rounded-lg shadow-md hover:scale-105 transition-transform"
          onClick={resume}
        >
          Resume
        </button>
      </div>
    </div>
  );
};

export default App;
