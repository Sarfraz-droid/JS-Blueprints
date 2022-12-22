import { PayloadAction } from "@reduxjs/toolkit";
import { CardData, CardInterface, CardType } from "@workspace/lib/types/Card";
import { Variable, VariableType } from "@workspace/lib/types/variables.types";
import { variableGetterCard, variableSetterCard } from "../../predefined_components/variables";
import { nanoid } from "nanoid";

export const createVariableNodeFunc = (
    state: Array<CardInterface>,
    action: PayloadAction<{
        type: VariableType,
        data: Variable
    }>
) => {
    const { type, data } = action.payload;

    let variableCard: CardData | undefined;

    switch (type) {
        case VariableType.get:
            variableCard = variableGetterCard(data)
            break;
        case VariableType.set:
            variableCard = variableSetterCard(data);
            break;
    }

    if (variableCard === undefined)
        return state;

    const newCard: CardInterface = {
        data: variableCard,
        type: type == VariableType.get ? CardType.variable_GetVariable : CardType.variable_SetVariable,
        positionAbsolute: {
            x: 0,
            y: 0,
        },
        id: nanoid(),
        position: {
            x: 0,
            y: 0,
        },
    }

    state.push(newCard);

    return state;
}