import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const fromStorage = JSON.parse(localStorage.getItem("todos"));
const initialState = {
  todos: fromStorage ? fromStorage : [],
};

export const toDoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      const newtodo = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      };
      state.todos = [...state.todos, newtodo];
    },
    removeToDo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateToDo: (state, action) => {
      const updated = state.todos.map((todo) => {
        todo.id === action.payload.id
          ? (todo.text = action.payload.text)
          : todo;
        return todo;
      });
      [...state.todos, updated];
    },
    toggleIsComplete: (state, action) => {
      const updated = state.todos.map((todo) => {
        todo.id === action.payload.id
          ? (todo.isCompleted = action.payload.isCompleted)
          : todo;
        return todo;
      });
      [...state.todos, updated];
    },
    markUnmarkAll: (state, action) => {
      const updated = state.todos.map((todo) => {
        if (action.payload === "markAll") todo.isCompleted = true;
        else todo.isCompleted = false;
        return todo;
      });
      [...state.todos, updated];
    },
  },
});

export const {
  addToDo,
  removeToDo,
  updateToDo,
  toggleIsComplete,
  markUnmarkAll,
} = toDoSlice.actions;

export default toDoSlice.reducer;
