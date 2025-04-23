"use client";

import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const HeroContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		position: "relative",
		zIndex: "1",
		display: "flex",
		flex: "1",
		gap: "64px",
		flexDirection: "column",
		maxWidth: "1980px",
		justifyContent: "center",
		["@media (max-width: 1024px)"]: {
			maxWidth: "",
		},
		["@media (max-width: 640px)"]: {
			maxWidth: "",
		},
	}));

export const HeroWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		position: "relative",
		padding: "128px 120px",
		justifyContent: "Center",
		alignItems: "center",
		width: "100%",
		backgroundSize: "cover",
		backgroundImage: "url('/images/test-hero.webp')",
		backgroundPosition: "center",
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0, 0, 0, 0.6)",
			zIndex: 1,
		},

		["@media (max-width: 1024px)"]: {
			padding: "32px 32px",
		},
		["@media (max-width: 640px)"]: {
			padding: "64px 16px",
			height: "max-content",
		},
	}));
