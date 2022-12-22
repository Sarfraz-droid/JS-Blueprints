import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { DefaultComponent, functionCreator } from "../default";

export const string_Repeater = () =>
  DefaultComponent(
    "String Repeater",
    functionCreator(`
      call('Event', {out: input['in'].repeat(parameter['count'])})
    `),
    [
      {
        id: `${Parameters.string}__input__${nanoid()}`,
        type: Parameters.string,
        value: "",
        name: `in`,
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
    [
      {
        id: `${Parameters.string}__parameter__${nanoid()}`,
        type: Parameters.number,
        value: 1,
        name: `count`,
      },
    ],
    null
  );
