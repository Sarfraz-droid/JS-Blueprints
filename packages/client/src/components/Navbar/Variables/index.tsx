import { Button, Grid, Menu, MenuItem, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AddVariableComp from "./AddVariableComp";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { createVariable } from "../../../redux/features/variables.slice";
import VariableList from "./VariableList";

function Variables() {
	const dispatch = useDispatch();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAddVariable = ({
		type,
		name,
	}: {
		type: string;
		name: string;
	}) => {
		dispatch(
			createVariable({
				type: type,
				name: name,
			})
		);
	};

	return (
		<React.Fragment>
			<Button
				sx={{
					color: "secondary.main",
				}}
				aria-controls="variables-menu"
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}>
				Variables
			</Button>
			<Menu
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				PaperProps={{
					style: {
						width: 400,
					},
				}}>
				<Box
					sx={{
						maxHeight: 400,
						minHeight: 300,
						width: 400,
						padding: 0,
						paddingTop: 0,
						paddingBottom: 0,
					}}>
					<VariableList />
				</Box>
				<Box
					sx={{
						width: 400,
					}}>
					<AddVariableComp onAddVariable={handleAddVariable} />
				</Box>
			</Menu>
		</React.Fragment>
	);
}

export default Variables;
