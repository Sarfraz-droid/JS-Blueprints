import { ICardIO } from "@workspace/lib/types/Card";
import { IOPBody } from "@workspace/lib/types/function.types";

export const runCodeService = (
  input: Array<ICardIO>,
  parameters: Array<ICardIO>,
  outputs: Array<ICardIO>,
  code: string
) => {
  let params: {
    [key: string]: any;
  } = {};

  let outputCalls: Array<{
    id?: string,
    output: any,
  }> = [];

  const call = (event: string, output: object) => {
    const outputEvent = outputs.find((out) => out.name === event);
    if (output) {
      outputCalls.push({
        id: outputEvent?.id,
        output
      });
    }
  }

  parameters.forEach((param) => {
    params[param.name] = param.value;
  });

  const _input: {
    [key: string]: any;
  } = {};

  input.forEach((inp) => {
    _input[inp.name] = inp.value;
  });
  console.log("Evaluating", _input, params, code);
  // eval(code)(_input, params);
  const run = new Function("input", "parameter", "call", code)();
  console.log("Running", run);
  run(_input, params, call);
  // console.log("Output", outputCalls);
  return outputCalls;
};
