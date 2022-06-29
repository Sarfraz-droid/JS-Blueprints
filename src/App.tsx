import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "./components/Editor/Drawer";
import NodeComponent from "./components/NodeComponent";
import { addCard } from "./redux/features/NodeSlice";
import { RootState } from "./redux/store";
import { CardType } from "./types/Card";

function App() {
  const card = useSelector((state: RootState) => state.nodes);
  const activeCard = useSelector((state: RootState) => state.activeNode);
  console.log(card);

  const dispatch = useDispatch();

  return (
    <div className="App h-screen">
      <button
        onClick={() => {
          dispatch(
            addCard({
              type: CardType.input,
            })
          );
        }}
      >
        Add Card
      </button>
      <NodeComponent />
      <AnimatePresence>{activeCard.active && <Drawer />}</AnimatePresence>
    </div>
  );
}

export default App;
