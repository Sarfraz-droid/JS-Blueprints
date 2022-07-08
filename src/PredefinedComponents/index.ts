import { CardType } from "../types/Card";
import { InputCard } from "./Input";

const PredefinedComponents = {
  [CardType.input]: InputCard,
  [CardType.EventStart]: InputCard,
  [CardType.EventEnd]: InputCard,
};

export default PredefinedComponents;
