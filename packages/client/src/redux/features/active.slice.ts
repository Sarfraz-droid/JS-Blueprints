import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Edge, Node } from "react-flow-renderer";
import { CardInterface, CardType } from "@workspace/lib/types/Card";

export interface activeEdgeState {
  edge: Edge;
  position: { x: number; y: number };
}

export interface activeEdgeNodeState {
  activeNode: string | null;
  active: boolean;
  Edge: activeEdgeState | null;
}

const initialState: activeEdgeNodeState = {
  activeNode: null,
  active: false,
  Edge: null,
};

export const activeSlice = createSlice({
  name: "activeSlice",
  initialState,
  reducers: {
    setNode(state: activeEdgeNodeState, action: PayloadAction<Node>) {
      const newCard = action.payload;

      const newState: CardInterface | null = {
        id: newCard.id,
        data: newCard.data,
        position: newCard.position,
        positionAbsolute: newCard.positionAbsolute!,
        type: CardType[newCard.type as CardType],
      };

      state.active = true;
      state.activeNode = newState.id;

      return state;
    },
    setEdge(state: activeEdgeNodeState, action: PayloadAction<activeEdgeState>) {
      const newEdge = action.payload;

      state.Edge = newEdge;

      return state;
    },
    deleteNode(state: activeEdgeNodeState) {
      state.active = false;
      state.activeNode = null;

      return state;
    },
    deleteActiveEdge(state: activeEdgeNodeState) {
      state.Edge = null;

      return state;
    }
  },
  extraReducers(builder) { },
});

export const { setNode, deleteNode, deleteActiveEdge, setEdge } = activeSlice.actions;
export default activeSlice.reducer;
