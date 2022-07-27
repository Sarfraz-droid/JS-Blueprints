import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { addEdge, Connection, Edge } from "react-flow-renderer";
import toast from "react-hot-toast";
import { addEdgeThunk } from "../functions/addEdge.action";
import { loadData } from "../functions/db.action";
import { Demo } from "./state";

export const initialState: Array<Edge> = [];

export const EdgeSlice = createSlice({
  name: "edge",
  initialState,
  reducers: {
    addEdgeReducer: (
      state: Array<Edge>,
      action: PayloadAction<Edge<any> | Connection>
    ) => {
      state = addEdge(action.payload, state);
      return state;
    },
    setEdgeReducer: (
      state: Array<Edge>,
      action: PayloadAction<Array<Edge>>
    ) => {
      console.log(action.payload);
      state = action.payload;
      return state;
    },
    DeleteEdges: (state: Array<Edge>, action: PayloadAction<string>) => {
      state = state.filter(
        (_) => _.source != action.payload || _.target != action.payload
      );

      return state;
    },
    setEdges: (state: Array<Edge>, action: PayloadAction<Array<Edge>>) => {
      state = action.payload;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addEdgeThunk.fulfilled, (state, action) => {
      console.log("addEdgeThunk.fulfilled", action.payload);
      if (action.payload === undefined) return state;
      const newEdge: Array<Edge<any>> = action.payload.edges;
      state = newEdge;
      return state;
    });
    builder.addCase(addEdgeThunk.rejected, (state, action) => {
      const error = action.error.message;
      if (action.payload === undefined || action.payload === null) {
        toast.error("Something went wrong");
      } else {
        console.log(error);

        toast.error(action.payload as string);
      }

      return state;
    });
    builder.addCase(loadData.fulfilled, (state, action) => {
      if (action.payload === undefined) return state;
      state = action.payload?.edges;
      return state;
    });
  },
});

export const { addEdgeReducer, setEdgeReducer, DeleteEdges, setEdges } =
  EdgeSlice.actions;
export default EdgeSlice.reducer;
