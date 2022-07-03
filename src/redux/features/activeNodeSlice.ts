import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Node } from "react-flow-renderer";
import { CardInterface, CardType } from "../../types/Card";
import { UpdateData } from "../functions/UpdateData";

export interface activeNodestate {
  activeNode: string | null;
  active: boolean;
}

const initialState: activeNodestate = {
  activeNode: null,
  active: false,
};

export const activeNodeSlice = createSlice({
  name: "activeNodeSlice",
  initialState,
  reducers: {
    setNode(state: activeNodestate, action: PayloadAction<Node>) {
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
    deleteNode(state: activeNodestate) {
      state.active = false;
      state.activeNode = null;

      return state;
    },
  },
  extraReducers(builder) {},
});

export const { setNode, deleteNode } = activeNodeSlice.actions;
export default activeNodeSlice.reducer;
