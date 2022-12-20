import {
	Box,
	Button,
	Divider,
	Grid,
	IconButton,
	Modal,
	Stack,
	Typography,
	useMediaQuery,
} from "@mui/material";
import React, { useCallback, useState } from "react";
import AddButton from "./AddButton";
import { orange, purple, red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveData } from "../../redux/functions/db.action";
import { AppDispatch, RootState } from "../../redux/store";
import { useTheme } from "@mui/material/styles";
import { toast } from "react-hot-toast";
import { RunCode } from "../../redux/functions/run.action";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Edge } from "react-flow-renderer";

import FiberNewIcon from "@mui/icons-material/FiberNew";
import SaveIcon from "@mui/icons-material/Save";
import { CardInterface } from "@workspace/lib/types/Card";

function Navbar() {
	const [newProjectModal, setNewProjectModal] = useState(false);
	const card = useSelector((state: RootState) => state.nodes);
	const edges = useSelector((state: RootState) => state.edges);
	const theme = useTheme();
	const matches = useMediaQuery(theme?.breakpoints.down("md"));

	const dispatch = useDispatch<AppDispatch>();

	const Navigate = useNavigate();

	// ? Save the Project
	const saveOperation = useCallback(() => {
		saveData({
			nodes: card as Array<CardInterface>,
			edges: edges as Array<Edge>,
		})
			.then((data) => {
				toast.success("Saved");
				Navigate(`/editor/${data["_id"]}`);
			})
			.catch((err) => {
				toast.error(err.message);
			});
	}, [card, edges]);

	return (
		<React.Fragment>
			<Modal
				open={newProjectModal}
				onClose={() => {
					setNewProjectModal(false);
				}}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						padding: 5,
						borderRadius: 2,
					}}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: 600,
						}}>
						New Project?
					</Typography>
					<Typography
						variant="body1"
						sx={{
							pb: 2,
							pt: 1,
							color: "text.secondary",
						}}>
						Are you sure you want to create a new project? All unsaved data will
						be lost.
					</Typography>
					<Stack direction="row" justifyContent="flex-end" gap={2}>
						<Button
							variant="contained"
							color="secondary"
							onClick={() => {
								setNewProjectModal(false);
								Navigate("/editor");
							}}>
							Yes
						</Button>
						<Button onClick={() => setNewProjectModal(false)}>Cancel</Button>
					</Stack>
				</Box>
			</Modal>
			<Grid container spacing={3} direction={matches ? "column" : "row"}>
				<Grid item xs={8}>
					<Stack direction={matches ? "column" : "row"} spacing={1}>
						<IconButton
							onClick={() => {
								setNewProjectModal(true);
							}}>
							<FiberNewIcon />
						</IconButton>
						<IconButton onClick={saveOperation}>
							<SaveIcon />
						</IconButton>
						<Divider orientation="vertical" />
						<Button
							color="error"
							disableElevation={true}
							variant="contained"
							onClick={() => {
								console.log({
									card,
									edges,
								});

								dispatch(RunCode({}));
							}}>
							<ArrowRightIcon />
							Run Code
						</Button>
						<Divider orientation="vertical" />
						<AddButton />
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
		</React.Fragment>
	);
}

export default Navbar;
