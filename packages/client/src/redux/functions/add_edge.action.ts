import { createAsyncThunk } from "@reduxjs/toolkit";
import { addEdge, Edge, Connection } from "react-flow-renderer";
import { edgeStyles } from "../../utils/default";
import { RootState } from "../store";

export const addEdgeThunk = createAsyncThunk(
  "edge/addEdge",
  async (actions: Edge<any> | Connection, thunkApi) => {
    const node: RootState = thunkApi.getState() as RootState;

    let edges = node.edges;
    const nodes = node.nodes;

    const source: string | null | undefined = actions.sourceHandle;
    const target: string | null | undefined = actions.targetHandle;

    if (!source || !target) {
      return thunkApi.rejectWithValue("Source and target must be defined");
    }
    const source_id = source.substring(0, source.indexOf("__"));
    const target_id = target.substring(0, target.indexOf("__"));

    if (!source_id || !target_id) {
      return thunkApi.rejectWithValue("Source and target must be defined");
    }
    if (source_id !== target_id) {
      return thunkApi.rejectWithValue("Source and target must be the same");
    }

    const source_node = nodes.find((node) => node.id === actions.source);
    const target_node = nodes.find((node) => node.id === actions.target);

    edges = edges.filter((edge) => edge.targetHandle !== actions.targetHandle);

    actions = {
      ...actions,
      style: (edgeStyles[source_id as string] || edgeStyles.default),
    }

    const newEdge: Edge<any>[] = addEdge(actions, edges);

    return {
      edges: newEdge,
    };
  }
);
