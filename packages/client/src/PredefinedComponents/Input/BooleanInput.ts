// {
//     "error": {
//         "code": "",
//         "message": ""
//     },
//     "function": {
//         "content": "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'Out' : parameter['Input']\n  };\n}",
//         "outdated": false,
//         "old": ""
//     },
//     "editable": true,
//     "label": "Heading",
//     "renderer": null,
//     "output": [
//         {
//             "type": "boolean",
//             "value": false,
//             "id": "boolean__output__MFAPcwxZ7c0PX2cyMccOH",
//             "name": "Out"
//         }
//     ],
//     "parameters": [
//         {
//             "type": "boolean",
//             "value": true,
//             "id": "boolean__parameters__FgrqOPc_KbyZxa01iTro5",
//             "name": "Input"
//         }
//     ],
//     "input": [],
//     "start": "root__kY5u6wgIDppr5a5XGnVZw",
//     "end": "root__t4aKWmhwyT67iD7Lgxwzl"
// }

import { nanoid } from "nanoid";
import { Parameters } from "@workspace/lib/types/Card";
import { StringDefault } from "../default";

export const input_BooleanInput = () =>
  StringDefault(
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
