import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string = localStorage.getItem("projectId") || "";

const ProjectIdSlice = createSlice({
  name: "projectId",
  initialState,
  reducers: {
    setProjectId(state: string, action: PayloadAction<string>) {
      state = action.payload;
      localStorage.setItem("projectId", state);
      return state;
    },
  },
});

export const { setProjectId } = ProjectIdSlice.actions;

export default ProjectIdSlice.reducer;
