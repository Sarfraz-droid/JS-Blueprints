import { nanoid } from "nanoid";
import { CardData, CardInterface, Parameters } from "../types/Card";
import { defaultComment, main } from "../utils/default";

export const InputCard: CardData = {
  error: {
    code: "",
    message: "",
  },
  function: {
    content: `${defaultComment}  \n${main.toString()}`,
    outdated: false,
    old: "",
  },
  label: "Heading",
  output: [
    {
      type: Parameters.string,
      value: "string",
      name: `Output#1`,
      id: `output__${nanoid()}`,
    },
  ],
  parameters: [
    {
      type: Parameters.string,
      value: "string",
      name: `Parameter#1`,
      id: `parameter__${nanoid()}`,
    },
  ],
  input: [
    {
      id: `input__${nanoid()}`,
      type: Parameters.string,
      value: "string",
      name: `Input#1`,
    },
  ],
};
