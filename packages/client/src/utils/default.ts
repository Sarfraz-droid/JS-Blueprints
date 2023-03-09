import { parameterColor } from "@workspace/lib/types/Card";
import { CSSProperties } from "react";

export const main = (input: any, parameter: any) => {
  return {};
};

export const defaultComment = `
  /*
    the object should be returned as value of the output
    if output has 
    {
      type: "string",
      value: "Hello"
    }

    then you should call
    
    call('Event', {out: "Hello"}) 
    Here 'Event' is the name of the event and 'out' is the name of the output
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