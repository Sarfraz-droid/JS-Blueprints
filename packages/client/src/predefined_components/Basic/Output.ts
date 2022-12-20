import { nanoid } from "nanoid";
import { CardData, CardInterface, Parameters } from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { functionCreator } from "../default";

export const OutputCard = () =>
({
  error: {
    code: "",
    message: "",
  },
  function: {
    content: functionCreator(``),
    outdated: false,
    old: "",
  },
  editable: false,
  label: "Heading",
  output: [{
    id: `${Parameters.event}__output__${nanoid()}`,
    type: Parameters.event,
    value: "",
    name: `Event`,
  }],
  parameters: [],
  renderer: null,
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
      value: "",
      name: `Input#1`,
    },
  ],
} as CardData);
