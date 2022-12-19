import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { DefaultComponent } from "../default";

export const string_Repeater = () =>
  DefaultComponent(
    "String Repeater",
    "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'out' : input['in']?.repeat(parameter['count'])\n  };\n}",
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
