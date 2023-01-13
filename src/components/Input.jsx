import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Input({ onAdd }) {
  const [text, setText] = useState("");
  // const [add, setAdd] = useState({ id: "", text: "", status: "active" });

  const handleSubmit = (e) => {
    e.preventDefault();
    // uuid는 함수임 기억
    onAdd({ id: uuidv4(), text, status: "active" });
    setText("");
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="h-9 border-2 rounded-xl mb-4 m-auto "
    >
      <input
        type="text"
        name="text"
        id="text"
        value={text}
        onChange={handleChange}
        className="pl-2 py-1 rounded-l-xl outline-yellow-500"
        placeholder="Add Todo"
      />
      <button className="px-4 py-1 bg-yellow-500 rounded-r-xl hover:text-white ease-in duration-300">
        Add
      </button>
    </form>
  );
}
