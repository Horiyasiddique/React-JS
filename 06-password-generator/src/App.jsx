/**
 * PROJECT :
 * PASSWORD GENERATOR
 * Functionalities : generate random password ,
 *  numbers or characters add or remove ,
 * copy to clipboard
 */

import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  //variables collecting...
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null);

  //paswordGenerator function
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charsAllowed) str += "@$#-_=&*;:~%^!";
    //generate random password
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      //appending random values to pass variable
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charsAllowed, setPassword]);

  //copyToclipboard functionality
  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //call passwordGenerator on the base of given dependencies
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charsAllowed, passwordGenerator]);

  return (
    <>
      <div id="screen">
        <h1>Keep Your Data Save</h1>
        <div id="password-gen">
          <h2>Generate Password</h2>
          <div id="password-show">
            
            <input
              type="text"
              placeholder="Password"
              value={password}
              readOnly
              ref={passwordRef}
            />
           
            <button onClick={copyToClipboard}>copy</button>
          </div>
          <div id="selectors">
            
            <label>Length: {length}</label>
            <input
              type="range"
              value={length}
              min={6}
              max={20}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            
            <label>Number</label>
            <input
              type="checkbox"
              id="numberinput"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
           
            <label>Characters</label>
            <input
              type="checkbox"
              id="charsinput"
              defaultChecked={charsAllowed}
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
