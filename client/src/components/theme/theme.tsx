import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: blue[400],
    },
    secondary: {
      main: grey[800],
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: ({ ownerState, theme }) => ({
          borderRadius: "8px",
          boxShadow: "none",
          color:
            ownerState.variant === "contained"
              ? "white"
              : theme.palette.secondary.main,
          "&:hover": {
            boxShadow: theme.shadows[2],
          },
        }),
      },
    },
  },
});
