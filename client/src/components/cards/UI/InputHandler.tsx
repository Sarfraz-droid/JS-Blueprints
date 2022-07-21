import { MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../../../redux/functions/UpdateData.action";
import { AppDispatch } from "../../../redux/store";
import { ICardIO, Parameters } from "../../../types/Card";
import { Input } from "../../commons/UI/Input";

function InputHandler({
  item,
  onChange,
}: {
  item: ICardIO;
  onChange: (value: any) => void;
}) {
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
            onChange={(e) => {
              onChange(e.target.value);
            }}
            value={item.value}
            sx={{
              p: 0,
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
            className="font-mono rounded-sm border-1 p-0"
            style={{
              fontSize: "0.5rem",
            }}
            onChange={(e) => {
              onChange(parseInt(e.target.value));
            }}
            value={item.value}
            sx={{
              p: 0,
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
              width: "100%",
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
  }
}

export default InputHandler;
