import { createAsyncThunk } from "@reduxjs/toolkit";
import { FlowService } from "../../services/nodes.service";
import { RootState } from "../store";

export const RunCode = createAsyncThunk(
  "node/runCode",
  async (action: {}, thunkApi) => {
    const store: RootState = thunkApi.getState() as RootState;

    const nodes = JSON.parse(JSON.stringify(store.nodes));
    const edges = JSON.parse(JSON.stringify(store.edges));

    console.log("RunCode", nodes, edges);
    const Flow = new FlowService(nodes, edges);

    const result = await Flow.runFlowService();

    if (result.status === "success") {
      return result;
    } else {
      return thunkApi.rejectWithValue(result.message);
    }
  }
);
