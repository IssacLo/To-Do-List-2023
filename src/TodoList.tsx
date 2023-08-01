// src/components/TodoList.tsx
import React, { useState } from "react";
import "./TodoList.css";

const TodoList = () => {
  //   const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
  const [todos, setTodos] = useState<string[]>([
    "Buy groceries",
    "Clean the house",
    "Walk the dog",
  ]);

  const [selectedTodoIndex, setSelectedTodoIndex] = useState<number | null>(null);
  const [inPutText, setInPutText] = useState<string>("");

  const handleTodoClick = (index: number) => {
    setSelectedTodoIndex(index);
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inPutText}
        onChange={(e) => {
          setInPutText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (inPutText.trim() !== "") {
            setTodos([...todos, inPutText]);
            setInPutText("");
          }
        }}
      >
        ADD
      </button>

      {todos.length > 0 ? (
        <ul className="list-group">
          {todos.map((todo, index) => (
            <div style={{ display: "flex" }}>
              <li
                className={`list-group-item ${selectedTodoIndex === index ? "active" : ""}`}
                key={index}
                onClick={() => handleTodoClick(index)}
              >
                {todo}
              </li>
              <button
                onClick={(index: string) => {
                  const updatedTodos = [...todos];
                  updatedTodos.splice(index, 1);
                  setTodos(updatedTodos);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <p>No to-dos found.</p>
      )}
    </div>
  );
};

export default TodoList;
