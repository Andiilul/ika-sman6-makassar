"use client";

import {
	Box,
	styled,
	BoxProps,
	CardActionAreaProps,
	CardActionArea,
} from "@mui/material";
import { alpha, Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const AlumniGridContainer: StyledComponent<
	BoxProps & { theme?: Theme }
> = styled(Box)(() => ({
	display: "grid",
	gap: "4px",

	gridTemplateColumns: "repeat(2, 1fr)", // mobile default
	width: "100%",
	position: "relative",

	// Responsive Breakpoints
	["@media (min-width: 768px)"]: {
		gridTemplateColumns: "repeat(3, 1fr)",
		gap: "8px",
	},
	["@media (min-width: 1024px)"]: {
		gridTemplateColumns: "repeat(4, 1fr)",
		gap: "16px",
	},
}));

export const AlumniCardWrapper = styled(CardActionArea)<CardActionAreaProps>(
	({ theme }) => ({
		display: "flex",
		gap: "8px",
		backgroundColor: alpha(theme.palette.background.paper, 1),
		borderRadius: "8px",
		padding: "4px",
		transition: "transform 0.2s",
		position: "relative",
		overflow: "hidden",

		// Mobile (default): aspect-ratio dengan maxHeight
		aspectRatio: "4 / 5",
		height: "auto",
		maxHeight: "360px",

		"@media (min-width: 768px)": {
			aspectRatio: "auto",
			height: "300px",
			maxHeight: "none",
			padding: "8px",
			gap: "12px",
		},
		"@media (min-width: 1024px)": {
			height: "360px",
			padding: "16px",
			gap: "16px",
		},
	})
);
export const DirectoryContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		width: "100%",
		flexDirection: "column",
		gap: "16px",
		borderRadius: "8px",
		padding: "4px", // mobile default
		transition: "transform 0.2s",
		"&:hover": {},

		["@media (min-width: 768px)"]: {
			padding: "8px",
		},
		["@media (min-width: 1024px)"]: {
			// padding: "16px",
		},
	}));

export const AlumniDetailWrapper = styled("div")(() => ({
	display: "flex",
	gap: "32px",
	flexDirection: "column",
	padding: "32px 0",
	width: "100%",
	"@media (min-width: 1024px)": {
		gap: "128px",
		padding: "128px 0",
		flexDirection: "row",
	},
	["@media (min-width: 768px)"]: {
		padding: "64px 0",
		gap: "64px",
	},
}));

export const AlumniDetailContainer = styled("div")(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "16px",
	width: "100%",
}));
