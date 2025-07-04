import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const calculateBMI = () => {
    if (weight === 0 || height === 0 || !weight || !height) {
      alert("Please enter valid input");
    } else {
      const heightInMeters = height / 100;
      const result = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(result);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-5">
      <div className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h1 className="text-3xl font-bold text-center mb-5 text-amber-400">
          BMI Calculator
        </h1>

        <div className="space-y-4">
          <input
            type="number"
            placeholder="Height in centimeters (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white border border-amber-400 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          />
          <input
            type="number"
            placeholder="Weight in kilograms (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full p-3 bg-gray-700 text-white border border-amber-400 rounded-md outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            onClick={calculateBMI}
            className="w-full bg-amber-500 text-white font-bold py-2 rounded-md hover:bg-amber-600 transition"
          >
            Calculate BMI
          </button>
        </div>

        {bmi && (
          <p className="mt-5 text-center text-lg font-bold">
            Your BMI is{" "}
            <span
              className={`${
                bmi < 18.66
                  ? "text-blue-400"
                  : bmi < 24.9
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {bmi}
            </span>
          </p>
        )}

        <table className="w-full mt-6 border border-amber-500 rounded-md">
          <thead>
            <tr className="bg-amber-500 text-white">
              <th className="p-2">BMI</th>
              <th className="p-2">Classification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border border-amber-500">Less than 18.66</td>
              <td className="p-2 border border-amber-500">Under Weight</td>
            </tr>
            <tr>
              <td className="p-2 border border-amber-500">
                Greater than 18.66 and Less than 24.9
              </td>
              <td className="p-2 border border-amber-500">Healthy BMI 🎉</td>
            </tr>
            <tr>
              <td className="p-2 border border-amber-500">Greater than 24.9</td>
              <td className="p-2 border border-amber-500">Over Weight</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
