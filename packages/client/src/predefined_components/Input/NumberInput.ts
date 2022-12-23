import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { DefaultComponent, functionCreator } from "../default";

export const input_numberInput = () =>
  DefaultComponent(
    "Number Input",
    functionCreator(`
      call('Event', {out: parameter['in']})
    `),
    [],
    [ 
      {
        type: Parameters.number,
        value: "",
        name: `out`,
        id: `${Parameters.number}__output__${nanoid()}`,
      },
    ],
    [
      {
        id: `${Parameters.string}__parameter__${nanoid()}`,
        type: Parameters.number,
        value: "",
        name: `in`,
      },
    ]
  );
