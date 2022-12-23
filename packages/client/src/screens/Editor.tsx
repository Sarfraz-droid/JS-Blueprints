import { AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import NodeInfo from "../components/NodeInfo";
import EditorComponent from "../components/Editor";
import { AppDispatch, RootState } from "../redux/store";
import { Toaster } from "react-hot-toast";
import { Box, useMediaQuery } from "@mui/material";
import { Edge, ReactFlowProvider } from "react-flow-renderer";
import Logo from "../assets/brand/JSBlueprints.png";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { loadDataThunk, saveData } from "../redux/functions/db.action";
import { setNodes } from "../redux/features/node.slice";
import { setEdges } from "../redux/features/edge.slice";
import Renderer from "../components/Renderer";
import { setProjectId } from "../redux/features/projectId.slice";
import Navbar from "../components/Navbar";
import { CardInterface } from "@workspace/lib/types/Card";


/**
 * @description Editor Screen
 * @returns JSX.Element
 */
function Editor() {
	const { id } = useParams();
	const activeCard = useSelector((state: RootState) => state.active);
	const theme = useTheme();
	const matches = useMediaQuery(theme?.breakpoints.down("md"));
	const [isLoading, setIsLoading] = useState(true);

	const dispatch = useDispatch<AppDispatch>();

	const Navigate = useNavigate();

	useEffect(() => {
		// ? Initialize the Project
		if (id) {
			dispatch(setProjectId(id));
			dispatch(
				loadDataThunk({
					id: id,
					cb: () => {
						setIsLoading(false);
					},
				})
			);
		} else {
			dispatch(setProjectId(""));
			setIsLoading(false);
			dispatch(setNodes([]));
			dispatch(setEdges([]));
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
					backgroundColor: "background.default",
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
				<Navbar />
				<Renderer matches={matches} isLoading={isLoading} />
				<AnimatePresence>{activeCard.active && <NodeInfo />}</AnimatePresence>
				<Toaster />
			</div>
		</ReactFlowProvider>
	);
}

export default Editor;
