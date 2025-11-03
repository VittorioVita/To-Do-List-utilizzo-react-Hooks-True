import React, { useContext, useRef, useLayoutEffect, useState, useCallback, useMemo } from "react";
import TodoContext from "../context/ToDoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, dispatch, remaining } = useContext(TodoContext);
  const listRef = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (listRef.current) {
      setHeight(listRef.current.getBoundingClientRect().height);
    }
  }, [todos]);

  const toggle = useCallback((id) => dispatch({ type: "toggle", payload: { id } }), [dispatch]);
  const remove = useCallback((id) => dispatch({ type: "remove", payload: { id } }), [dispatch]);

  const summary = useMemo(() => `Totali: ${todos.length} — Da fare: ${remaining}`, [todos.length, remaining]);

  return (
    <div>
      <div className="summary">{summary}</div>
      <ul ref={listRef} className="todo-list">
        {todos.map((t) => (
          <TodoItem key={t.id} todo={t} onToggle={toggle} onRemove={remove} />
        ))}
      </ul>
      <div className="meta">Altezza lista: {Math.round(height)}px</div>
      <div className="actions">
        <button onClick={() => dispatch({ type: "clear" })}>Svuota tutto</button>
      </div>
    </div>
  );
}
