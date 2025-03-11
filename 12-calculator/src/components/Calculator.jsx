import React from "react";
import Display from "./Display";
import Button from "./button";

function Calculator() {
  return (
    <>
      <div className="py-10 px-8 inline-flex bg-[#000] flex-col justify-center items-center rounded-lg">
        <Display />
        {/* Buttons Container */}
        <div className="w-80 flex flex-wrap items-center justify-center gap-3 py-5 px-3 mt-5 rounded-lg">
          <Button buttonText={"AC"} />
          <Button buttonText={"00"} />
          <Button buttonText={"+"} />
          <Button buttonText={"-"} />
          <Button buttonText={"*"} />
          <Button buttonText={"/"} />
          <Button buttonText={"7"} />
          <Button buttonText={"8"} />
          <Button buttonText={"9"} />
          <Button buttonText={"4"} />
          <Button buttonText={"5"} />
          <Button buttonText={"6"} />
          <Button buttonText={"3"} />
          <Button buttonText={"2"} />
          <Button buttonText={"1"} />
          <Button buttonText={"0"} />
          <Button buttonText={"="} />
        </div>
      </div>
    </>
  );
}

export default Calculator;
