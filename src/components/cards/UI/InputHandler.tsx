import { TextField, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateData } from "../../../redux/functions/UpdateData";
import { AppDispatch } from "../../../redux/store";
import { ICardIO, Parameters } from "../../../types/Card";
import { Input } from "../../commons/UI/Input";

function InputHandler({
  item,
  onChange,
}: {
  item: ICardIO;
  onChange: (value: string) => void;
}) {
  switch (item.type) {
    case Parameters.string:
      return (
        <React.Fragment>
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "0.3rem",
            }}
          >
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
  }

  return <React.Fragment></React.Fragment>;
}

export default InputHandler;
