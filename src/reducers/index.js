const toDoListReducer = (state = { todos: [] }, action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
      return {
        ...state,
        todos: [
          ...state.todos,
          action.item
        ]
      };
    case 'TOGGLE_ITEM': 
      return {
        ...state,
        todos: state.todos.map(todo => todo.id === action.item ? { ...todo, done: !todo.done } : { ...todo })
      }
    case 'REMOVE_ITEM': 
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.item) 
      }
    default:
      return state;
  }
};
export default toDoListReducer;
