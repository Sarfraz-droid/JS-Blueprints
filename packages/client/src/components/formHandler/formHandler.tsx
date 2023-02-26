import { InputBase, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import { ICardIO } from "@workspace/lib/types/Card";

interface IProps {
	data: ICardIO;
	onChange(oldData: ICardIO, newData: ICardIO): void;
}

function FormHandler(props: IProps) {
	return (
		<React.Fragment>
			<Typography
				sx={{
					width: 100,
					fontWeight: 600,
					color: red[600],
				}}
				alignSelf={"center"}>
				{props.data.type}
			</Typography>
			<InputBase
				value={props.data.name}
				sx={{
					px: 2,
				}}
				placeholder="Value"
				onChange={(e) => {
					props.onChange(props.data, {
						...props.data,
						name: e.target.value,
					});
				}}
			/>
		</React.Fragment>
	);
}

export default FormHandler;
