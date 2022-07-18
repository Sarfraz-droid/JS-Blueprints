export enum CardType {
  Custom = "Custom",
  input = "input",
  basic_EventStart = "basic_EventStart",
  basic_EventEnd = "basic_EventEnd",
  basic_Output = "basic_Output",
  string_AddStrings = "string_AddStrings",
  input_String = "input_String",
  string_Repeater = "string_Repeater",
  input_Number = "input_Number",
  number_AddNumbers = "number_AddNumbers",
  number_MultiplyNumbers = "number_MultiplyNumbers",
  number_DivideNumbers = "number_DivideNumbers",
}

export enum Parameters {
  string = "string",
  number = "number",
  // object = "object",
}

export const ParameterColor: object = {
  string: "green",
  number: "blue",
  object: "orange",
};

export interface ICardIO {
  type: Parameters;
  value: string | number | object;
  name: string;
  id: string;
}

export interface CardData {
  label: string | undefined;
  input: Array<ICardIO>;
  parameters: Array<ICardIO>;
  output: Array<ICardIO>;
  error: {
    message: string;
    code: string;
  };
  editable: boolean | undefined;
  function: {
    content: string;
    outdated: boolean;
    old: string;
  };
  start: string | undefined;
  end: string | undefined;
}

export enum ICardIOP {
  input = "input",
  parameters = "parameters",
  output = "output",
}

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
  type: CardType;
}
