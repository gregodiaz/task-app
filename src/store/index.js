import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./taskStore/tasksSlice.js";
import usersReducer from "./userStore/usersSlice.js";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    users: usersReducer,
  },
});
