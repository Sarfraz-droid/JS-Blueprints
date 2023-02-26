import {
	Button,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@mui/material";
import { Parameters } from "@workspace/lib/types/Card";
import React, { useMemo } from "react";

const VariableParams = [
	Parameters.string,
	Parameters.number,
	Parameters.boolean,
];

function AddVariableComp({
	onAddVariable,
}: {
	onAddVariable: ({ type, name }: { type: string; name: string }) => void;
}) {
	const [variableData, setVariableData] = React.useState({
		type: "",
		name: "",
	});

	const isDisabled = useMemo(() => {
		return variableData.type === "" || variableData.name === "";
	}, [variableData]);

	const handleAddVariable = () => {
		onAddVariable({
			type: variableData.type,
			name: variableData.name,
		});
		setVariableData({
			type: "",
			name: "",
		});
	};

	return (
		<React.Fragment>
			<FormControl
				variant="filled"
				sx={{
					m: 1,
					width: "95%",
				}}>
				<Grid container spacing={1}>
					<Grid item xs={4}>
						<InputLabel id="type-label">Type</InputLabel>
						<Select
							size="small"
							variant="filled"
							label="Type"
							labelId="type-label"
							id="type"
							aria-placeholder="Type"
							placeholder="Type"
							value={variableData.type}
							onChange={(e) => {
								setVariableData({
									...variableData,
									type: e.target.value as string,
								});
							}}
							sx={{
								width: "100%",
							}}>
							{VariableParams.map((val) => (
								<MenuItem value={val}>{val}</MenuItem>
							))}
						</Select>
					</Grid>
					<Grid item xs={8}>
						<TextField
							fullWidth
							label="Variable Name"
							variant="filled"
							placeholder="Variable Name"
							size="small"
							value={variableData.name}
							onChange={(e) => {
								setVariableData({
									...variableData,
									name: e.target.value,
								});
							}}
						/>
					</Grid>
					<Grid
						item
						xs={12}
						sx={{
							mt: 1,
						}}>
						<Button
							variant="contained"
							disabled={isDisabled}
							onClick={handleAddVariable}
							sx={{
								width: "100%",
								color: "white",
							}}>
							Add
						</Button>
					</Grid>
				</Grid>
			</FormControl>
		</React.Fragment>
	);
}

export default AddVariableComp;
