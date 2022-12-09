import mongoose from "mongoose";
import { CardInterface } from "@workspace/lib/types/Card";

const NodeSchema = new mongoose.Schema({
  nodes: [
    {
      type: Object,
    },
  ],
  edges: [
    {
      type: Object,
    },
  ],
});

export const NodeModel = mongoose.model("Node", NodeSchema);
