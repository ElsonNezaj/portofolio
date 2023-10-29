import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./redux/projectsSlice";

export const store = configureStore({
  reducer: {
    projects: projectReducer,
  },
});
