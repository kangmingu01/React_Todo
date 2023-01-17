import React from "react";
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
    <li key={id} className="flex justify-between items-center">
      <input
        type="checkbox"
        id={id}
        className="w-5 h-5 mr-2"
        // status가 completed이면 체크
        checked={status === "completed"}
        onChange={handleUpdate}
      />
      <label
        htmlFor={id}
        className="flex-1 ml-2 text-lg cursor-pointer dark:text-white"
      >
        {text}
      </label>
      <button onClick={handleDelete}>
        <BsFillTrashFill
          size={18}
          className="hover:text-yellow-500 cursor-pointer"
        />
      </button>
    </li>
  );
}
