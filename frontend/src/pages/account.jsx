import React from "react";
import Today from "./components/Today"
import Yesterday from "./components/Yesterday";
import Records from "./components/Records";

export default function account () {
    return (
        <div className="flex  p-10">
        <Records/>    
            <div className="bg-purple-200 w-[800px] ml-10 rounded-xl p-6">
                <div className="flex ">
                    <div className="flex w-64">
                    <img src="./Icon button.svg"></img> last 30 days
                    <img src="./Icon button-2.svg"></img>
                    </div>

                    <select className="select select-bordered w-56 max-w-xs rounded-sl ml-96 bg-slate-200">
                    <option disabled selected>
                         Newest first
                     </option>
                      <option>Han Solo</option>
                      <option>Greedo</option>
                    </select>

                </div>

                <div className="bg-white rouned-xl flex rounded-xl h-10 items-center mt-3 justify-between">
                    <div className="flex gap-4">
                    <input
                  type="checkbox"
                  className="checkbox ml-6"
                  disabled
                  checked/>
                    <p>Select All</p>
                    </div>
                    <p>-35,500</p>
                </div>
                <p>Today</p>
                <Today/>
                <p className="font-bold"> Yesterday</p>
               <Yesterday/>
            </div>
        </div>
    )
}