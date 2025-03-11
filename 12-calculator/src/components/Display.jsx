import { UseCalculator } from "../context/calculatorContext.jsx";

function Display() {
   
    const {currentValue} = UseCalculator()
  return (
    <>
      <div>
        <input
          type="text"
          readOnly
          className="py-3 px-4 bg-slate-500 text-2xl text-white rounded-lg border-none"
          value={currentValue}
        />
      </div>
    </>
  );
}

export default Display;
