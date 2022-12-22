import {
	Button,
	Grid,
	IconButton,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { DeleteOutline } from "@mui/icons-material";
import { Variable, VariableType } from "@workspace/lib/types/variables.types";
import { updateVariableValue } from "../../../redux/features/variables.slice";
import { generateVariableThunk } from "../../../redux/functions/variables.action";

function VariableList() {
	const variablesState = useSelector((state: RootState) => state.variables);

	const dispatch = useDispatch<AppDispatch>();

	const onUpdateVariableValue = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		variable: Variable
	) => {
		dispatch(
			updateVariableValue({
				id: variable.id,
				value: e.target.value,
			})
		);
	};

	const onGenerateVariable = (variable: Variable, type: VariableType) => {
		dispatch(
			generateVariableThunk({
				id: variable.id,
				type: type,
			})
		);
	};

	return (
		<React.Fragment>
			<Grid container>
				{variablesState.variables.map((variable) => {
					return (
						<Grid item container alignItems={"center"}>
							<Grid
								item
								container
								xs={3}
								direction={"column"}
								sx={{
									pl: 2,
								}}>
								<Grid item>
									<Typography>{variable.name}</Typography>
								</Grid>
								<Grid item>
									<Typography
										fontSize={12}
										sx={{
											color: "grey.500",
										}}>
										{variable.type}
									</Typography>
								</Grid>
							</Grid>
							<Grid item xs={3}>
								<TextField
									variant="filled"
									size="small"
									placeholder="Value"
									label="Value"
									value={variable.value}
									onChange={(e) => onUpdateVariableValue(e, variable)}
								/>
							</Grid>
							<Grid
								item
								xs={6}
								sx={{
									pl: 2,
								}}>
								<Stack direction={"row"} spacing={1}>
									<Button
										onClick={() =>
											onGenerateVariable(variable, VariableType.get)
										}>
										Get
									</Button>
									<Button
										variant="contained"
										color="secondary"
										onClick={() =>
											onGenerateVariable(variable, VariableType.set)
										}>
										Set
									</Button>
									<IconButton color="warning">
										<DeleteOutline />
									</IconButton>
								</Stack>
							</Grid>
						</Grid>
					);
				})}
			</Grid>
		</React.Fragment>
	);
}

export default VariableList;
