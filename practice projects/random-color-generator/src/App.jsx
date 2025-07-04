/**
 * RANDOM COLOR GENERATOR
 * FUNCTIONALITIES :
 * ⭐ generate random colors after every 1 second on clicked start button
 * ⭐ stop generating colors on click stop button
 * ⭐ copy to clipboard hex color code on click
 * ⭐ clean UI
 */

import { useRef, useState } from "react";

function App() {
  let [color, setColor] = useState("#D0D62F");
  const copyRef = useRef(null);
  let intervalRef = useRef(null);

  const randomColor = () => {
    let hex = "ABCDEF1234567890";
    let newColor = "#";
    for (let i = 0; i < 6; i++) {
      newColor += hex[Math.floor(Math.random() * 16)];
    }
    return newColor;
  };

  const start = () => {
    //console.log("start");
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        // console.log("generating...");
        setColor(randomColor());
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    //console.log("stop..");
  };

  const copy = () => {
    copyRef.current?.select();
    window.navigator.clipboard.writeText(color);
  };

  return (
    <div
      className="w-[100vw] h-[100vh] flex items-center justify-center flex-col gap-10"
      style={{ backgroundColor: color }}
    >
      <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl text-center shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-5">
          Random Color Generator 🎨
        </h1>

        <div className="flex gap-4">
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-5 rounded-md shadow-md transition-all"
            onClick={start}
          >
            Start
          </button>

          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-md shadow-md transition-all"
            onClick={stop}
          >
            Stop
          </button>
        </div>

        <div className="mt-5 relative">
          <input
            type="text"
            readOnly
            value={color}
            ref={copyRef}
            className="w-full text-center py-2 px-4 rounded-md bg-white text-black border border-gray-400 outline-none cursor-pointer"
            onClick={copy}
          />
          <span className="absolute right-3 top-2 text-sm text-gray-500">
            (Click to Copy)
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
