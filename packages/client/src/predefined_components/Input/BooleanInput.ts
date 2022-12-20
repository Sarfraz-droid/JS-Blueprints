
import { nanoid } from "nanoid";
import { Parameters } from "@workspace/lib/types/Card";
import { DefaultComponent, functionCreator } from "../default";

export const input_BooleanInput = () =>
  DefaultComponent(
    "Boolean Input",
    functionCreator(`
      call('Event', {out: parameter['in']})
    `),
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
