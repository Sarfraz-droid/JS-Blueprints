import { CardData, CardInterface, Parameters } from "../../types/Card";
import { defaultComment, main } from "../../utils/default";
import { nanoid } from "nanoid";
import React from "react";

export const EventHandler = (Heading: string) =>
  ({
    error: {
      code: "",
      message: "",
    },
    function: {
      content: `${defaultComment}  \n${main.toString()}`,
      outdated: false,
      old: "",
    },
    editable: false,
    label: Heading,
    renderer: null,
    output: [],
    parameters: [],
    input: [],
    start: `root__${nanoid()}`,
    end: `root__${nanoid()}`,
  } as CardData);
