import React, { createContext, useState, useEffect } from "react";

// TODO: Create a context for the Todo app (use createContext)

const fetchTodos = async () => {
  // TODO: Implement a function to fetch todos from the API (Hint: Use the JSONPlaceholder API)
  // The API endpoint is "https://jsonplaceholder.typicode.com/todos?_limit=10"
};

export const TodoProvider = ({ children }) => {
  // TODO: Initialize state for todos and loading

  // TODO: Implement useEffect to fetch todos when the component mounts

  // TODO: Implement addTodo function to add a new todo to the list

  // TODO: Implement deleteTodo function to remove a todo by its ID

  // TODO: Implement toggleComplete function to toggle the completion status of a todo

  return (
    <TodoContext.Provider
      value={{ todos, loading, addTodo, deleteTodo, toggleComplete }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// TODO: Implement a custom hook (useTodos) to consume the TodoContext and return the values
// Make sure to check if the hook is used outside of the provider

export const useTodos = () => {
  // TODO: Implement the useTodos hook logic
};