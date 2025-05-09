"use client";

import { Box, styled, BoxProps, CardActionAreaProps, CardActionArea } from "@mui/material";
import { alpha, Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const AlumniGridContainer: StyledComponent<
	BoxProps & { theme?: Theme }
> = styled(Box)(() => ({
	display: "grid",
	gridTemplateColumns: "repeat(4, 1fr)",
	gap: "16px",
	width: "100%",
	position: "relative",

	// Responsive Breakpoints
	["@media (max-width: 1024px)"]: {
		gridTemplateColumns: "repeat(3, 1fr)",
	},
	["@media (max-width: 640px)"]: {
		gridTemplateColumns: "repeat(2, 1fr)",
	},
}));
export const AlumniCardWrapper: StyledComponent<
	CardActionAreaProps & { theme?: Theme }
> = styled(CardActionArea)(({ theme }) => ({
	display: "flex",
	minHeight: "360px",
	gap: "16px",
	backgroundColor: alpha(theme.palette.background.paper, 0.5),
	borderRadius: "8px",
	padding: "16px",
	transition: "transform 0.2s",
	"&:hover": {
	},
	["@media (max-width: 1024px)"]: {
		padding: "8px",
	},
	["@media (max-width: 640px)"]: {
		padding: "4px",
	},
}));

export const DirectoryContainer: StyledComponent<
	BoxProps & { theme?: Theme }
> = styled(Box)(() => ({
	display: "flex",
	width: "100%",
	flexDirection: "column",
	gap: "16px",
	borderRadius: "8px",
	padding: "16px",
	transition: "transform 0.2s",
	"&:hover": {
	},
	["@media (max-width: 1024px)"]: {
		padding: "8px",
	},
	["@media (max-width: 640px)"]: {
		padding: "4px",
	},
}));

