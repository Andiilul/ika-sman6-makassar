"use client";

import { Box, styled, BoxProps } from "@mui/material";
import { alpha, Theme } from "@mui/material/styles";
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
		marginTop:"32px",

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

export const TeamsWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		width: "100%",
		flexDirection: "column",
		gap: "12px", // default (mobile)

		["@media (min-width: 768px)"]: {
			gap: "24px",
		},
		["@media (min-width: 1024px)"]: {
			flexDirection: "row",
			gap: "36px",
		},
	}));

export const TeamsCardCurrent = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "24px",

	["@media (min-width: 1024px)"]: {
		border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
		backgroundColor: theme.palette.background.paper,

		padding: "12px",
	},
	["@media (min-width: 768px)"]: {
		padding: "24px",
	},
}));
export const TeamsGrid: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(() => ({
	display: "none",
	gap: "8px",
	["@media (min-width: 1024px)"]: {
		gap: "24px",
	},
	["@media (min-width: 768px)"]: {
		display: "grid",
		gridTemplateColumns: "repeat(2,minmax(0,1fr))",
		gap: "16px",
	},
}));
export const TeamsCard: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(({ theme }) => ({
	alignItems: "center",
	display: "flex",
	padding: "12px",
	minWidth: "360px",
	width: "100%",
	border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
	backgroundColor: theme.palette.background.paper,
	["@media (min-width: 1024px)"]: {},
	["@media (min-width: 768px)"]: {},
}));
