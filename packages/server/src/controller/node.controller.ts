import { Request, Response } from "express";
import { NodeModel } from "../models/nodes.model";

export const save = async (req: Request, res: Response) => {
  const body = req.body;

  if (!body) {
    res.status(400).send("No body found");
    return;
  }

  try {
    const node = await NodeModel.create(body);
    res.status(200).send(node);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

export const getNodes = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const nodes = await NodeModel.findById(id);
    if (!nodes)
      return res.status(404).send("Node with id " + id + " not found");
    res.status(200).send(nodes);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
