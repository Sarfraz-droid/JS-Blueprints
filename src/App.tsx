import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import EditorComponent from "./components/Editor";
import Drawer from "./components/Editor/Drawer";
import NodeComponent from "./components/NodeComponent";
import { addCard } from "./redux/features/NodeSlice";
import { RootState } from "./redux/store";
import { CardType } from "./types/Card";
import { Toaster } from "react-hot-toast";

function App() {
  const card = useSelector((state: RootState) => state.nodes);
  const activeCard = useSelector((state: RootState) => state.activeNode);
  console.log(card);

  const dispatch = useDispatch();

  return (
    <div className="App h-screen bg-white">
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
      <AnimatePresence>
        {activeCard.active && <EditorComponent />}
      </AnimatePresence>
      <Toaster />
    </div>
  );
}

export default App;
