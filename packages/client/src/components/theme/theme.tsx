import { blue, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
	palette: {
		// mode: "dark",
		primary: {
			main: blue[400],
		},
		secondary: {
			main: grey[800],
		},
	},
	components: {
		MuiButton: {
			defaultProps: {},
			styleOverrides: {
				root: ({ ownerState, theme }) => ({
					borderRadius: ownerState.style?.borderRadius || 12,
					boxShadow: "none",
				}),
			},
		},
	},
});
