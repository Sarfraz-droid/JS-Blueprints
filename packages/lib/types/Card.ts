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
  number_SubtractNumbers = "number_SubtractNumbers",
  number_MultiplyNumbers = "number_MultiplyNumbers",
  number_DivideNumbers = "number_DivideNumbers",
  number_PowerNumbers = "number_PowerNumbers",
  condition_greaterThan = "condition_greaterThan",
  condition_lessThan = "condition_lessThan",
  condition_equalTo = "condition_equalTo",
  loops_ForLoop = "loops_ForLoop",
  variable_SetVariable = "variable_SetVariable",
  variable_GetVariable = "variable_GetVariable",
}

export const CardMap = {
  [CardType.CustomOperation]: "Custom Operation",
  [CardType.input]: "Input",
  [CardType.basic_EventStart]: "Event Start",
  [CardType.basic_EventEnd]: "Event End",
  [CardType.basic_Output]: "Output",
  [CardType.string_AddStrings]: "Add Strings",
  [CardType.string_Repeater]: "Repeater",
  [CardType.input_String]: "String Input",
  [CardType.input_Number]: "Number Input",
  [CardType.input_Boolean]: "Boolean Input",
  [CardType.number_AddNumbers]: "Add Numbers",
  [CardType.number_SubtractNumbers]: "Subtract Numbers",
  [CardType.number_MultiplyNumbers]: "Multiply Numbers",
  [CardType.number_DivideNumbers]: "Divide Numbers",
  [CardType.number_PowerNumbers]: "Power Numbers",
  [CardType.condition_greaterThan]: "Greater Than",
  [CardType.condition_lessThan]: "Less Than",
  [CardType.condition_equalTo]: "Equal To",
  [CardType.loops_ForLoop]: "For Loop",
  [CardType.variable_SetVariable]: "Set Variable",
  [CardType.variable_GetVariable]: "Get Variable",
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
  rid?: string;
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
