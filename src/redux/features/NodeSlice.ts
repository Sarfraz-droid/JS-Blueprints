import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PredefinedComponents from "../../PredefinedComponents";
import { CardInterface, CardType } from "../../types/Card";
import { nanoid } from "nanoid";
import { NodeChange, NodeDimensionChange } from "react-flow-renderer";
import NodeChangeHandler from "../../utils/NodeChangeHandler";
import { UpdateData } from "../functions/UpdateData";
import { newIOP } from "../functions/newIOP";
const initialState: Array<CardInterface> = [];

export const NodeSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (
      state: Array<CardInterface>,
      action: PayloadAction<{
        type: CardType;
      }>
    ) => {
      const newCard: CardInterface = {
        type: action.payload.type,
        data: PredefinedComponents[action.payload.type],
        positionAbsolute: {
          x: 0,
          y: 0,
        },
        id: nanoid(),
        position: {
          x: 0,
          y: 0,
        },
      };
      state.push(newCard);
      return state;
    },

    UpdateNode: (
      state: Array<CardInterface>,
      action: PayloadAction<NodeChange[]>
    ) => {
      console.log(action.payload);
      action.payload.forEach((nodeChange: NodeChange) => {
        state = NodeChangeHandler(nodeChange, state);
      });
    },
  },
  extraReducers(builder) {
    builder.addCase(UpdateData.fulfilled, (state, action) => {
      if (action.payload === undefined) return state;
      const newNode: CardInterface = action.payload;

      state = state.map((node: CardInterface) => {
        if (node.id === newNode.id) {
          return newNode;
        }
        return node;
      });

      return state;
    });
    builder.addCase(newIOP.fulfilled, (state, action) => {
      if (action.payload === undefined) return state;
      const newNode: CardInterface = action.payload;

      state = state.map((node: CardInterface) => {
        if (node.id === newNode.id) {
          return newNode;
        }
        return node;
      });

      return state;
    });
  },
});

export const { addCard, UpdateNode } = NodeSlice.actions;
export default NodeSlice.reducer;
