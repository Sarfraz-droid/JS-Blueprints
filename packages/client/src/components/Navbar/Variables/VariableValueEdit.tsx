import { MenuItem, Select, TextField } from "@mui/material";
import { Parameters } from "@workspace/lib/types/Card";
import { Variable } from "@workspace/lib/types/variables.types";
import React from "react";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { updateVariableValue } from "../../../redux/features/variables.slice";

function VariableValueEdit({ variable }: { variable: Variable }) {
	const dispatch = useDispatch<AppDispatch>();

	const onUpdateVariableValue = (
		value: string | number | boolean,
		variable: Variable
	) => {
		dispatch(
			updateVariableValue({
				id: variable.id,
				value: value,
			})
		);
	};

	switch (variable.type) {
		case Parameters.number:
			return (
				<TextField
					variant="filled"
					size="small"
					placeholder="Value"
					label="Value"
					type={"number"}
					value={variable.value}
					onChange={(e) => onUpdateVariableValue(e.target.value, variable)}
				/>
			);
		case Parameters.string:
			return (
				<TextField
					variant="filled"
					size="small"
					placeholder="Value"
					label="Value"
					value={variable.value}
					onChange={(e) => onUpdateVariableValue(e.target.value, variable)}
				/>
			);
		case Parameters.boolean:
			return (
				<React.Fragment>
					<Select
						variant="filled"
						size="small"
						placeholder="Value"
						label="Value"
						sx={{
							width: "100%",
						}}
						value={variable.value ? "1" : "0"}
						onChange={(e) => {
							onUpdateVariableValue(e.target.value == "1", variable);
						}}>
						<MenuItem value={"1"}>True</MenuItem>
						<MenuItem value={"0"}>False</MenuItem>
					</Select>
				</React.Fragment>
			);
	}

	return <React.Fragment></React.Fragment>;
}

export default VariableValueEdit;
