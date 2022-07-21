import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    changeUser: (state, action) => {
      state.pop()
      state.push(action.payload)
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
