import { CardData, Parameters } from "@workspace/lib/types/Card";
import { functionCreator } from "./default";
import { nanoid } from "nanoid";
import { Variable } from "@workspace/lib/types/variables.types";

export const variableGetterCard = (variable: Variable) => {
    const card: CardData = {
        editable: false,
        error: {
            code: "",
            message: "",
        },
        function: {
            content: functionCreator(``)
        },
        label: `Get ${variable.name}`,
        output: [
            {
                id: `${variable.type}__${variable.id}`,
                type: variable.type as Parameters,
                name: `${variable.name}`,
                value: variable.value
            }
        ],
        parameters: [
        ],
        input: [],
        renderer: null
    }

    return card;
};

export const variableSetterCard = (variable: Variable) => {
    const card: CardData = {
        editable: false,
        error: {
            code: "",
            message: "",
        },
        function: {
            content: functionCreator(`
                call("Event",{
                    'value': input['value']
                })
            `)
        },
        label: `Set ${name}`,
        output: [
            {
                id: `${Parameters.event}__output_${nanoid()}`,
                type: Parameters.event,
                name: `Event`,
            },
            {
                id: `${variable.type}__${variable.id}`,
                type: variable.type as Parameters,
                name: `value`,
            }
        ],
        parameters: [
        ],
        input: [
            {
                id: `${Parameters.event}__input_${nanoid()}`,
                type: Parameters.event,
                name: `Event`,
            },
            {
                id: `${variable.type}__input__${nanoid()}`,
                type: variable.type as Parameters,
                name: `value`,
            }
        ],
        renderer: null
    }

    return card;
}