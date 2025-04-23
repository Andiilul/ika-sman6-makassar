import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

export const NotFoundWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		position: "relative",
		padding: "64px 96px",
		height:"100vh",
		maxHeight: "720px",
		justifyContent: "Center",
		// backgroundColor:"yellow",
		alignItems:"center"
	}));

export const 	NotFoundContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		maxWidth: "1980px",
		alignItems: "center",
		justifyContent: "center",
	}));