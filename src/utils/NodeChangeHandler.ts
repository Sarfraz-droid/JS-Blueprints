import { NodeChange } from "react-flow-renderer";
import { CardInterface } from "../types/Card";

export default function NodeChangeHandler(
  nodeChange: NodeChange,
  state: Array<CardInterface>
) {
  switch (nodeChange.type) {
    case "position":
      const node = state.find((node) => node.id === nodeChange.id);
      if (node && nodeChange.dragging) {
        node.position.x = nodeChange?.position?.x!;
        node.position.y = nodeChange?.position?.y!;
        node.positionAbsolute.x = nodeChange?.positionAbsolute?.x!;
        node.positionAbsolute.y = nodeChange?.positionAbsolute?.y!;
      }

      state = state.map((node) => {
        if (node.id === nodeChange.id) {
          return node;
        }
        return node;
      });

      break;
  }

  return state;
}
