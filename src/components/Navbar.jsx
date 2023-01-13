import React from "react";
import { BsSun } from "react-icons/bs";

export default function Navbar() {
  const tab = ["All", "Active", "Completed"];
  return (
    <div className="px-2 items-center flex justify-between h-9 bg-green-500 rounded-t-xl">
      <div size={20}>
        <BsSun className="cursor-pointer" />
      </div>

      <ul className="flex">
        {tab.map((menu, i) => {
          return (
            <li key={i} className="px-2 text-gray-700 ">
              <button className="hover:text-white">{menu}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
