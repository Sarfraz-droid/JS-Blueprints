import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../utils/default";

export const DefaultComponent = (
  label: string,
  functions: string,
  input: ICardIO[],
  output: ICardIO[],
  parameters: ICardIO[],
  renderer: null | (() => any) = null,
  hasEvent = true
) =>
({
  error: {
    code: "",
    message: "",
  },
  function: {
    content: functions,
  },
  renderer: renderer,
  editable: false,
  label: label,
  output: hasEvent ? [
    {
      id: `${Parameters.event}__output__${nanoid()}`,
      type: Parameters.event,
      value: "",
      name: `Event`,
    },
    ...output,
  ] : output,
  parameters: parameters,
  input: hasEvent ? [
    {
      id: `${Parameters.event}__input__${nanoid()}`,
      type: Parameters.event,
      value: "",
      name: `Event`,
    },
    ...input
  ] : input,
} as CardData);


export const functionCreator = (code: string) => `
/*
  the object should be returned as value of the ouput
*/  

(input, parameter) => {
  ${code}
}

`;