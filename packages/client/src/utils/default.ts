import { parameterColor } from "@workspace/lib/types/Card";
import { CSSProperties } from "react";

export const main = (input: any, parameter: any) => {
  return {};
};

export const defaultComment = `
  /*
    the object should be returned as value of the ouput
    if ouput has 
    {
      type: "string",
      value: "Hello"
    }

    then the function should return {
      Hello: "Output String"
    }
  */
`;


export const edgeStyles: {
  [key: string]: CSSProperties
} = {
  default: {
    stroke: "#000",
  },
  string: {
    stroke: parameterColor.string
  },
  event: {
    stroke: parameterColor.event,
    strokeWidth: 3,
  },
  number: {
    stroke: parameterColor.number
  },
  boolean: {
    stroke: parameterColor.boolean
  },
}