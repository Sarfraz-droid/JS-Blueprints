import { ICardIO } from "@workspace/lib/types/Card";
import { IOPBody } from "@workspace/lib/types/function.types";

export const runCodeService = (
  input: Array<ICardIO>,
  parameters: Array<ICardIO>,
  code: string
) => {
  let params: {
    [key: string]: any;
  } = {};
  parameters.forEach((param) => {
    params[param.name] = param.value;
  });

  const _input: {
    [key: string]: any;
  } = {};

  input.forEach((inp) => {
    _input[inp.name] = inp.value;
  });

  const output = eval(code)(_input, params);

  return output;
};
