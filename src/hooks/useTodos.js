// src/hooks/useTodos.js
import { useReducer, useDebugValue } from "react";
import todosReducer from "../reducers/todosReducer";

export default function useTodos(initial = []) {

  const [todos, dispatch] = useReducer(todosReducer, initial);
  const remaining = todos.filter(t => !t.done).length;
  useDebugValue(`remaining: ${remaining}`);
  return { todos, dispatch, remaining };
}
