import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    changeUser: (state, action) => {
      state = action.payload;
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
