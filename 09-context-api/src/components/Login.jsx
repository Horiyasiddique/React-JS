import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <>
      <div className="w-[40vw] h-[50vh] rounded-lg bg-blue-300 flex flex-col items-center justify-between py-14">
        <h2 className="text-3xl text-slate-800 font-bold">LOGIN</h2>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="rounded-lg bg-[#f4f4f4] w-[60%] py-2 px-4 border-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-lg bg-[#f4f4f4] w-[60%] py-2 px-4 border-none"
        />
        <button
          onClick={handleSubmit}
          className="rounded-lg py-2 px-4 bg-white cursor-pointer"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
