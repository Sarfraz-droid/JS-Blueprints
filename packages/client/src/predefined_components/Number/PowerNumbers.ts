import { nanoid } from "nanoid";
import {
  Parameters,
} from "@workspace/lib/types/Card";
import { DefaultComponent, functionCreator } from "../default";

export const number_PowerNumbers = () =>
  DefaultComponent(
    "Power Numbers",
    functionCreator(`
      call('Event', {out: input['A'] ** input['B']})
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
    []
  );

