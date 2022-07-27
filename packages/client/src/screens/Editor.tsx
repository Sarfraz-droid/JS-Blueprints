import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import EditorComponent from "../components/Editor";
import NodeComponent from "../components/NodeComponent";
import { AppDispatch, RootState } from "../redux/store";
import toast, { Toaster } from "react-hot-toast";
import Button from "@mui/material/Button";
import {
  Box,
  Grid,
  Icon,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { RunCode } from "../redux/functions/run.action";
import { ReactFlowProvider } from "react-flow-renderer";
import AddButton from "../components/commons/Add/AddButton";
import { orange, purple, red } from "@mui/material/colors";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Logo from "../assets/brand/JSBlueprints.png";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useCallback, useEffect } from "react";
import { loadData, saveData } from "../redux/functions/db.action";

function Editor() {
  const { id } = useParams();

  const card = useSelector((state: RootState) => state.nodes);
  const edges = useSelector((state: RootState) => state.edges);
  const activeCard = useSelector((state: RootState) => state.activeNode);
  const theme = useTheme();
  const matches = useMediaQuery(theme?.breakpoints.down("md"));

  const dispatch = useDispatch<AppDispatch>();

  const Navigate = useNavigate();

  const saveOperation = useCallback(() => {
    saveData({
      nodes: card,
      edges: edges,
    })
      .then((data) => {
        toast.success("Saved");
        Navigate(`/editor/${data["_id"]}`);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  }, [card, edges]);

  useEffect(() => {
    if (id) {
      console.log("id", id);
      dispatch(loadData(id));
    }
  }, [id]);

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
          position: matches ? "relatve" : "fixed",
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
        <Grid container spacing={3} direction={matches ? "column" : "row"}>
          <Grid item xs={8}>
            <Stack direction={matches ? "column" : "row"} spacing={3}>
              <AddButton />
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
              <Button
                disableElevation={true}
                sx={{
                  fontWeight: 500,
                  letterSpacing: "2.5px",
                  p: 1,
                  px: 2,
                  backgroundColor: purple[500],
                  color: "white",
                  "&:hover": {
                    boxShadow: "none",
                    color: "black",
                    backgroundColor: purple[700],
                  },
                }}
                onClick={saveOperation}>
                Save
              </Button>
            </Stack>
          </Grid>
        </Grid>
        {matches ? (
          <Box>
            <Typography>
              Please use the desktop version of the editor to add cards.
            </Typography>
          </Box>
        ) : (
          <NodeComponent />
        )}
        <AnimatePresence>
          {activeCard.active && <EditorComponent />}
        </AnimatePresence>
        <Toaster />
      </div>
    </ReactFlowProvider>
  );
}

export default Editor;
