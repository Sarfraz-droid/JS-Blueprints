import { createAsyncThunk } from "@reduxjs/toolkit";
import { FlowService } from "../../services/nodes.service";
import { RootState } from "../store";

export const RunCode = createAsyncThunk(
  "node/runCode",
  async (action: {}, thunkApi) => {
    const store: RootState = thunkApi.getState() as RootState;
    console.log("RunCode", store);
    const rendererMap = new Map<string, any>();

    for (const node of store.nodes) {
      if (node.data.renderer != null && node.data.renderer != undefined) {
        rendererMap.set(node.id, node.data.renderer);
      }
    }

    const nodes = JSON.parse(JSON.stringify(store.nodes));
    const edges = JSON.parse(JSON.stringify(store.edges));
    const variables = JSON.parse(JSON.stringify(store.variables.variables));

    console.log("RunCode", nodes, edges);
    const Flow = new FlowService(nodes, edges, variables);

    let result = await Flow.runFlowService();

    if (result.node != undefined) {
      result.node = result.node.map((node) => {
        const newNode = { ...node };

        if (rendererMap.has(node.id)) {
          newNode.data.renderer = rendererMap.get(node.id);
        }

        return newNode;
      });
    }
    if (result.status === "success") {
      return result;
    } else {
      return thunkApi.rejectWithValue(result.message);
    }
  }
);
