
export default function todosReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        { id: Date.now(), text: action.payload.text, done: false },
      ];
    case "toggle":
      return state.map(t => (t.id === action.payload.id ? { ...t, done: !t.done } : t));
    case "remove":
      return state.filter(t => t.id !== action.payload.id);
    case "clear":
      return [];
    default:
      return state;
  }
}
