import { useState } from "react";
import "./App.css";

function App() {
  const [font, setFont] = useState("verdana");
  return (
    <>
      <div id="screen">
        <h1 style={{ fontFamily: font }}>Font Changer</h1>
        <div id="button-container">
          <button onClick={() => setFont("Times New Roman")}>
            Times new roman
          </button>
          <button onClick={() => setFont("cursive")}>cursive</button>
          <button onClick={() => setFont("Monospace")}>Monospace</button>
          <button onClick={() => setFont("Arial")}>Arial</button>
          <button onClick={() => setFont("Gill sans")}>Gill sans</button>
          <button onClick={() => setFont("Courier")}>Courier</button>
          <button onClick={() => setFont("Cambria")}>Cambria</button>
          <button onClick={() => setFont("Georgia")}>Georgia</button>
          <button onClick={() => setFont("fantasy")}>Fantasy</button>
        </div>
      </div>
    </>
  );
}

export default App;
