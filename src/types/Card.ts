export enum CardType {
  input = "input",
}

export enum Parameters {
  string,
  number,
  object,
}

export const ParameterColor: Array<string> = ["green", "blue", "orange"];

export interface CardData {
  label: string;
  parameters: Array<{
    type: Parameters;
    value: string;
  }>;
  output: Array<{
    type: Parameters;
    value: string;
  }>;
  error: {
    message: string;
    code: string;
  };
  function: string;
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
