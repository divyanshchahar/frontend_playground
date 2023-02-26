import { createSlice } from "@reduxjs/toolkit";

const initialTodos = [{ _id: 0, name: "first todod", compltetd: false }];

export const todosSlice = createSlice({
  name: "todos",
  initialState: { value: initialTodos },
  reducers: {
    addTodo: (state, action) => {
      state.value.push(action.payload);
    },
    toggleTodo: (state, action) => {
      state.value = state.value.map((item) => {
        if (item.id === action.payload.id) {
          item.compltetd = !item.compltetd;
        }
      });
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
