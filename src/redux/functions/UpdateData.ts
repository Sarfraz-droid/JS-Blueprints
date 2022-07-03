import { createAsyncThunk } from "@reduxjs/toolkit";
import { activeNodestate } from "../features/activeNodeSlice";
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
    let activeNode: activeNodestate = node.activeNode;
    let newNode = node.nodes.find((node) => node.id === activeNode.activeNode);

    if (newNode === undefined) return;

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
