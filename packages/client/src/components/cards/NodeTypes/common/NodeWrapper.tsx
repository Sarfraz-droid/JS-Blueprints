import { Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CardInterface } from "@workspace/lib/types/Card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { DeleteNode } from "../../../../redux/features/node.slice";
import { deleteEdges } from "../../../../redux/features/edge.slice";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { DuplicateNodes } from "../../../../redux/functions/duplicate.action";
import useEditor from "../../../../hooks/useEditor";
import { InfoOutlined } from "@mui/icons-material";

function NodeWrapper({
	children,
	card,
}: {
	children: React.ReactNode;
	card: CardInterface;
}) {
	const { onNodeDoubleClick } = useEditor();

	const [ContextMenu, setContextMenu] = useState<{
		mouseX: number;
		mouseY: number;
	} | null>(null);

	const dispatch = useDispatch<AppDispatch>();

	const handleContextMenu = (event: React.MouseEvent) => {
		event.preventDefault();
		setContextMenu(
			ContextMenu === null
				? {
						mouseX: event.clientX + 2,
						mouseY: event.clientY - 6,
				  }
				: null
		);
	};

	const handleClose = () => {
		setContextMenu(null);
	};

	return (
		<div onContextMenu={handleContextMenu}>
			{children}
			<Menu
				open={ContextMenu !== null}
				anchorReference="anchorPosition"
				anchorPosition={
					ContextMenu
						? {
								top: ContextMenu.mouseY,
								left: ContextMenu.mouseX,
						  }
						: undefined
				}
				onClose={handleClose}>
				<MenuItem
					onClick={(e) => {
						onNodeDoubleClick(e, card);
						handleClose();
					}}>
					<Stack direction={"row"} spacing={1}>
						<InfoOutlined />
						<Typography>Info</Typography>
					</Stack>
				</MenuItem>
				<MenuItem
					onClick={() => {
						dispatch(
							DuplicateNodes({
								card: card,
							})
						);
					}}>
					<Stack direction={"row"} spacing={1}>
						<ContentCopyIcon />
						<Typography
							sx={{
								fontWeight: 500,
							}}>
							Duplicate
						</Typography>
					</Stack>
				</MenuItem>
				<MenuItem
					onClick={() => {
						dispatch(DeleteNode(card));
						dispatch(deleteEdges(card.id));
						handleClose();
					}}>
					<Stack color={"red"} direction={"row"} spacing={1}>
						<DeleteForeverIcon />
						<Typography
							sx={{
								fontWeight: 500,
							}}>
							Delete
						</Typography>
					</Stack>
				</MenuItem>
			</Menu>
		</div>
	);
}

export default NodeWrapper;
