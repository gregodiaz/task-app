import { createSlice } from "@reduxjs/toolkit";
import usersdb from '../../database/users.json'

export const userSlice = createSlice({
  name: "users",
  initialState: usersdb[0],
  reducers: {},
});

export default userSlice.reducer
