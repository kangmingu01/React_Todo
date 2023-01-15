import React, { useState } from "react";
import Header from "./components/Header";

import Input from "./components/Input";
import Todo from "./components/Todo";

export default function Main() {
  const [todoItem, setTodoItem] = useState([
    { id: "123", text: "오늘", status: "active" },
    { id: "asdf", text: "내일", status: "active" },
  ]);

  const filters = ["all", "active", "completed"];
  const [filter, setFilter] = useState(filters[0]);

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

  const filtered = getFilteredItems(todoItem, filter);

  return (
    <>
      <Header // 필터들
        todos={todoItem}
        filters={filters}
        // 선택된 필터
        filter={filter}
        // 필터를 전달 받으면 바로 설정될 수 있게
        onFilterChange={setFilter}
      />
      <section className="h-full flex flex-col min-h-0 px-2 py-2">
        <ul className="flex-auto overflow-y-auto">
          {/* 필터링 된 item을 전달 */}
          {filtered.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onDelete={handleDelete}
              onUpdate={handleUpdate}
            />
          ))}
        </ul>
        <Input onAdd={handleAdd} />
      </section>
    </>
  );
}

function getFilteredItems(todoItem, filter) {
  if (filter === "all") {
    return todoItem;
  }
  return todoItem.filter((todo) => todo.status === filter);
}
