import React from "react";

export enum CardType {
  CustomOperation = "CustomOperation",
  input = "input",
  basic_EventStart = "basic_EventStart",
  basic_EventEnd = "basic_EventEnd",
  basic_Output = "basic_Output",
  string_AddStrings = "string_AddStrings",
  string_Repeater = "string_Repeater",
  input_String = "input_String",
  input_Number = "input_Number",
  input_Boolean = "input_Boolean",
  number_AddNumbers = "number_AddNumbers",
  number_MultiplyNumbers = "number_MultiplyNumbers",
  number_DivideNumbers = "number_DivideNumbers",
  condition_greaterThan = "condition_greaterThan",
  condition_equalTo = "condition_equalTo",
  loops_ForLoop = "loops_ForLoop",
  variable_SetVariable = "variable_SetVariable",
  variable_GetVariable = "variable_GetVariable",
}

export enum Parameters {
  string = "string",
  number = "number",
  boolean = "boolean",
  event = "event",
  variable = "variable",
}

// ? Color of different parameters
export const parameterColor = {
  string: "green",
  number: "blue",
  object: "orange",
  boolean: "purple",
  event: "red"
};

// ? Basic Input/Output/Parameters for a card
export interface ICardIO {
  type: Parameters;
  value?: string | number | object | boolean;
  name: string;
  id: string;
}

// ? Data for a card
export interface CardData {
  label: string | undefined;
  input: Array<ICardIO>;
  parameters: Array<ICardIO>;
  output: Array<ICardIO>;
  renderer: null | (() => React.ReactNode);
  error: {
    message: string;
    code: string;
  };
  editable: boolean | undefined;
  function: {
    content: string;
  };
  start?: string | undefined;
  end?: string | undefined;
}

// ? IOP : This is used to determine if a card has input, output or parameters
export enum ICardIOP {
  input = "input",
  parameters = "parameters",
  output = "output",
}

// ? Card Interface
export interface CardInterface {
  id: string;
  data: CardData;
  position: {
    x: number;
    y: number;
  };
  positionAbsolute: {
    x: number;
    y: number;
  };
  type?: CardType;
}
