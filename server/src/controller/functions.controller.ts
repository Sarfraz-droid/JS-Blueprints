import { Request, Response } from "express";
import { IOPBody } from "../interface/function.types";
import { runCodeService } from "../services/functions.service";

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
    const parameters: Array<IOPBody> = body.parameter;
    const code: string = body?.code ? body.code : "return  {};";

    const output = runCodeService(input, parameters, code);

    res.json({
      status: "success",
      data: output,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: "Error Occured" });
  }
};
