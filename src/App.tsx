import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import EditorComponent from "./components/Editor";
import Drawer from "./components/Editor/Drawer";
import NodeComponent from "./components/NodeComponent";
import { addCard } from "./redux/features/NodeSlice";
import { AppDispatch, RootState } from "./redux/store";
import { CardType } from "./types/Card";
import { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import { Icon, Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RunCode } from "./redux/functions/run.action";
import { ReactFlowProvider } from "react-flow-renderer";
import AddButton from "./components/commons/Add/AddButton";

function App() {
  const card = useSelector((state: RootState) => state.nodes);
  const edges = useSelector((state: RootState) => state.edges);
  const activeCard = useSelector((state: RootState) => state.activeNode);
  console.log(card);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <ReactFlowProvider>
      <div className="App h-screen bg-white">
        <Stack direction="row" spacing={3}>
          <AddButton />
          <Button
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(
                addCard({
                  type: CardType.input,
                })
              );
            }}
          >
            <AddIcon />
            Add Card
          </Button>

          <Button
            color="success"
            variant="contained"
            onClick={() => {
              dispatch(
                addCard({
                  type: CardType.basic_EventStart,
                })
              );
            }}
          >
            <AddIcon />
            Add Event Start
          </Button>

          <Button
            color="warning"
            variant="contained"
            onClick={() => {
              dispatch(
                addCard({
                  type: CardType.basic_EventEnd,
                })
              );
            }}
          >
            <AddIcon />
            Add Event End
          </Button>

          <Button
            color="error"
            variant="contained"
            onClick={() => {
              dispatch(
                addCard({
                  type: CardType.basic_Output,
                })
              );
            }}
          >
            <AddIcon />
            Add Output Card
          </Button>

          <Button
            color="secondary"
            onClick={() => {
              console.log({
                card,
                edges,
              });

              dispatch(RunCode({}));
            }}
          >
            Run
          </Button>
        </Stack>

        <NodeComponent />
        <AnimatePresence>
          {activeCard.active && <EditorComponent />}
        </AnimatePresence>
        <Toaster />
      </div>
    </ReactFlowProvider>
  );
}

export default App;
