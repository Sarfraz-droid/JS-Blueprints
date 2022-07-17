import { Menu, MenuItem, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { CardInterface } from "../../../../types/Card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store";
import { DeleteNode } from "../../../../redux/features/NodeSlice";
import { DeleteEdges } from "../../../../redux/features/edgeSlice";

function NodeWrapper({
  children,
  card,
}: {
  children: React.ReactNode;
  card: CardInterface;
}) {
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
          ContextMenu !== null
            ? {
                top: ContextMenu.mouseY,
                left: ContextMenu.mouseX,
              }
            : undefined
        }
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            dispatch(DeleteNode(card));
            dispatch(DeleteEdges(card.id));
            handleClose();
          }}
        >
          <Stack color={"red"} direction={"row"} spacing={1}>
            <DeleteForeverIcon />
            <Typography
              sx={{
                fontWeight: 500,
              }}
            >
              Delete
            </Typography>
          </Stack>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default NodeWrapper;
