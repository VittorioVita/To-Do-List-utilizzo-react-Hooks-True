import React, { useState, useEffect, useMemo } from "react";
import { TodoProvider } from "./context/TodoContext.jsx";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import useTodos from "./hooks/useTodos";
import { loadTodos, saveTodos } from "./utils/storage";
import "./styles/components.css";

export default function App() {
  const stored = loadTodos();
  const { todos, dispatch, remaining } = useTodos(stored);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const [filter, setFilter] = useState("all");

  const visible = useMemo(() => {
    if (filter === "active") return todos.filter((t) => !t.done);
    if (filter === "done") return todos.filter((t) => t.done);
    return todos;
  }, [todos, filter]);

  const contextValue = useMemo(
    () => ({ todos: visible, dispatch, remaining }),
    [visible, dispatch, remaining]
  );

  return (
    <TodoProvider value={contextValue}>
      <div className="app-container">
        <h2>To Do</h2>

        <div className="filter-row">
          <label>Filtro:</label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">Tutti</option>
            <option value="active">Attivi</option>
            <option value="done">Completati</option>
          </select>
        </div>

        <TodoInput />
        <TodoList />

        <hr />


      </div>
    </TodoProvider>
  );
}
