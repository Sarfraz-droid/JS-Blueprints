
import { nanoid } from "nanoid";
import { Parameters } from "@workspace/lib/types/Card";
import { DefaultComponent } from "../default";

export const input_BooleanInput = () =>
  DefaultComponent(
    "Boolean Input",
    '\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: "string",\n      value: "Hello"\n    }\n\n    then the function should return {\n      Hello: "Output String"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    \'Out\' : parameter[\'Input\']\n  };\n}',
    [],
    [
      {
        type: Parameters.boolean,
        value: true,
        id: `${Parameters.boolean}__output__${nanoid()}`,
        name: "Out",
      },
    ],
    [
      {
        type: Parameters.boolean,
        value: true,
        name: "Input",
        id: `${Parameters.boolean}__parameter__${nanoid()}`,
      },
    ]
  );
