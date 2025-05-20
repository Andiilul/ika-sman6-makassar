"use client";

import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const AboutContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		gap: "64px",
		padding: "64px 0",
	}));

export const GoalsWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flex: "1",
		flexDirection: "column",
		gap: "32px",

		["@media (min-width: 1024px)"]: {
			gap: "64px",
		},
		["@media (min-width: 768px)"]: {
			gap: "48px",
		},
		// backgroundColor: "white",
	}));
export const GoalsContainer = styled(Box, {
	shouldForwardProp: (prop) => prop !== "direction",
})<{ direction?: "row" | "row-reverse" }>(({ direction = "row" }) => ({
	display: "flex",
	flexDirection: direction,
	gap: "12px",
	width: "100%",
	alignItems: "center",
}));

export const GoalsContent: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flex: "1",
		flexDirection: "column",
		gap: "64px",
		["@media (min-width: 1024px)"]: {},
		["@media (min-width: 768px)"]: {},
		// backgroundColor: "white",
	}));
export const GoalsDivider: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		position: "relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",

		["@media (min-width: 1024px)"]: {
			height: "400px",
			width: "160px",
		},
		["@media (min-width: 768px)"]: {
			minHeight: "100%",
			width: "120px",
		},
	}));
