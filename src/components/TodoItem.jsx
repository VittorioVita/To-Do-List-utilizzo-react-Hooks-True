// src/components/TodoItem.jsx
import React, { useCallback } from "react";

export default function TodoItem({ todo, onToggle, onRemove }) {
  const handleToggle = useCallback(() => onToggle(todo.id), [onToggle, todo.id]);
  const handleRemove = useCallback(() => onRemove(todo.id), [onRemove, todo.id]);

  return (
    <li className="todo-item" role="listitem">
      <div className="todo-row">
        <input
          type="checkbox"
          checked={!!todo.done}
          onChange={handleToggle}
          aria-label={todo.done ? `Segna ${todo.text} come non completata` : `Segna ${todo.text} come completata`}
        />

        <span className={`todo-text ${todo.done ? "done" : ""}`}>{todo.text}</span>
      </div>

      <div className="todo-actions">
        <button className="btn-delete" onClick={handleRemove} aria-label={`Elimina ${todo.text}`}>
          Elimina
        </button>
      </div>
    </li>
  );
}
