import React, { useRef, useEffect, useContext } from "react";
import TodoContext from "../context/TodoContext";


export default function TodoInput() {
  const { dispatch } = useContext(TodoContext);
  const inputRef = useRef();
  const fancyRef = useRef();

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const add = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;
    dispatch({ type: "add", payload: { text } });
    inputRef.current.value = "";
    fancyRef.current && fancyRef.current.clear();
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && e.ctrlKey) add();
  };

  return (
    <div className="input-row">
      <input
        ref={inputRef}
        placeholder="Aggiungi una attività "
        onKeyDown={handleKey}
        className="main-input"
      />
      
      <button onClick={add}>Aggiungi</button>
    </div>
  );
}
