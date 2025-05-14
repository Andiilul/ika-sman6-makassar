"use client";

import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

export const ActivityContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		justifyContent: "center",
		flexDirection: "column",
		gap: "32px",
		alignItems: "flex-start",
		width: "100%",
	}));

export const ActivityGridContainer: StyledComponent<
	BoxProps & { theme?: Theme }
> = styled(Box)(() => ({
	display: "grid",
	gridTemplateColumns: "repeat(1, 1fr)", // mobile default
	gap: "16px",
	width: "100%",
	position: "relative",

	// Responsive Breakpoints
	["@media (min-width: 768px)"]: {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
	["@media (min-width: 1024px)"]: {
		gridTemplateColumns: "repeat(3, 1fr)",
	},
}));
export const ActivityDetailWrapper = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: "16px",

	"@media (min-width: 768px)": {
		gap: "24px",
	},

	"@media (min-width: 1024px)": {
		flexDirection: "row",
		gap: "32px",
		alignItems: "flex-start",
	},
}));
export const ActivityDetailContainer = styled(Box)(() => ({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	gap: "16px",

	"@media (min-width: 768px)": {
		gap: "24px",
	},

	"@media (min-width: 1024px)": {
		gap: "32px",
		width: "60%",
	},
}));

export const ActivityImageContainer = styled(Box)(() => ({
	width: "100%",
	position: "relative",
	borderRadius: "8px",
	overflow: "hidden",
	aspectRatio: "16 / 9",

	"@media (min-width: 1024px)": {
		width: "40%",
		height: "360px",
		aspectRatio: "auto",
	},
}));
