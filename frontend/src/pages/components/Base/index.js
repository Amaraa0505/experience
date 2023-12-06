import React from "react";


export default function Base () {
    const Datas = [
        {title: "Lending & Renting", price: "- 1,000"},
        {title: "Lending & Renting", price: "- 1,000"},
        {title: "Lending & Renting", price: "- 1,000"},
        {title: "Lending & Renting", price: "- 1,000"}
    ]
    return (
        <div className="bg-white w-full h-[300px] rounded-xl ">
            
            <p className="font-bold text-2xl ml-4 mt-2">Last Records</p>
           
            <div className="">{Datas.map((Data, index)=>(
                <div className="flex justify-between items-center p-3 ">
                    <div className="flex items-center gap-4">
                    <img src="./Group 8.svg" className=""></img>
                    <p className="">{Data.title}</p>
                    </div>
                <p>{Data.price}</p>
                </div>
            ))}</div>
        </div>
    )
}