// /**
//  * PROJECT : PASSWORD GENERATOR
//  * Functionalities : generate random password ,
//  *  numbers or characters add or remove ,
//  * copy to clipboard
//  */

import { useState, useCallback, useEffect, useRef } from "react";

const App = () => {
  // collecting variables......
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  // generate random passwords (useCallback for memorization and optimization)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLMNBVCXZzxcvbnmlkjhgfdsapoiuytrewq";
    if (numbersAllowed) str += "1234567890";
    if (charactersAllowed) str += "!@#$%^&*-_;:/?";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charactersAllowed, setPassword]);

  //copy to clipboard functionality
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect hook to call passwordGenerator function again and again based on dependencies
  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charactersAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 rounded-xl shadow-lg p-6 space-y-6 border border-gray-700">
        <h1 className="text-2xl font-bold text-emerald-200 text-center">
          Password Generator
        </h1>

        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-gray-100 placeholder-gray-400"
          />
          <button
            onClick={copyToClipboard}
            className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-gray-100 font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors"
          >
            Copy
          </button>
        </div>

        <div className="space-y-5">
          <div className="flex items-center space-x-3">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              id="range"
              onChange={(e) => setLength(e.target.value)}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <label
              htmlFor="range"
              className="text-sm font-medium text-gray-300 min-w-[80px]"
            >
              Length: <span className="text-emerald-400">{length}</span>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="numbers"
                onChange={() => setNumbersAllowed((prev) => !prev)}
                checked={numbersAllowed}
                className="h-5 w-5 bg-gray-700 border-gray-600 rounded focus:ring-emerald-500 text-emerald-600"
              />
              <label htmlFor="numbers" className="ml-3 text-sm text-gray-300">
                Numbers
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="chars"
                onChange={() => setCharactersAllowed((prev) => !prev)}
                checked={charactersAllowed}
                className="h-5 w-5 bg-gray-700 border-gray-600 rounded focus:ring-emerald-500 text-emerald-600"
              />
              <label htmlFor="chars" className="ml-3 text-sm text-gray-300">
                Special Characters
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
