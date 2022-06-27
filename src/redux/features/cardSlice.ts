import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CardType } from "../../cards";

export interface CardInterface {
  id: string;
  title: string;
  type: CardType;
  position: {
    x: number;
    y: number;
  };
  input: Array<{
    type: string;
    value: string;
  }>;
  output: Array<{
    type: string;
    value: string;
  }>;
}

const initialState: Array<CardInterface> = [];

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (
      state: Array<CardInterface>,
      action: PayloadAction<CardInterface>
    ) => {
      state.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
