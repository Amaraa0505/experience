import React from "react";

export default function Yesterday () {
    const Datas = [
        {name: "Food & Drinks", price: "-1,000"},
        {name: "Food & Drinks", price: "-1,000"},
        {name: "Food & Drinks", price: "-1,000"},
    ]
    return (
        <div>
             <div className="">{Datas.map((Data, index)=>(
                    <div className="flex justify-between bg-white rounded-xl mt-2 h-10 items-center">
                         <div className="flex gap-4">
                        <input
                  type="checkbox"
                  className="checkbox ml-6"
                  disabled
                  checked
                />
                        <img src="./Group 8-2.svg" className="w-6 h-6"></img>
                        <p>{Data.name}</p>
                        </div>
                        <p>{Data.price}</p>
                    </div>
                ))}</div>
                <div className="">{Datas.map((Data, index)=>(
                    <div className="flex justify-between bg-white rounded-xl mt-2 h-10 items-center">
                         <div className="flex gap-4">
                        <input
                  type="checkbox"
                  className="checkbox ml-6"
                  disabled
                  checked
                />
                        <img src="./Group 8-2.svg" className="w-6 h-6"></img>
                        <p>{Data.name}</p>
                        </div>
                        <p>{Data.price}</p>
                    </div>
                ))}</div>
        </div>
    )
}