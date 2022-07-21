import { Request, Response } from "express";
import { CardInterface } from "../interface/card.types";
import { FlowService } from "../services/nodes.service";
import { test1Data, test2Data } from "../test";

export const run = (req: Request, res: Response) => {};
export const test = (req: Request, res: Response) => {
  const { id } = req.query;

  const data = id === "1" ? test1Data : test2Data;

  const flowService = new FlowService(
    data.card as Array<CardInterface>,
    data.edges
  );
  const temp = flowService.runFlowService();

  res.json({
    ...temp,
  });
};
