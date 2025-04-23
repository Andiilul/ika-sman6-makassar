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
		gap:"64px"
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
		// backgroundColor: "white",
	}));
export const GoalsDivider: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		position:"relative",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "160px",
		height: "400px",
	}));
