import React from "react";
import { useDispatch } from "react-redux";
import { newIOP } from "../../../redux/functions/new_iop.action";
import { UpdateData } from "../../../redux/functions/updateData.action";
import { AppDispatch } from "../../../redux/store";
import { ICardIO, Parameters } from "@workspace/lib/types/Card";
import FormHandler from "../../formHandler/formHandler";
import { Button, IconButton, Menu, MenuItem, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";

const notAdd = [Parameters.variable];

const CardMenu = ({
	activeCard,
	type,
	id,
}: {
	activeCard: Array<ICardIO>;
	type: string;
	id: string;
}) => {
	const dispatch = useDispatch<AppDispatch>();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<React.Fragment>
			{activeCard &&
				activeCard.map((item: ICardIO, index) => (
					<Stack direction={"row"} justifyContent={"flex-start"}>
						<FormHandler
							data={item}
							onChange={(oldData, newData) => {
								if (!activeCard) return console.log("no active node");
								dispatch(
									UpdateData({
										data: {
											[type]: [
												...activeCard.map((_) =>
													_.id === newData.id ? newData : _
												),
											],
										},
										id: id,
									})
								);
							}}
						/>
						<IconButton
							onClick={() => {
								console.log({
									data: {
										[type]: [...activeCard.filter((i) => i.id !== item.id)],
									},
								});

								dispatch(
									UpdateData({
										data: {
											[type]: [...activeCard.filter((i) => i.id !== item.id)],
										},
										id: id,
									})
								);
							}}
							sx={{
								color: red[600],
							}}>
							<DeleteIcon />
						</IconButton>
					</Stack>
				))}
			<Button
				id="basic-button"
				aria-controls={open ? "basic-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}
				onClick={handleClick}
				variant="contained"
				sx={{
					borderRadius: "0.3rem",
					my: 2,
				}}>
				Add
				<AddIcon />
			</Button>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					"aria-labelledby": "basic-button",
				}}>
				{Object.values(Parameters)
					.filter((state) => !notAdd.includes(state))
					.map((item, index) => (
						<MenuItem
							key={index}
							onClick={() => {
								dispatch(
									newIOP({
										type: type,
										field: item,
									})
								);
								handleClose();
							}}
							sx={(theme) => {
								return {
									"&:hover": {
										backgroundColor: theme.palette.primary.main,
										color: "white",
									},
								};
							}}>
							{item}
						</MenuItem>
					))}
			</Menu>
		</React.Fragment>
	);
};

export default CardMenu;
