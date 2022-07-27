import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardInterface } from "@workspace/lib/types/Card";
import { Edge } from "react-flow-renderer";
import { instance } from "../../api/instance";

export const loadData = createAsyncThunk(
  "loadData",
  async (
    actions: {
      id: string;
      cb: () => void;
    },
    thunkApi
  ) => {
    console.log("loadData");
    const { data } = await instance.get(`/node/${actions.id}`);
    actions.cb();
    return data;
  }
);

export const saveData = async (action: {
  nodes: Array<CardInterface>;
  edges: Array<Edge>;
}) => {
  const { data } = await instance.post("/node/save", action);
  return data;
};
