import { createSlice } from "@reduxjs/toolkit";
import tasksdb from '../../database/Tasks.json'

export const taskSlice = createSlice({
  name: "tasks",
  initialState: tasksdb,
  reducers: {},
});

export default taskSlice.reducer
