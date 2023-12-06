import React from "react";
import Modal from "../Modal";

export default function Records () {
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
        { name: "Others" }
    ];
    return (
      
             <div className="bg-white w-[300px] h-[700px] rounded-xl  p-4">
                <p className="text-2xl font-bold ml-5 mb-[2px]">Records</p>
                <div className="flex flex-col items-center gap-3">
                <button className="bg-blue-600 rounded-xl w-64 h-8 text-white" onClick={() => document.getElementById("my_modal").showModal()}>+ Add</button>
                <div>
                    <Modal/>
                </div>
                <input placeholder="Search" className="rounded-xl bg-slate-300  w-64 h-8 p-2"></input>
                </div>
                <p className="font-bold my-2">Types</p>
                <div className="ml-3 ">
                    <div className="flex gap-2">
                    <img src="./Radio.svg"></img>
                    <p>All</p>
                    </div>
                    <div className="flex gap-2">
                    <img src="./Radio.svg"></img>
                    <p>Income</p>
                    </div>
                    <div className="flex gap-2">
                    <img src="./Radio.svg"></img>
                    <p>Expense</p>
                    </div>
                </div>
                <div className="flex justify-between my-2">
                    <p className="font-bold">Category</p>
                    <button className="text-green-200 ">Clear</button>
                </div>
                <div>
                    {Infos.map((Info, index)=>(
                        <div className="flex gap-2 mt-2">
                            <img src="./Leading icon-3.svg"></img>
                            <p>{Info.name}</p>
                            <img src="./Leading icon-4.svg"></img>
                        </div>
                    ))}
                    <p> +   Add category</p>
                        <p className="font-bold">Amount Range</p>
                        <div className="flex gap-4">
                        <input className="rounded-xl bg-gray-200 w-24 h-10 p-2" placeholder="0"/>
                        <input className="rounded-xl bg-gray-200 w-24 h-10 p-2" placeholder="1000"/>
                    </div>
                </div>
            </div>
       
    )
}