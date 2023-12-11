import React, { useState } from "react";
import RecordCategory from "./RecordCategory";
import { array } from "@/components/data/index.jsx";
import CategoryForm from "@/components/form/addCategoryForm";

const RecordBig = () => {
  const [open, setOpen] = useState(false);

  const closeForm = () => {
    console.log("Formee");
    setOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1>Category</h1>
        <h1 className="text-slate-400">Clear</h1>
      </div>
      {array.map((el) => (
        <RecordCategory data={el.name} key={el.id} />
      ))}
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="btn btn-active bg-white border-white text-black w-full  rounded-full"
      >
        + Add Category
      </button>
      {open && <CategoryForm open={open} closeForm={closeForm} />}
    </div>
  );
};

export default RecordBig;
