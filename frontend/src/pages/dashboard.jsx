import React from "react";

const Dashboard = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-4 justify-center mt-8 items-center ">
        <div className="flex gap-4">
          <img src="./geldlogo.svg" className="h-8"></img>
          <img src="./geldd.svg" className="h-8"></img>
        </div>

        <div className="flex justify-center">
          <ul className="steps">
            <li className="step step-primary">Currency</li>
            <li className="step step-primary">Balance</li>
            <li className="step step-primary">Finish</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center mt-24 ">
        <div className="flex-col items-center flex">
          <img src="Frame 10 (2).svg" className="flex justify-center"></img>
          <h1 className="font-bold text-xl flex justify-center"> Good Job!</h1>
          <p>
            Your very first account has been created. Now continue to dashboard
            and start tracking
          </p>
          <button
            className="bg-blue-600 w-full rounded-xl h-10 border-2 text-white"
            onClick={() => router.push("/")}
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
