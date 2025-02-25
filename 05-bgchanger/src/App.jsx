import { useState } from "react";

/**
 * PROJECT : 
 * A background color changer use useState hook to change in state
 */
function App() {
  const [color, setColor] = useState("chocolate");

  return (
    <>
      <div id="screen" style={{ backgroundColor: color }}>
        <h1>Background Color Changer</h1>
        <div id="btn-cont">
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")}
          >
            brown
          </button>
          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")}
          >
            Purple
          </button>
          <button
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")}
          >
            Orange
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            style={{ backgroundColor: "grey" }}
            onClick={() => setColor("grey")}
          >
            Grey
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "coral" }}
            onClick={() => setColor("coral")}
          >
            coral
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")}
          >
            yellow
          </button>
          <button
            style={{ backgroundColor: "orangered" }}
            onClick={() => setColor("orangered")}
          >
            Orangered
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
