import { CardData, CardInterface, Parameters } from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { nanoid } from "nanoid";
import React from "react";
import { functionCreator } from "../default";

export const EventEnd = () =>
({
    error: {
        code: "",
        message: "",
    },
    function: {
        content: functionCreator(`
            call('Event_End', {});
        `),
    },
    editable: false,
    label: "End",
    renderer: null,
    output: [],
    parameters: [],
    input: [{
        id: `${Parameters.event}__input__${nanoid()}`,
        type: Parameters.event,
        name: "Event_End",
        value: "",
    }],
} as CardData);
