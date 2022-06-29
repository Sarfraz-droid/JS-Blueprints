import { CardData, CardInterface, Parameters } from "../types/Card";

export const Input: CardData = {
  error: {
    code: "",
    message: "",
  },
  function: "",
  label: "Heading",
  output: [
    {
      type: Parameters.string,
      value: "string",
    },
  ],
  parameters: [],
};
