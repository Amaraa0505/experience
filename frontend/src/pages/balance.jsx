import React from "react";
import { useRouter } from "next/router";

export default function Balance() {
  const router = useRouter();
  return (
    <div className=" ">
      <div className=" flex flex-col gap-4 justify-center mt-8 items-center ">
        <div className="flex gap-4 ">
          <img src="./geldlogo.svg"></img>
          <img src="./geldd.svg"></img>
        </div>
        <div className="">
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center mt-24">
        <div className="flex-col items-center flex">
          <img src="Frame 10 (1).svg"></img>
          <h1 className="font-bold text-xl">Set up your cash Balance</h1>
          <input
            className="border-2 rounded-xl h-10 bg-slate-200 w-full mb-4 mt-6 p-2"
            placeholder="Email"
          ></input>
          <p className="w-80 mb-6">how much cash do you have in your wallet?</p>
          <button
            className="bg-blue-600 text-white rounded-xl w-full h-10"
            onClick={() => {
              router.push("/dashboard");
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
