import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";
import { useDarkMode } from "../context/DarkModeContext";

export default function Header({ todos, filters, filter, onFilterChange }) {
  const date = new Date();
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div>
      <h1 className="text-lg pt-6 text-black dark:text-white">
        {date.toLocaleDateString("ko-kr")}
      </h1>
      <div className="flex justify-between mt-2 pb-2 border-b-2 border-b-yellow-400 ">
        <button
          size={25}
          className="cursor-pointer  hover:text-yellow-400 ease-in duration-300 hover:scale-125 "
          onClick={toggleDarkMode}
        >
          {darkMode ? <BsSunFill /> : <BsMoonFill />}
        </button>

        <ul className="flex">
          {filters.map((value, index) => (
            <li key={index}>
              <button
                onClick={() => onFilterChange(value)}
                className={`px-2 cursor-pointer dark:text-white ${
                  filter === value &&
                  "underline underline-offset-4 decoration-yellow-400 decoration-4"
                }`}
              >
                {value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
