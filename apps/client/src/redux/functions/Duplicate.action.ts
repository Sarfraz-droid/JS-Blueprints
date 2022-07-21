import { createAsyncThunk } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { CardInterface, Parameters } from "../../types/Card";
import { RootState } from "../store";

export const DuplicateNodes = createAsyncThunk(
  "node/duplicateNodes",
  async (
    actions: {
      card: CardInterface;
    },
    thunkApi
  ) => {
    const card = actions.card;

    const newCard = {
      ...card,
      id: nanoid(),
      data: {
        ...card.data,
        input: card.data.input.map((input) => ({
          ...input,
          id: `${input.type}__input__${nanoid()}`,
        })),
        parameters: card.data.parameters.map((parameter) => ({
          ...parameter,
          id: `${parameter.type}__parameter__${nanoid()}`,
        })),
        output: card.data.output.map((output) => ({
          ...output,
          id: `${output.type}__output__${nanoid()}`,
        })),
        start: `root__${nanoid()}`,
        end: `root__${nanoid()}`,
      },
      position: {
        x: card?.position?.x + 100 || 0,
        y: card?.position?.y + 100 || 0,
      },
      positionAbsolute: {
        x: card?.positionAbsolute?.x + 100 || 0,
        y: card?.positionAbsolute?.y + 100 || 0,
      },
    };

    return newCard;
  }
);
