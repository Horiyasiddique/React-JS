import { createSlice, nanoid } from "@reduxjs/toolkit";


//initial state what will be id and text value of todo initially 
const initialState = {
  todos: [{ id: 1, text: "Hello World" }],
};


//create slice method requires object and name, initialState, reducers within object
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  //reducers contains property and methods (functionality)
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid,
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer