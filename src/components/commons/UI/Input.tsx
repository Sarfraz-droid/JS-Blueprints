import React, { InputHTMLAttributes } from "react";
import { alpha, styled } from "@mui/material/styles";
import { InputBase } from "@mui/material";

export const Input = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    fontSize: "0.5rem",
    border: `1px solid ${alpha(theme.palette.secondary.main, 0.5)}`,
    padding: "0.2rem",
    borderRadius: "0.2rem",
    "&:focus": {
      borderColor: theme.palette.primary.main,
    },
  },
}));
