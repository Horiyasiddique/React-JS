import useToggle from "./hooks/useToggle";

function App() {
  const [isOn, toggleIsOn] = useToggle(false);
  return (
    <>
      <div className="max-w-screen min-h-screen flex justify-center items-center bg-amber-600">
        <div
          className={`w-72 px-3 py-4 flex flex-col items-start gap-4 rounded-2xl ${
            isOn ? "bg-[#f5f5f5] text-slate-00" : "bg-slate-700 text-white"
          }`}
        >
          <img
            src={`${
              isOn
                ? "https://images.unsplash.com/photo-1483116531522-4c4e525f504e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c3Vuc2V0JTIwc2t5fGVufDB8fDB8fHww"
                : "https://images.unsplash.com/photo-1695591377247-ec10e846c501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG5pZ2h0ZmFsbCUyMHNreXxlbnwwfHwwfHx8MA%3D%3D"
            }`}
            alt="Night / Day Image"
            className="w-full rounded-2xl"
          />
          <h1 className="text-3xl font-extrabold">
            {isOn ? "Morning" : "Night"}
          </h1>
          <p className="text-[16px] font-sans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
            blanditiis.
          </p>
          <button
            onClick={toggleIsOn}
            className={`${
              isOn ? "bg-white text-slate-800" : "bg-slate-500 text-white"
            } rounded-xl py-2 px-4 font-bold`}
          >
            Toggle
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
