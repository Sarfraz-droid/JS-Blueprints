import {
  Divider,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useMemo } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import {
  blue,
  cyan,
  green,
  orange,
  purple,
  yellow,
} from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux/store";
import { addCard } from "../../../redux/features/node.slice";
import { CardType } from "@workspace/lib/types/Card";
import PredefinedComponents from "../../../predefined_components";
import { nanoid } from "nanoid";

function MultiLevelMenu({
  open,
  onClose,
  anchorPosition,
  id,
  MenuListProps,
  anchorEl,
}: {
  open: boolean;
  onClose: () => void;
  anchorPosition?: { top: number; left: number } | undefined;
  id: string;
  MenuListProps?: any;
  anchorEl?: any;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const AccordionData = useMemo(
		() => [
			{
				id: nanoid(),
				type: "string",
				title: "String Functions",
				backgroundColor: green[500],
				data: Object.keys(PredefinedComponents).filter((key) =>
					key.startsWith("string")
				),
				onClick: (item: string) => {
					dispatch(
						addCard({
							type: CardType[item as keyof typeof PredefinedComponents],
						})
					);
					onClose();
				},
			},
			// {
			//   id: nanoid(),
			//   type: "basic",
			//   title: "Basic Operators",
			//   backgroundColor: blue[500],
			//   data: Object.keys(PredefinedComponents).filter((key) =>
			//     key.startsWith("basic")
			//   ),
			//   onClick: (item: string) => {
			//     dispatch(
			//       addCard({
			//         type: CardType[item as keyof typeof PredefinedComponents],
			//       })
			//     );
			//     onClose();
			//   },
			// },
			{
				id: nanoid(),
				type: "input",
				title: "Input Operators",
				backgroundColor: orange[500],
				data: Object.keys(PredefinedComponents).filter((key) =>
					key.startsWith("input")
				),
				onClick: (item: string) => {
					dispatch(
						addCard({
							type: CardType[item as keyof typeof PredefinedComponents],
						})
					);
					onClose();
				},
			},
			{
				id: nanoid(),
				type: "number",
				title: "Number Functions",
				backgroundColor: purple[500],
				data: Object.keys(PredefinedComponents).filter((key) => {
					return key.startsWith("number");
				}),
				onClick: (item: string) => {
					dispatch(
						addCard({
							type: CardType[item as keyof typeof PredefinedComponents],
						})
					);
					onClose();
				},
			},
			{
				id: nanoid(),
				type: "condition",
				title: "Conditionals",
				backgroundColor: cyan[800],
				data: Object.keys(PredefinedComponents).filter((key) =>
					key.startsWith("condition")
				),
				onClick: (item: string) => {
					dispatch(
						addCard({
							type: CardType[item as keyof typeof PredefinedComponents],
						})
					);
					onClose();
				},
			},
			{
				id: nanoid(),
				type: "loop",
				title: "Loops",
				backgroundColor: orange[800],
				data: Object.keys(PredefinedComponents).filter((key) =>
					key.startsWith("loops")
				),
				onClick: (item: string) => {
					dispatch(
						addCard({
							type: CardType[item as keyof typeof PredefinedComponents],
						})
					);
					onClose();
				},
			},
		],
		[]
	);

  const MenuData = useMemo(
    () => [
      {
        id: nanoid(),
        type: "basic",
        title: "Basic Operators",
        backgroundColor: blue[500],
        data: Object.keys(PredefinedComponents).filter((key) =>
          key.startsWith("basic")
        ),
        onClick: (item: string) => {
          dispatch(
            addCard({
              type: CardType[item as keyof typeof PredefinedComponents],
            })
          );
          onClose();
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Menu
        open={open}
        anchorReference={anchorPosition ? "anchorPosition" : "anchorEl"}
        anchorPosition={anchorPosition}
        id={id}
        onClose={onClose}
        MenuListProps={MenuListProps}
        anchorEl={anchorEl}
        PaperProps={{
          style: {
            maxHeight: 500,
            width: 300,
            padding: 5,
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
        sx={{
          my: 0,
        }}>
        {/* <TextField
          id="standard-basic"
          variant="filled"
          placeholder="Enter your term "
          label="Search"
          fullWidth
          size="small"
          sx={{
            border: "none",
            mb: 2,
          }}
        />
        <Divider /> */}
        {/* <MenuItem>Hello</MenuItem> */}
        <Stack spacing={1}>
          {AccordionData.map((item, index) => (
            <Accordion elevation={0} disableGutters>
              <AccordionSummary
                aria-controls={`panel-${item.id}-content`}
                id={`panel-${item.id}-header`}
                sx={{
                  backgroundColor: item.backgroundColor,
                  borderRadius: 2,
                  color: "white",
                }}
                expandIcon={
                  <ExpandMoreIcon
                    sx={{
                      color: "white",
                    }}
                  />
                }>
                <Typography>{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                {item.data.map((_, index) => (
                  <MenuItem
                    onClick={() => {
                      item.onClick(_);
                    }}>
                    {_.replace(item.type, "").replace(/[^a-z0-9]/gi, "")}
                  </MenuItem>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}

          <MenuItem
            onClick={() => {
              dispatch(
                addCard({
                  type: CardType.input,
                })
              );
              onClose();
            }}>
            Custom Operation
          </MenuItem>

          {MenuData.map((item, index) => (
            <React.Fragment>
              {item.data.map((_, index) => (
                <MenuItem
                  onClick={() => {
                    item.onClick(_);
                  }}>
                  {_.replace(item.type, "").replace(/[^a-z0-9]/gi, "")}
                </MenuItem>
              ))}
            </React.Fragment>
          ))}
        </Stack>
      </Menu>
    </React.Fragment>
  );
}

export default MultiLevelMenu;
