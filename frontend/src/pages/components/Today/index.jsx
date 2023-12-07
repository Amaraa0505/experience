import React from "react";

export default function Today() {
  const Datas = [
    { name: "Food & Drinks", price: "-1,000" },
    { name: "Food & Drinks", price: "-1,000" },
    { name: "Food & Drinks", price: "-1,000" },
  ];
  return (
    <div>
      <div className="bg-white rouned-xl flex rounded-xl h-14 items-center mt-4 gap-[1250px]">
        <div className="flex gap-4">
          <input type="checkbox" className="checkbox ml-6" disabled checked />
          <img src="./Group 8-2.svg" className="w-10 h-10"></img>
          <p>Food & Drinks</p>
        </div>
        <p>-1,000</p>
      </div>

      <div className="bg-white rouned-xl flex rounded-xl h-14 items-center mt-4 gap-[1250px]">
        <div className="flex gap-4">
          <input type="checkbox" className="checkbox ml-6" disabled checked />
          <img src="./Group 8-2.svg" className="w-10 h-10"></img>
          <p>Food & Drinks</p>
        </div>
        <p>-1,000</p>
      </div>

      <div className="">
        {Datas.map((Data, index) => (
          <div className="flex gap-[1250px] bg-white rounded-xl mt-4 h-14 items-center">
            <div className="flex gap-4">
              <input
                type="checkbox"
                className="checkbox ml-6"
                disabled
                checked
              />
              <img src="./Group 8-2.svg" className="w-10 h-10"></img>
              <p>{Data.name}</p>
            </div>
            <p>{Data.price}</p>
          </div>
        ))}
      </div>
      <div className=""></div>
    </div>
  );
}
