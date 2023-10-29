import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProject: undefined,
};

export const projectsSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setSelectedProject: (state, action) => {
      state.selectedProject = action.payload;
    },
  },
});
export const { setSelectedProject } = projectsSlice.actions;
export default projectsSlice.reducer;
