import { nanoid } from "nanoid";
import { CardData, CardInterface, Parameters } from "../../types/Card";
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
    start: `root__${nanoid()}`,
    end: `root__${nanoid()}`,
  } as CardData);
