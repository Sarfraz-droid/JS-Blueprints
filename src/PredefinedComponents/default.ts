import { nanoid } from "nanoid";
import { CardData, CardInterface, ICardIO, Parameters } from "../types/Card";
import { defaultComment, main } from "../utils/default";

export const StringDefault = (
  label: string,
  functions: string,
  input: ICardIO[],
  output: ICardIO[],
  parameters: ICardIO[]
) =>
  ({
    error: {
      code: "",
      message: "",
    },
    function: {
      content: functions,
      outdated: false,
      old: "",
    },
    renderer: null,
    editable: false,
    label: label,
    output: output,
    parameters: parameters,
    input: input,
    start: `root__${nanoid()}`,
    end: `root__${nanoid()}`,
  } as CardData);
