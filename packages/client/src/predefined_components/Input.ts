import { nanoid } from "nanoid";
import { CardData, CardInterface, Parameters } from "@workspace/lib/types/Card";
import { defaultComment, main } from "../utils/default";

export const InputCard = () =>
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
  editable: true,
  label: "Heading",
  renderer: null,
  output: [
    {
      id: `${Parameters.event}__output__${nanoid()}`,
      type: Parameters.event,
      value: "",
      name: `Event`,
    },
    {
      type: Parameters.string,
      value: "string",
      name: `Output#1`,
      id: `${Parameters.string}__output__${nanoid()}`,
    },
  ],
  parameters: [
    {
      type: Parameters.string,
      value: "string",
      name: `Parameter#1`,
      id: `${Parameters.string}__parameter__${nanoid()}`,
    },
  ],
  input: [
    {
      id: `${Parameters.event}__input__${nanoid()}`,
      type: Parameters.event,
      value: "",
      name: `Event`,
    },
    {
      id: `${Parameters.string}__input__${nanoid()}`,
      type: Parameters.string,
      value: "string",
      name: `Input#1`,
    },
  ],
  start: `event__${nanoid()}`,
  end: `event__${nanoid()}`,
} as CardData);
