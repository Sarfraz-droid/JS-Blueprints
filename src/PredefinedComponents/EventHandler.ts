import { CardData, CardInterface, Parameters } from "../types/Card";
import { defaultComment, main } from "../utils/default";
import { nanoid } from "nanoid";

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
  start: `root__${nanoid()}`,
  end: `root__${nanoid()}`,
};
