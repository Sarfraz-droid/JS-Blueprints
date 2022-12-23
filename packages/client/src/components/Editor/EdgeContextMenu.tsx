import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { Menu, MenuItem } from "@mui/material";
import { deleteActiveEdge } from "../../redux/features/active.slice";
import { removeEdgeById } from "../../redux/features/edge.slice";
import useEditor from "../../hooks/useEditor";

function EdgeContextMenu() {
	const activeEdge = useSelector((state: RootState) => state.active.Edge);
	const dispatch = useDispatch();

	const { deleteEdgeById } = useEditor();

	console.log(activeEdge);
	return (
		<React.Fragment>
			<Menu
				open={activeEdge !== null}
				anchorReference="anchorPosition"
				anchorPosition={
					activeEdge !== null
						? { top: activeEdge.position.y, left: activeEdge.position.x }
						: undefined
				}
				onClose={() => {
					dispatch(deleteActiveEdge());
				}}>
				<MenuItem
					sx={{
						color: "red",
					}}
					onClick={() => {
						if (activeEdge?.edge.id !== undefined)
							deleteEdgeById(activeEdge.edge.id);
						dispatch(deleteActiveEdge());
					}}>
					Delete
				</MenuItem>
			</Menu>
		</React.Fragment>
	);
}

export default EdgeContextMenu;
