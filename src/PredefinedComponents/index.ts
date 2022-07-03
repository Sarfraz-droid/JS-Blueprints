import { CardType } from "../types/Card";
import { InputCard } from "./Input";

const PredefinedComponents = {
  [CardType.input]: InputCard,
};

export default PredefinedComponents;
