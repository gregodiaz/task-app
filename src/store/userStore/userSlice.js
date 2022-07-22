import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    changeUser: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { changeUser } = userSlice.actions;
export default userSlice.reducer;
