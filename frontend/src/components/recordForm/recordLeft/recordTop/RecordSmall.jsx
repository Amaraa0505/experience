import React, { useState } from "react";
import { array2 } from "@/components/data/index.jsx";
import Checkbox from "./Checkbox";
import RecordForm from "@/components/form/addRecordForm";

const RecordSmall = () => {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
  };

  return (
    <div>
      <h1 className="mb-8 font-semibold text-3xl">Records</h1>
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn bg-[#0166FF] w-full font-normal mb-4 text-white rounded-full h-10"
      >
        + Add
      </button>
      {open && <RecordForm open={open} closeForm={closeForm} />}
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered bg-[#F3F4F6] border-neutral-200 w-full h-10 rounded-xl p-4"
      />
      <div className="my-5">
        <h1 className="font-semibold text-slate-700">Types</h1>
        {array2.map((el) => (
          <Checkbox name={el.name} key={el.id} />
        ))}
      </div>
    </div>
  );
};

export default RecordSmall;
