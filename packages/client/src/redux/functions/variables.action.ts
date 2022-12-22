import { createAsyncThunk } from "@reduxjs/toolkit";
import { CardData, Parameters } from "@workspace/lib/types/Card";
import { Variable, VariableType } from "@workspace/lib/types/variables.types"
import { nanoid } from "nanoid";
import { RootState } from "../store";
import { createVariableNodeFunc } from "./node.action";
import { createVariableNode } from "../features/node.slice";

export const addVariableFunc = ({ type, name }: { type: string; name: string; }) => {
    const variable: Variable = {
        id: nanoid(),
        type: type as Parameters,
        name: name
    }

    switch (type) {
        case Parameters.string:
            variable.value = "";
            break;
        case Parameters.number:
            variable.value = 0;
            break;
        case Parameters.boolean:
            variable.value = false;
            break;
    }

    return variable;
}

export const generateVariableThunk = createAsyncThunk(
    "node/generateVariable",
    async (action: {
        id: string | undefined;
        type: VariableType;
    }, thunkApi) => {
        const state = thunkApi.getState() as RootState;

        const variable = state.variables.variables.find((variable) => variable.id === action.id);

        if (variable === undefined)
            return thunkApi.rejectWithValue("Variable not found");

        thunkApi.dispatch(createVariableNode({
            type: action.type,
            data: variable
        }))
    }
)