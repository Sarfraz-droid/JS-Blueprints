import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edge } from "react-flow-renderer";

export const initialState: Array<Edge> = [];

export const EdgeSlice = createSlice({
  name: "edge",
  initialState,
  reducers: {
    addEdge: (state: Array<Edge>, action: PayloadAction<Edge>) => {
      console.log(action.payload);
    },
  },
});

export const { addEdge } = EdgeSlice.actions;
export default EdgeSlice.reducer;
