import { CardData, CardInterface, Parameters } from "../types/Card";
import { defaultComment, main } from "../utils/default";

export const EventHandler: CardData = {
  error: {
    code: "",
    message: "",
  },
  function: {
    content: `${defaultComment}  \n${main.toString()}`,
    outdated: false,
    old: "",
  },
  label: undefined,
  output: [],
  parameters: [],
  input: [],
  start: undefined,
  end: undefined,
};
