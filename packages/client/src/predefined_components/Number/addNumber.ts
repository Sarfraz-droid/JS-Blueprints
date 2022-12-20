import { nanoid } from "nanoid";
import {
  CardData,
  CardInterface,
  ICardIO,
  Parameters,
} from "@workspace/lib/types/Card";
import { defaultComment, main } from "../../utils/default";
import { DefaultComponent, functionCreator } from "../default";

export const number_AddNumbers = () =>
  DefaultComponent(
    "Add Numbers",
    functionCreator(`
      call('Event', {out: input['A'] + input['B']})
    `),
    [
      {
        id: `${Parameters.number}__input__${nanoid()}`,
        type: Parameters.number,
        value: "",
        name: `A`,
      },
      {
        id: `${Parameters.number}__input__${nanoid()}`,
        type: Parameters.number,
        value: "",
        name: `B`,
      },
    ],
    [
      {
        type: Parameters.number,
        value: "",
        name: `out`,
        id: `${Parameters.number}__output__${nanoid()}`,
      },
    ],
    [],
    null
  );

// const temp = {
//   type: "input",
//   data: {
//     error: {
//       code: "",
//       message: "",
//     },
//     function: {
//       content:
//         "\n  /*\n    the object should be returned as value of the ouput\n    if ouput has \n    {\n      type: \"string\",\n      value: \"Hello\"\n    }\n\n    then the function should return {\n      Hello: \"Output String\"\n    }\n  */\n  \n(input, parameter) => {\n  return {\n    'out' : input['A'] + input['B']\n  };\n}",
//       outdated: false,
//       old: "",
//     },
//     editable: true,
//     label: "Add Number",
//     output: [
//       {
//         type: "number",
//         value: 30,
//         id: "number__output__niY77wDtvPh00lti5jvga",
//         name: "out",
//       },
//     ],
//     parameters: [],
//     input: [
//       {
//         type: "number",
//         value: 5,
//         id: "number__input__F7d6P-CrTRnHTkftM93Fi",
//         name: "A",
//       },
//       {
//         type: "number",
//         value: 25,
//         id: "number__input__RMQuG7F4hWKKume1frsat",
//         name: "B",
//       },
//     ],
//     start: "root__M6-86FAUwNMj35Sx-IyHO",
//     end: "root__ZomYPhmiWeVXzq-LmgzQP",
//   },
//   positionAbsolute: {
//     x: -30,
//     y: -15,
//   },
//   id: "sexW2YgqWOb1_Wa-4j6Oo",
//   position: {
//     x: -30,
//     y: -15,
//   },
// };
