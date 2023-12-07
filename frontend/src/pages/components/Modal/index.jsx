import React, { useState } from "react";
import Category from "../Category";

export default function () {
  const [isIncomeClick, setIncomeClick] = useState(true);
  const handleButton = () => {
    setIncomeClick(true);
  };

  const handleButton2 = () => {
    setIncomeClick(false);
  };

  return (
    <dialog id="my_modal" className="rounded-xl p-6">
      <div className="modal-box flex gap-4">
        <div className=" flex flex-col gap-3">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <h1 className="text-2xl font-bold">Add Record</h1>
          <div className=" rounded-xl flex gap-4 ">
            <button
              className={
                isIncomeClick
                  ? "bg-blue-600 rounded-xl  w-16 h-8"
                  : "bg-white rounded-xl  w-16 h-8"
              }
              onClick={handleButton}
            >
              Expense
            </button>
            <button
              className={
                isIncomeClick
                  ? "bg-white rounded-xl  w-16 h-8"
                  : "bg-green-600 rounded-xl w-16 h-8"
              }
              onClick={handleButton2}
            >
              Income
            </button>
          </div>
          <input
            placeholder="000.00"
            className="bg-gray-200 rounded-lg h-10 p-4"
          ></input>
          <h1 className="">Category</h1>
          <select className="select select-bordered w-full">
            <option className="">
              <button
                onClick={() => {
                  document.getElementById("my_modal_3").showModal();
                }}
              >
                Add category
              </button>
            </option>
            <div>
              <Category />
            </div>

            <option>Home</option>
            <option>Gift</option>
            <option>Food</option>
            <option>Drink</option>
            <option>Taxi</option>
            <option>Shopping</option>
          </select>
          <div className="flex gap-12">
            <div>
              <h1>Date</h1>
              <select className="select select-bordered w-32 max-w-xs">
                <option>1</option>
              </select>
            </div>
            <div>
              <h1>Date</h1>
              <select className="select select-bordered w-32 max-w-xs">
                <option>2</option>
              </select>
            </div>
          </div>
          <button
            className={` rounded-xl text-white w-72 ${
              isIncomeClick ? "bg-blue-600 " : "bg-green-600"
            }`}
          >
            Add Record
          </button>
        </div>
        <div className="flex">
          <div className="flex flex-col gap-2 w-36">
            <h1 className="mt-3">Payee</h1>
            <input
              placeholder="Write here"
              className="bg-gray-200 h-8 w-32 rounded-xl p-2"
            ></input>
            <h1>Note</h1>
            <input
              placeholder="Write here"
              className="bg-gray-200 h-44 rounded-xl w-32 p-2"
            ></input>
          </div>
        </div>
      </div>
    </dialog>
  );
}
