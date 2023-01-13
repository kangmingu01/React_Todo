import React, { useState } from "react";
import { BsFillTrashFill } from "react-icons/bs";
export default function Todo({ todo, onDelete, onUpdate }) {
  const { id, text, status } = todo;

  const handleDelete = () => {
    // 삭제 시킬 요소를 한 번에 넘김
    onDelete(todo);
  };

  const handleUpdate = (e) => {
    // status 업데이트 => 체크 될 때?
    // 체크 안될 때 무조건 active, 되었다면 Completed
    const status = e.target.checked ? "completed" : "active";
    onUpdate({ ...todo, status });
  };

  return (
    <li key={id} className="flex justify-between">
      <div>
        <input
          type="checkbox"
          id={id}
          className="mr-2"
          // status가 completed이면 체크
          checked={status === "completed"}
          onChange={handleUpdate}
        />
        <label htmlFor={id} className="text-lg cursor-pointer">
          {text}
        </label>
      </div>

      <button onClick={handleDelete}>
        <BsFillTrashFill
          size={18}
          className="hover:text-yellow-500 cursor-pointer"
        />
      </button>
    </li>
  );
}
