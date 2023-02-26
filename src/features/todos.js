import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [
  { _id: 0, name: "first todod", completed: false },
  { _id: 1, name: "second todod", completed: false },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: { value: initialTodos },
  reducers: {
    addTodo: (state, action) => {
      state.value.push({
        _id: state.value.length,
        name: action.payload.name,
        completed: false,
      });
    },

    toggleTodo: (state, action) => {
      state.value = state.value.map((item) => {
        if (item._id === action.payload._id) {
          item.completed = !item.completed;
        }
        return item;
      });
    },

    deleteTodo: (state, action) => {
      state.value = state.value.filter(
        (item) => item._id !== action.payload._id
      );
    },

    updateTodo: (state, action) => {
      state.value = state.value.map((item) => {
        if (item._id === action.payload._id) {
          item.name = action.payload.name;
        }
        return item;
      });
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo, updateTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
