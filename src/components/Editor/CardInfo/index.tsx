import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newIOP } from "../../../redux/functions/newIOP";
import { UpdateData } from "../../../redux/functions/UpdateData";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  CardData,
  CardInterface,
  ICardIO,
  ICardIOP,
  Parameters,
} from "../../../types/Card";
import FormHandler from "../../formHandler/formHandler";
import Trash from "../../../assets/svg/Trash.svg";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { red } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";
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
                        ...activeCard.filter((i) => i.id !== oldData.id),
                        newData,
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
              }}
            >
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
        }}
      >
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
        }}
      >
        {Object.values(Parameters).map((item, index) => (
          <MenuItem
            onClick={() => {
              console.log("newIOP");
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
            }}
          >
            {item}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

function CardInfo() {
  const activeNode = useSelector((state: RootState) => state.activeNode);
  const activeCard = useSelector((state: RootState) => {
    const card = state.nodes.find((card) => card.id === activeNode.activeNode);

    return card;
  });
  const dispatch = useDispatch<AppDispatch>();

  const data = [
    {
      name: "id",
      value: activeCard?.id,
      editable: false,
    },
    {
      name: "type",
      value: activeCard?.type,
      editable: false,
    },
    {
      name: "label",
      value: activeCard?.data.label,
      editable: true,
    },
  ];

  console.log(activeCard);

  if (!activeCard) return null;

  console.log(Object.values(Parameters));

  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Grid direction={"column"} gap={5} columnSpacing={5}>
        {data.map((item, index) => (
          <Grid item container>
            <Grid item xs={3} alignSelf="center">
              <Typography>{item.name}</Typography>
            </Grid>
            <Grid item xs={9}>
              {item.editable ? (
                <TextField
                  variant="filled"
                  value={(activeCard?.data as any)[item.name]!}
                  sx={{
                    "& input": {
                      padding: "0.5rem",
                    },
                  }}
                  onChange={(e) => {
                    console.log(e.target.value);
                    dispatch(
                      UpdateData({
                        data: {
                          [item.name]: e.target.value,
                        },
                        id: activeCard?.id,
                      })
                    );
                  }}
                />
              ) : (
                <Typography className="self-center opacity-70 italic">
                  {activeCard?.id}
                </Typography>
              )}
            </Grid>
          </Grid>
        ))}

        <div>
          <Typography
            variant="h6"
            sx={{
              my: 2,
              fontWeight: 700,
            }}
          >
            Input
          </Typography>
          <div className="p-3">
            <CardMenu
              activeCard={activeCard.data.input}
              type="input"
              id={activeCard?.id}
            />
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            sx={{
              my: 2,
              fontWeight: 700,
            }}
          >
            Parameters
          </Typography>
          <div className="p-3">
            <CardMenu
              activeCard={activeCard.data.parameters}
              id={activeCard?.id}
              type="parameters"
            />
          </div>
        </div>
        <div>
          <Typography
            variant="h6"
            sx={{
              my: 2,
              fontWeight: 700,
            }}
          >
            Output
          </Typography>
          <div className="p-3">
            <CardMenu
              activeCard={activeCard.data.output}
              id={activeCard?.id}
              type="output"
            />
          </div>
        </div>
      </Grid>
    </Box>
  );
}

export default CardInfo;
