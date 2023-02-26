import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { name: "John Doe", age: 24, email: "johndoe@nomail.com" },
  },
  reducers: {
    login: (state, action) => {
      state.vale = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
