import {
	MenuItem,
	Select,
	TextField,
	Typography,
	useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../../../redux/functions/updateData.action";
import { AppDispatch } from "../../../redux/store";
import { ICardIO, Parameters } from "@workspace/lib/types/Card";
import { Input } from "../../commons/UI/Input";

function InputHandler({
	item,
	onChange,
}: {
	item: ICardIO;
	onChange: (value: any) => void;
}) {
	const theme = useTheme();

	const [Boolean, setBoolean] = useState(false);
	switch (item.type) {
		case Parameters.string:
			return (
				<React.Fragment>
					<Typography
						sx={{
							textAlign: "left",
							fontSize: "0.3rem",
						}}>
						{item.name}
					</Typography>
					<Input
						id={`${item.id}__input`}
						className="font-mono rounded-sm border-1 p-0"
						style={{
							fontSize: "0.5rem",
						}}
						placeholder={item.name}
						onChange={(e) => {
							onChange(e.target.value);
						}}
						inputProps={{
							style: {
								borderRadius: 2,
								border: `1px dotted ${theme.palette.primary.main}`,
							},
						}}
						value={item.value}
						sx={{
							p: 0,
							width: 50,
						}}
					/>
				</React.Fragment>
			);
		case Parameters.number:
			return (
				<React.Fragment>
					<Typography
						sx={{
							textAlign: "left",
							fontSize: "0.3rem",
						}}>
						{item.name}
					</Typography>
					<Input
						id={`${item.id}__input`}
						type="number"
						style={{
							fontSize: "0.5rem",
						}}
						placeholder={item.name}
						onChange={(e) => {
							onChange(parseInt(e.target.value));
						}}
						value={item.value}
						inputProps={{
							style: {
								borderRadius: 2,
								border: `1px dotted ${theme.palette.primary.main}`,
							},
						}}
						sx={{
							p: 0,
							width: 50,
						}}
					/>
				</React.Fragment>
			);

		case Parameters.boolean:
			return (
				<React.Fragment>
					<Typography
						sx={{
							textAlign: "left",
							fontSize: "0.3rem",
						}}>
						{item.name}
					</Typography>
					<Select
						labelId={`${item.id}__input`}
						id={`${item.id}__input`}
						style={{
							padding: "0.1rem",
						}}
						onClick={(e) => {
							console.log("Hello");
							e.stopPropagation();
							setBoolean(!Boolean);
						}}
						open={Boolean}
						sx={{
							p: 0,
							fontSize: "0.5rem",
							border: 0,
							width: 60,
							"& .MuiInputBase-input": {
								p: 0.5,
								border: 0,
								paddingRight: "0.5rem",
							},
							"& .MuiOutlinedInput-root": {
								border: 0,
							},
							"& .MuiSvgIcon-root": {
								width: 15,
							},
							"& .MuiOutlinedInput-notchedOutline": {
								// border: 0.5,
							},
						}}
						onChange={(e) => {
							onChange(e.target.value === "true" ? true : false);
						}}
						value={item.value}>
						<MenuItem value={"true"}>True</MenuItem>
						<MenuItem value={"false"}>False</MenuItem>
					</Select>
				</React.Fragment>
			);

		default:
			return <div>Not Supported</div>;
	}
}

export default InputHandler;
