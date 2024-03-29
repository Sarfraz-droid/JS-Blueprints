import { useState } from "react";
import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { UpdateData } from "../../../redux/functions/updateData.action";
import { Divider, Grid, Stack, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

// ? Function Editor Node
function FunctionEditor() {
	const activeNode = useSelector((state: RootState) => state.active);

	const activeCard = useSelector((state: RootState) => {
		const card = state.nodes.find((card) => card.id === activeNode.activeNode);
		return card;
	});

	const dispatch = useDispatch<AppDispatch>();
	if (!activeCard) return <>Please Choose a card</>;

	return (
		<div className="my-2">
			{!activeCard?.data.editable ? (
				<Grid
					container
					sx={{
						height: "60vh",
						width: "90%",
						m: 2,
						backgroundColor: blueGrey[900],
						color: "white",
						borderRadius: "10px",
					}}
					alignItems={"center"}
					justifyContent={"center"}>
					<Grid item alignItems={"center"} justifyContent={"center"}>
						<Stack textAlign={"center"} spacing={1}>
							<Typography variant="h4">This card is not editable.</Typography>
							<Typography
								variant="body1"
								sx={{
									fontWeight: 100,
								}}>
								This is a generated card. You can not edit it.
							</Typography>
						</Stack>
					</Grid>
				</Grid>
			) : (
				<Editor
					height="60vh"
					width={"95%"}
					defaultLanguage="javascript"
					value={activeCard.data.function.content}
					onChange={(newValue) => {
						dispatch(
							UpdateData({
								data: {
									function: {
										...activeCard.data.function,
										content: newValue,
									},
								},
								id: activeCard.id,
							})
						);
					}}
					theme="vs-dark"
				/>
			)}

			<Divider />
		</div>
	);
}

export default FunctionEditor;
