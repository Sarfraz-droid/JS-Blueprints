import { createSlice } from "@reduxjs/toolkit";
import { Variable } from "@workspace/lib/types/variables.types";
import { addVariableFunc, generateVariableThunk } from "../functions/variables.action";
import { loadDataThunk } from "../functions/db.action";

interface VariableSliceInterface {
    variables: Variable[];
}

const initialState: VariableSliceInterface = {
    variables: []
}

export const variablesSlice = createSlice({
    name: "variables",
    initialState,
    reducers: {
        setVariables(state, action) {
            state.variables = action.payload;
            return state;
        },
        createVariable(state, action) {
            const variable = addVariableFunc({
                type: action.payload.type,
                name: action.payload.name
            });

            state.variables.push(variable);
            return state;
        },
        updateVariableValue(state, action: { payload: { id: string, value: any } }) {
            const id = action.payload.id;
            const value = action.payload.value;

            console.log("Updating variable value", id);
            const variables = state.variables.map((variable) => {
                if (variable.id === id) {
                    console.log("Updating variable value");

                    switch (variable.type) {
                        case "string":
                            variable.value = value;
                            break;
                        case "number":
                            variable.value = Number(value);
                            break;
                        case "boolean":
                            variable.value = Boolean(value);
                            break;
                    }
                }
                return variable;
            })

            state.variables = variables;

            return state;
        },
        deleteVariable(state, action) {
            const id = action.payload.id;
            const index = state.variables.findIndex((variable) => variable.id === id);

            if (index !== -1) {
                state.variables.splice(index, 1);
            }

            return state;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(generateVariableThunk.fulfilled, (state, action) => {
            return state;
        });
        builder.addCase(loadDataThunk.fulfilled, (state, action) => {
            if (action.payload === undefined) return state;

            state.variables = action.payload?.variables || [];
            return state;
        })
    }
});

export const { setVariables, createVariable, deleteVariable, updateVariableValue } = variablesSlice.actions;

export default variablesSlice.reducer;