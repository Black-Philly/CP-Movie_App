import React, { useState } from "react";

function Filter({onFilter}) {

  const [title, setTitle] = useState('')
  const [rating, setRating] = useState('')

  const handleFilter = () =>{
    onFilter({title, rating});
  }

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 mb-4">
      <input 
        type="text"
        placeholder="Filter by title"
        className="border p-2 rounded" 
        value={title}
        onChange={(e)=> setTitle(e.target.value)}
        />
      <input
       type="number"
       placeholder="Filter by rating"
       className="border p-2 rounded" 
       value={rating}
       onChange={(e) => setRating(e.target.value)}
       />

      <button onClick={handleFilter} className="bg-red-900 border m-auto p-3 text-xl rounded w-[150px] text-white">
        Filter
      </button>
    </div>
  );
}

export default Filter;
