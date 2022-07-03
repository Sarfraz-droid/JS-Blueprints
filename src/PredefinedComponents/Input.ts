import { nanoid } from "nanoid";
import { CardData, CardInterface, Parameters } from "../types/Card";

export const InputCard: CardData = {
  error: {
    code: "",
    message: "",
  },
  function: {
    content: "",
    outdated: true,
    old: "",
  },
  label: "Heading",
  output: [
    {
      type: Parameters.string,
      value: "string",
      id: `output__${nanoid()}`,
    },
  ],
  parameters: [
    {
      type: Parameters.string,
      value: "string",
      id: `parameter__${nanoid()}`,
    },
  ],
  input: [
    {
      id: `input__${nanoid()}`,
      type: Parameters.string,
      value: "string",
    },
  ],
};
