import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { DefaultComponent, functionCreator } from "../default";

// Adds two strings
export const string_AddStrings = () =>
  DefaultComponent(
    "Add String",
    functionCreator(`
      call('Event', {out: input['A'] + input['B']})
    `),
    [
      {
        id: `${Parameters.string}__input__${nanoid()}`,
        type: Parameters.string,
        value: "",
        name: `A`,
      },
      {
        id: `${Parameters.string}__input__${nanoid()}`,
        type: Parameters.string,
        value: "",
        name: `B`,
      },
    ],
    [
      {
        type: Parameters.string,
        value: "",
        name: `out`,
        id: `${Parameters.string}__output__${nanoid()}`,
      },
    ],
    [],
    null
  );
