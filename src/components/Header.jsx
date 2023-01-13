import React from "react";
import { BsSunFill } from "react-icons/bs";
export default function Header() {
  const date = new Date();
  return (
    <div>
      <h1 className="text-lg pt-6">{date.toLocaleDateString("ko-kr")}</h1>
      <div className="flex justify-between mt-2 pb-2 border-b-2 border-b-yellow-400">
        <BsSunFill
          size={25}
          className="cursor-pointer hover:text-yellow-400 ease-in duration-300"
        />
        <ul className="flex">
          <li className="px-2 cursor-pointer hover:underline underline-offset-4 decoration-yellow-400 decoration-4">
            All
          </li>
          <li className="px-2 cursor-pointer hover:underline underline-offset-4 decoration-yellow-400 decoration-4">
            Active
          </li>
          <li className="px-2 cursor-pointer hover:underline underline-offset-4 decoration-yellow-400 decoration-4">
            Completed
          </li>
        </ul>
      </div>
    </div>
  );
}
