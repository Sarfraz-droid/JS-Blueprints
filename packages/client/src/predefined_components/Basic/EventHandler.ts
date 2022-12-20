import { CardData, CardInterface, Parameters } from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { nanoid } from "nanoid";
import React from "react";
import { functionCreator } from "../default";

export const EventHandler = (Heading: string) =>
({
  error: {
    code: "",
    message: "",
  },
  function: {
    content: "",
    outdated: false,
    old: "",
  },
  editable: false,
  label: Heading,
  renderer: null,
  output: [],
  parameters: [],
  input: [],
  start: `event__${nanoid()}`,
  end: `event__${nanoid()}`,
} as CardData);
