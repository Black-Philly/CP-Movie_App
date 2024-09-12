import React from "react";

function Filter() {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
      <input 
        type="text"
        placeholder="Filter by title"
        className="border p-2 rounded" 
        />
      <input
       type="number"
       placeholder="Filter by rating"
       className="border p-2 rounded" 
       />

      <button className="bg-red-900 border m-auto p-3 text-xl rounded w-[150px] text-white">
        Filter
      </button>
    </div>
  );
}

export default Filter;
