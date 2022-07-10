import { CardType } from "../types/Card";
import { EventHandler } from "./EventHandler";
import { InputCard } from "./Input";

const PredefinedComponents = {
  [CardType.input]: InputCard,
  [CardType.EventStart]: EventHandler,
  [CardType.EventEnd]: EventHandler,
};

export default PredefinedComponents;

export const HaveIOP = {
  [CardType.input]: true,
  [CardType.EventStart]: false,
  [CardType.EventEnd]: false,
};
