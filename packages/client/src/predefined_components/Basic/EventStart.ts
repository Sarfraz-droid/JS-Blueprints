import { CardData, CardInterface, Parameters } from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { nanoid } from "nanoid";
import React from "react";
import { functionCreator } from "../default";

export const EventStart = () =>
({
    error: {
        code: "",
        message: "",
    },
    function: {
        content: functionCreator(`
            call('Event_Start', {});
        `),
    },
    editable: true,
    label: "Start",
    renderer: null,
    output: [{
        id: `${Parameters.event}__output__${nanoid()}`,
        type: Parameters.event,
        name: "Event_Start",
        value: "",
    }],
    parameters: [],
    input: [],
} as CardData);
