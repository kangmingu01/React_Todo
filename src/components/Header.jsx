import React from "react";
import { BsSunFill } from "react-icons/bs";

export default function Header({ todos, filters, filter, onFilterChange }) {
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
          {filters.map((value, index) => (
            <li key={index}>
              <button
                onClick={() => onFilterChange(value)}
                className={
                  filter === value
                    ? `px-2 cursor-pointer underline underline-offset-4 decoration-yellow-400 decoration-4`
                    : `px-2 cursor-pointer `
                }
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
