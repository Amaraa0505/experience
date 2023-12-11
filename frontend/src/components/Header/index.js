import React from "react";
import { useRouter } from "next/router";

export default function Header () {
    const router = useRouter();
    return (
        <div className="flex justify-between bg-white">
            <div className="flex gap-4">
            <p className="font-bold">Dashboard</p>
            <button className="font-bold " onClick={()=>router.push("./account")}>Records</button>
            <button className="font-bold" onClick={()=>router.push("./profile")}>Profile</button>
            </div>
            <button className="bg-blue-400 rounded-xl">+ Record</button>
        </div>
    )
}