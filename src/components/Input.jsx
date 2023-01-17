import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Input({ onAdd }) {
  const [text, setText] = useState("");
  // const [add, setAdd] = useState({ id: "", text: "", status: "active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // uuid는 함수임 기억
    if (text.trim().length > 0) {
      onAdd({ id: uuidv4(), text, status: "active" });
    }
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="h-9rounded-xl mb-4 m-auto ">
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
        className=" pl-2 py-1 rounded-l-xl outline-yellow-500 border-2 border-r-0 border-yellow-500"
        placeholder="Add Todo"
      />
      <button className="px-4 py-1 bg-yellow-500 rounded-r-xl border-2 border-l-0  border-yellow-500 hover:text-white ease-in duration-300">
        Add
      </button>
    </form>
  );
}
