export enum CardType {
  input = "input",
  EventStart = "EventStart",
  EventEnd = "EventEnd",
}

export enum Parameters {
  string = "string",
  number = "number",
  object = "object",
}

export const ParameterColor: object = {
  string: "green",
  number: "blue",
  object: "orange",
};

export interface ICardIO {
  type: Parameters;
  value: string;
  name: string;
  id: string;
}

export interface CardData {
  label: string;
  input: Array<ICardIO>;
  parameters: Array<ICardIO>;
  output: Array<ICardIO>;
  error: {
    message: string;
    code: string;
  };
  function: {
    content: string;
    outdated: boolean;
    old: string;
  };
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
