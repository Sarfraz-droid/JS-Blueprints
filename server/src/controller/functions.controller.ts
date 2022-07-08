import { Request, Response } from "express";
import { IOPBody } from "../interface/function.types";

export const generate = (req: Request, res: Response) => {
  try {
    const body = req.body;
    // const input: Array<IOPBody> = body.input;
    // const output: Array<IOPBody> = body.output;
    // const patameters: Array<IOPBody> = body.parameter;
    const code: string = body?.code ? body.code : "return  {};";

    const genFunction = new Function("input", "parameters", code);

    res.json({
      status: "success",
      data: genFunction.toString(),
    });
  } catch (err) {
    res.status(400).json({ error: "Error Occured" });
  }
};

export const runCode = (req: Request, res: Response) => {
  const body = req.body;

  try {
    const input: Array<IOPBody> = body.input;
    const patameters: Array<IOPBody> = body.parameter;
    const code: string = body?.code ? body.code : "return  {};";

    let params: {
      [key: string]: any;
    } = {};
    patameters.forEach((param) => {
      params[param.name] = param.value;
    });

    const _input: {
      [key: string]: any;
    } = {};

    input.forEach((inp) => {
      _input[inp.name] = inp.value;
    });

    const output = eval(code)(_input, params);

    console.log(output);

    res.json({
      status: "success",
      data: output,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error Occured" });
  }
};
