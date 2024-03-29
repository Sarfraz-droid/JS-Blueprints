import { Button } from "@mui/material";
import React, { useState } from "react";
import MultiLevelMenu from "./MultiLevelMenu";

function AddButton() {
	const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
	const open = Boolean(anchorEl);

	return (
		<React.Fragment>
			<Button
				id="add-menu-button"
				variant="contained"
				color="secondary"
				onClick={(e) => {
					setAnchorEl(e.currentTarget);
				}}
				aria-controls={open ? "add-menu" : undefined}
				aria-haspopup="true"
				aria-expanded={open ? "true" : undefined}>
				Add
			</Button>
			<MultiLevelMenu
				id="add-menu"
				open={open}
				MenuListProps={{
					"aria-labelledby": "add-menu-button",
				}}
				onClose={() => {
					setAnchorEl(null);
				}}
				anchorEl={anchorEl}
			/>
		</React.Fragment>
	);
}

export default AddButton;
