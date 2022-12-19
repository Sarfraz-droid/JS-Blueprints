import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { DefaultComponent } from "../default";

export const input_numberInput = () =>
  DefaultComponent(
    "Number Input",
    '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    \'out\' : parameter[\'in\']\n  };\n}',
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
