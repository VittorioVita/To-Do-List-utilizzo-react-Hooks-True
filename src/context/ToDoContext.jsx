import React from "react";

const TodoContext = React.createContext({
  todos: [],
  dispatch: () => {},
  remaining: 0,
});

export function TodoProvider({ children, value }) {
  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export default TodoContext;
