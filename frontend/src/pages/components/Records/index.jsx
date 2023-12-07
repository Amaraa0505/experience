import React from "react";
import Modal from "../Modal";

export default function Records() {
  const Infos = [
    { name: "Food & Drinks" },
    { name: "Shopping" },
    { name: "Housing" },
    { name: "Transportation" },
    { name: "Vehicle" },
    { name: "Life & Entertainment" },
    { name: "Communication, PC" },
    { name: "Financial expenses" },
    { name: "Investments" },
    { name: "Income" },
    { name: "Others" },
  ];
  return (
    <div className="bg-white w-[400px] h-[1100px] rounded-xl  p-10">
      <p className="text-2xl font-bold ml-5 my-4">Records</p>
      <div className="flex flex-col gap-1">
        <button
          className="bg-blue-600 rounded-xl w-72 h-8 text-white"
          onClick={() => document.getElementById("my_modal").showModal()}
        >
          + Add
        </button>
        <div>
          <Modal />
        </div>
        <input
          placeholder="Search"
          className="rounded-xl bg-slate-300  w-72 h-8 "
        ></input>
      </div>
      <p className="font-bold my-4">Types</p>
      <div className="ml-3 ">
        <div className="flex gap-2 mb-3">
          <img src="./Radio.svg"></img>
          <p>All</p>
        </div>
        <div className="flex gap-2 mb-3">
          <img src="./Radio.svg"></img>
          <p>Income</p>
        </div>
        <div className="flex gap-2 mb-3">
          <img src="./Radio.svg"></img>
          <p>Expense</p>
        </div>
      </div>
      <div className="flex justify-between my-2">
        <p className="font-bold">Category</p>
        <button className="text-green-200 ">Clear</button>
      </div>
      <div>
        {Infos.map((Info, index) => (
          <div className="flex gap-2 mt-4">
            <img src="./Leading icon-3.svg"></img>
            <p>{Info.name}</p>
            <img src="./Leading icon-4.svg"></img>
          </div>
        ))}
        <p className="mt-4 mb-4"> + Add category</p>
        <p className="font-bold mb-4">Amount Range</p>
        <div className="flex gap-4">
          <input
            className="rounded-xl bg-gray-200 w-24 h-10 p-2"
            placeholder="0"
          />
          <input
            className="rounded-xl bg-gray-200 w-24 h-10 p-2"
            placeholder="1000"
          />
        </div>
      </div>
    </div>
  );
}
