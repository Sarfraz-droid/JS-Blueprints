
import { nanoid } from "nanoid";
import { Parameters } from "@workspace/lib/types/Card";
import { DefaultComponent, functionCreator } from "../default";

export const loops_ForLoop = () =>
    DefaultComponent(
        "For Loop",
        functionCreator(`
            for (let i = input['Start']; i <= input['End']; i++) {
                call('Event', {Index: i})
            }

    `),
        [
            {
                id: `${Parameters.number}__input__${nanoid()}`,
                type: Parameters.number,
                name: "Start",
            },
            {
                id: `${Parameters.number}__input__${nanoid()}`,
                type: Parameters.number,
                name: "End",
            }
        ],
        [
            {
                type: Parameters.number,
                value: true,
                id: `${Parameters.number}__output__${nanoid()}`,
                name: "Index",
            },
        ],
        []
    );
