import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import PredefinedComponents from "../../predefined_components";
import { CardInterface, CardType } from "@workspace/lib/types/Card";
import { nanoid } from "nanoid";
import {
  NodeChange,
  NodeDimensionChange,
  useUpdateNodeInternals,
} from "react-flow-renderer";
import NodeChangeHandler from "../../utils/NodeChangeHandler";
import { UpdateData } from "../functions/updateData.action";
import { newIOP } from "../functions/new_iop.action";
import { RunCode } from "../functions/run.action";
import toast from "react-hot-toast";
import { DuplicateNodes } from "../functions/duplicate.action";
import { Demo } from "./state";
import { loadData } from "../functions/db.action";
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
        data: PredefinedComponents[action.payload.type](),
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

    DeleteNode: (
      state: Array<CardInterface>,
      action: PayloadAction<CardInterface>
    ) => {
      state = state.filter((_) => _.id != action.payload.id);

      return state;
    },
    setNodes: (
      state: Array<CardInterface>,
      action: PayloadAction<Array<CardInterface>>
    ) => {
      state = action.payload;

      return state;
    },
  },
  extraReducers(builder) {
    builder.addCase(UpdateData.fulfilled, (state, action) => {
      console.log(action.payload);
      if (action.payload === undefined) return state;
      const newNode: CardInterface = action.payload;

      state = state.map((node: CardInterface) => {
        if (node.id === newNode.id) {
          return newNode;
        }
        return node;
      });

      console.log(state);

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
    builder.addCase(RunCode.fulfilled, (state, action) => {
      toast.success("Code executed successfully");
      if (action.payload === undefined) return state;

      const newNode: Array<CardInterface> | undefined = action.payload.node;
      if (newNode === undefined) return state;

      state = newNode;
      return state;
    });
    builder.addCase(RunCode.rejected, (state, action) => {
      toast.error("Code execution failed");
      return state;
    });
    builder.addCase(DuplicateNodes.fulfilled, (state, action) => {
      if (action.payload === undefined) return state;
      const newNode: CardInterface | undefined = action.payload;
      if (newNode === undefined) return state;
      return [...state, newNode];
    });
    builder.addCase(loadData.fulfilled, (state, action) => {
      if (action.payload === undefined) return state;
      state = action.payload?.nodes;
      return state;
    });
  },
});

export const { addCard, UpdateNode, DeleteNode, setNodes } = NodeSlice.actions;
export default NodeSlice.reducer;
