import { EventHandlerNode } from "../components/cards/NodeTypes/EventStart";
import { OutputNode } from "../components/cards/NodeTypes/OutputNode";
import { TextUpdaterNode } from "../components/cards/NodeTypes/TextNode";
import { CardType } from "@workspace/lib/types/Card";
import { EventHandler } from "./Basic/EventHandler";
import { InputCard } from "./Input";
import { OutputCard } from "./Basic/Output";
import { string_AddStrings } from "./String/AddStrings";
import { input_StringInput } from "./Input/StringInput";
import { string_Repeater } from "./String/Repeater";
import { input_numberInput } from "./Input/NumberInput";
import { number_AddNumbers } from "./Number/addNumber";
import { number_MultiplyNumbers } from "./Number/MultiplyNumbers";
import { number_DivideNumbers } from "./Number/DivideNumbers";
import { input_BooleanInput } from "./Input/BooleanInput";
import { condition_GreaterThan } from "./Conditionals/Greaterthan";
import { condition_Equalto } from "./Conditionals/Equalto";

/**
 * This file contains all the predefined components that are available to the user
 */
const PredefinedComponents = {
  [CardType.CustomOperation]: InputCard,
  [CardType.input]: InputCard,
  [CardType.basic_EventStart]: () => EventHandler("Event Start"),
  [CardType.basic_EventEnd]: () => EventHandler("Event End"),
  [CardType.basic_Output]: OutputCard,
  [CardType.string_AddStrings]: string_AddStrings,
  [CardType.string_Repeater]: string_Repeater,
  [CardType.input_Number]: input_numberInput,
  [CardType.input_String]: input_StringInput,
  [CardType.input_Boolean]: input_BooleanInput,
  [CardType.number_AddNumbers]: number_AddNumbers,
  [CardType.number_MultiplyNumbers]: number_MultiplyNumbers,
  [CardType.number_DivideNumbers]: number_DivideNumbers,
  [CardType.condition_greaterThan]: condition_GreaterThan,
  [CardType.condition_equalTo]: condition_Equalto,
};

export default PredefinedComponents;

// ? Have IOP : This is used to determine if a card has input, output or parameters
// ? This is used to determine if a card has input, output or parameters
export const haveInputOutputParam: {
  [key in any]: {
    input: boolean;
    parameters: boolean;
    output: boolean;
  };
} = {
  [CardType.input]: {
    input: true,
    parameters: true,
    output: true,
  },
  [CardType.basic_EventStart]: {
    input: false,
    parameters: false,
    output: false,
  },
  [CardType.basic_EventEnd]: {
    input: false,
    parameters: false,
    output: false,
  },
  [CardType.basic_Output]: {
    input: true,
    parameters: false,
    output: false,
  },
  string_AddStrings: {
    input: false,
    parameters: false,
    output: false,
  },
  input_StringInput: {
    input: false,
    parameters: false,
    output: false,
  },
};

// Generating Predefined Nodes
const PredefinedToNode = () => {
  const result: any = {};
  Object.keys(PredefinedComponents).forEach((key) => {
    result[key] = TextUpdaterNode;
  });

  return result;
};

const nodes = PredefinedToNode();

// Define the node types
export const nodeTypes = {
  ...PredefinedToNode(),
  [CardType.basic_EventStart]: EventHandlerNode,
  [CardType.basic_EventEnd]: EventHandlerNode,
  [CardType.basic_Output]: OutputNode,
};
