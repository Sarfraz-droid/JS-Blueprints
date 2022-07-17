import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { CardInterface, Parameters } from "../../types/Card";
import { RootState } from "../store";

function getField(field: Parameters, type: string) {
  switch (field) {
    case Parameters.number:
      return {
        type: Parameters.number,
        value: 0,
        id: `${field}__${type}__${nanoid()}`,
      };
    case Parameters.string:
      return {
        type: Parameters.string,
        value: "",
        id: `${field}__${type}__${nanoid()}`,
      };

    case Parameters.object:
      return {
        type: Parameters.object,
        value: {},
        id: `${field}__${type}__${nanoid()}`,
      };
  }
}

export const newIOP = createAsyncThunk(
  "node/newIOP",
  async (
    action: {
      type: string;
      field: Parameters;
    },
    thunkApi
  ) => {
    const node: RootState = thunkApi.getState() as RootState;
    const activeId: string | null = node.activeNode.activeNode;

    if (activeId === null) return;

    const activeNode: CardInterface | undefined = node.nodes.find(
      (node) => node.id === activeId
    );

    if (
      activeNode === undefined ||
      (activeNode.data as any)[action.type] === undefined
    )
      return;

    const newNode: CardInterface = {
      ...activeNode,
      data: {
        ...activeNode.data,
        [action.type]: [
          ...(activeNode.data as any)[action.type],
          getField(action.field, action.type),
        ],
      },
    };

    return newNode;
  }
);
