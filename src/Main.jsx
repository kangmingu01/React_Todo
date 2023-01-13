import React, { useState } from "react";
import Header from "./components/Header";

import Input from "./components/Input";
import Todo from "./components/Todo";

export default function Main({ initialTodo }) {
  const [todoItem, setTodoItem] = useState([
    { id: "123", text: "오늘", status: "active" },
    { id: "456asdasdf", text: "오늘asdf", status: "active" },
  ]);

  const handleAdd = (todo) => {
    // 새로운 todo를 가져오면 추가될 수 있게
    setTodoItem((add) => [...add, todo]);
  };

  const handleDelete = (deleted) => {
    // 식제 기능 구현
    setTodoItem(todoItem.filter((todo) => todo.id !== deleted.id));
  };

  const handleUpdate = (update) => {
    // status가 바뀔 때
    // 항상 해당 요소를 바꿀 때 id를 가져와서 원하는 값이 맞으면 수정해야됨
    setTodoItem(
      todoItem.map((todo) => (todo.id === update.id ? update : todo))
    );
  };

  return (
    <div className="bg-slate-600 w-screen h-screen flex justify-center items-center">
      <div className="w-[512px] h-[512px] bg-white rounded-2xl px-8 flex flex-col justify-between">
        <Header />
        <div className="h-[350px] border-b- border-b-2 border-b-yellow-500 px-2 py-2">
          <ul>
            {todoItem.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onDelete={handleDelete}
                onUpdate={handleUpdate}
              />
            ))}
          </ul>
        </div>

        <Input onAdd={handleAdd} />
      </div>
    </div>
  );
}
