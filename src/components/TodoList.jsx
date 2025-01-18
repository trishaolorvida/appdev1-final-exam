import React, { useState } from "react";
// TODO: Import TodoForm component

import { useTodos } from "../context/TodoContext";

const TodoList = () => {
  const { todos, loading, toggleComplete, deleteTodo, addTodo } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {/* 
        TODO: Render TodoForm with the required props (addTodo, newTodo, setNewTodo)
      */}

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* 
              TODO: Apply conditional styling for completed todos (e.g., strikethrough)
            */}

            {/* TODO: Make the todo title clickable to toggle its completion status */}
            <span>{todo.title}</span>

            {/* TODO: Implement a delete button to remove a todo */}
            <button>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;