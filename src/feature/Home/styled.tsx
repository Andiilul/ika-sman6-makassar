"use client";

import {
	Box,
	styled,
	BoxProps,
	CardActionArea,
	CardActionAreaProps,
} from "@mui/material";
import { Theme, alpha } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const HeroContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		position: "relative",
		zIndex: "1",
		display: "flex",
		flex: "1",
		gap: "16px", // default
		flexDirection: "column",
		maxWidth: "100%",
		justifyContent: "center",

		["@media (min-width: 768px)"]: {
			gap: "64px",
		},
		["@media (min-width: 1024px)"]: {
			maxWidth: "1280px",
		},
	}));

export const HeroWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		position: "relative",
		padding: "64px 16px", // default mobile
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		backgroundSize: "cover",
		backgroundImage: "url('/images/image.jpg')",
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

		["@media (min-width: 768px)"]: {
			padding: "32px 32px",
		},
		["@media (min-width: 1024px)"]: {
			padding: "120px 64px",
		},
	}));

export const HeroCardWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "grid",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
		justifyContent: "flex-end",
		gap: "4px", // default
		zIndex: 2,
		["@media (min-width: 768px)"]: {
			gap: "8px",
		},
		["@media (min-width: 1024px)"]: {
			gap: "16px",
		},
	}));

export const HeroCardContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		padding: "12px 0px",
		width: "100%",
		overflowX: "auto",
		overflowY: "visible",
		flexDirection: "row",
		justifyContent: "flex-start",
		gap: "4px", // default
		zIndex: 2,
		scrollbarWidth: "thin",

		["@media (min-width: 768px)"]: {
			gap: "8px",
		},
		["@media (min-width: 1024px)"]: {
			gap: "16px",
		},
	}));

export const HeroCard: StyledComponent<
	CardActionAreaProps & { theme?: Theme }
> = styled(CardActionArea)(({ theme }) => ({
	display: "flex",
	minWidth: "280px",
	minHeight: "120px",
	gap: "16px",
	backgroundColor: alpha(theme.palette.background.paper, 0.5),
	borderRadius: "8px",
	padding: "4px", // default
	transition: "transform 0.3s ease-in-out",
	"&:hover": {
		transform: "translateY(-4px)",
	},
	["@media (min-width: 768px)"]: {
		padding: "8px",
	},
	["@media (min-width: 1024px)"]: {
		padding: "16px",
	},
}));

export const AboutSection: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "grid",
		gap: "16px",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
	}));

export const JoinUsWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		gap: "16px",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
	}));

export const ActivityWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "64px 0px",
		alignItems: "center",
		width: "100%",
		gap: "64px",
	}));

export const ActivityContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		width: "100%",
	}));

export const ActivityContentBox: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		flex: "1",
	}));

export const ActivityContent: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		padding: "64px",
		height: "350px",
		justifyContent: "space-between",
	}));
