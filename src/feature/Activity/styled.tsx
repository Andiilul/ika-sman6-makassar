"use client";

import {
	Box,
	styled,
	BoxProps,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

export const ActivityContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		justifyContent: "center",
		flexDirection:"column",
		gap:"32px",
		alignItems: "flex-start",
		width: "100%",
	}));

	export const ActivityGridContainer: StyledComponent<
	BoxProps & { theme?: Theme }
> = styled(Box)(() => ({
	display: "grid",
	gridTemplateColumns: "repeat(3, 1fr)",
	gap: "16px",
	width: "100%",
	position: "relative",

	// Responsive Breakpoints
	["@media (max-width: 1024px)"]: {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	["@media (max-width: 640px)"]: {
		gridTemplateColumns: "repeat(1, 1fr)",
	},
}));