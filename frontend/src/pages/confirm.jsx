import React from "react";
import { useRouter } from "next/router";

export default function Confirm() {
  const router = useRouter();
  return (
    <div className="h-screen">
      <div className="flex flex-col gap-4 justify-center mt-8 items-center">
        <div className="flex gap-4">
          <img src="./geldlogo.svg"></img>
          <img src="./geldd.svg"></img>
        </div>
        <div className="">
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step ">Balance</li>
            <li className="step">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center mt-24">
        <div className="flex-col items-center flex">
          <img src="./Frame 10.svg"></img>
          <h1 className="font-bold text-xl">Select base currency</h1>
          <input className="border-2 rounded-xl h-10 bg-slate-200 w-full mb-4 mt-6"></input>
          <p className="w-80 mb-6">
            Your base currency should be the one you use most often. All
            transaction in other currencies will be calculated based on this one
          </p>
          <button
            className="bg-blue-600 w-full rounded-xl h-10 border-2 text-white"
            onClick={() => router.push("/balance")}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
