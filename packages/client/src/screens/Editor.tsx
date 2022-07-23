import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import EditorComponent from "../components/Editor";
import Drawer from "../components/Editor/Drawer";
import NodeComponent from "../components/NodeComponent";
import { addCard } from "../redux/features/NodeSlice";
import { AppDispatch, RootState } from "../redux/store";
import { CardType } from "@workspace/lib/types/Card";
import { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import { Box, Grid, Icon, Stack, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { RunCode } from "../redux/functions/run.action";
import { ReactFlowProvider } from "react-flow-renderer";
import AddButton from "../components/commons/Add/AddButton";
import { orange, red } from "@mui/material/colors";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Logo from "../assets/brand/JSBlueprints.png";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

function Editor() {
  const card = useSelector((state: RootState) => state.nodes);
  const edges = useSelector((state: RootState) => state.edges);
  const activeCard = useSelector((state: RootState) => state.activeNode);
  console.log(card);

  const dispatch = useDispatch<AppDispatch>();

  const Navigate = useNavigate();

  return (
    <ReactFlowProvider>
      <Box
        sx={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <img
          src={Logo}
          style={{
            width: 500,
            opacity: 0.1,
          }}
        />
      </Box>
      <Box
        sx={{
          position: "fixed",
          zIndex: 10,
          right: 0,
          background: "white",
        }}>
        <img
          src={Logo}
          style={{
            width: 100,
          }}
          onClick={() => {
            Navigate("/");
          }}
        />
      </Box>
      <div
        className="App h-screen bg-white"
        style={{
          padding: "5px",
        }}>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Stack direction="row" spacing={3}>
              <AddButton />
              {/* <Button
            color="primary"
            variant="contained"
            onClick={() => {
              dispatch(
                addCard({
                  type: CardType.input,
                })
              );
            }}>
            <AddIcon />
            Add Card
          </Button> */}

              <Button
                variant="contained"
                sx={(theme) => ({
                  backgroundColor: red[500],
                  "&:hover": {
                    backgroundColor: red[700],
                  },
                })}
                onClick={() => {
                  console.log({
                    card,
                    edges,
                  });

                  dispatch(RunCode({}));
                }}>
                <ArrowRightIcon scale={1.5} />
                Run Code
              </Button>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Stack direction="row" spacing={3}>
              <Button
                disableElevation={true}
                sx={{
                  fontWeight: 500,
                  letterSpacing: "2.5px",
                  p: 1,
                  px: 2,
                  backgroundColor: orange[500],
                  color: "white",
                  "&:hover": {
                    boxShadow: "none",
                    color: "black",
                    backgroundColor: orange[700],
                  },
                }}
                onClick={() => {
                  Navigate("/docs");
                }}>
                Documentation
              </Button>
            </Stack>
          </Grid>
        </Grid>
        <NodeComponent />
        <AnimatePresence>
          {activeCard.active && <EditorComponent />}
        </AnimatePresence>
        <Toaster />
      </div>
    </ReactFlowProvider>
  );
}

export default Editor;
