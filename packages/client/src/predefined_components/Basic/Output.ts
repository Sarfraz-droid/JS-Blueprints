import { nanoid } from "nanoid";
import { CardData, CardInterface, Parameters } from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";

export const OutputCard = () =>
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
  label: "Heading",
  output: [],
  parameters: [],
  renderer: null,
  input: [
    {
      id: `${Parameters.string}__input__${nanoid()}`,
      type: Parameters.string,
      value: "",
      name: `Input#1`,
    },
  ],
  start: `event__${nanoid()}`,
  end: `event__${nanoid()}`,
} as CardData);
