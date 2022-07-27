import { createAsyncThunk } from "@reduxjs/toolkit";
import { activeNodestate } from "../features/activeNode.slice";
import { RootState } from "../store";

export const UpdateData = createAsyncThunk(
  "node/updateData",
  async (
    action: {
      id: string | undefined;
      data: object;
    },
    thunkApi
  ) => {
    const node: RootState = thunkApi.getState() as RootState;
    let newNode = node.nodes.find((node) => node.id === action.id);

    if (newNode === undefined)
      return thunkApi.rejectWithValue("Node not found");

    newNode = {
      ...newNode,
      data: {
        ...newNode.data,
        ...action.data,
      },
    };

    return newNode;
  }
);
