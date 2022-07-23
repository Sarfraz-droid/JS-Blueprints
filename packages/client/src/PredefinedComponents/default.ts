import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../utils/default";

export const StringDefault = (
  label: string,
  functions: string,
  input: ICardIO[],
  output: ICardIO[],
  parameters: ICardIO[],
  renderer: null | (() => any) = null
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
    renderer: renderer,
    editable: false,
    label: label,
    output: output,
    parameters: parameters,
    input: input,
    start: `root__${nanoid()}`,
    end: `root__${nanoid()}`,
  } as CardData);
