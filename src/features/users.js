import { createSlice } from "@reduxjs/toolkit";

const initialUSerState = {
  name: "John Doe",
  age: 24,
  email: "johndoe@nomail.com",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialUSerState,
  },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialUSerState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
