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
		display: "grid",
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
			gridTemplateColumns: "repeat(2, minmax(0, 1fr))", // default mobile
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
		backgroundImage: "url('/images/new_hero.jpg')",
		backgroundPosition: "center",
		"&::before": {
			content: '""',
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			backgroundColor: "rgba(0, 0, 0, 0.7)",
			zIndex: 1,
		},

		["@media (min-width: 768px)"]: {
			padding: "120px 64px",
			minHeight: "480px",
		},
		["@media (min-width: 1024px)"]: {
			padding: "120px 64px",
			height: "100vh",
			maxHeight: "720px",
			minHeight: "640px",
		},
	}));

export const HeroCardWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "none",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
		justifyContent: "flex-end",
		gap: "4px", // default
		zIndex: 2,
		["@media (min-width: 768px)"]: {
			gap: "8px",
		},
		["@media (min-width: 1024px)"]: {
			gap: "16px",
			display: "flex",
		},
	}));

export const HeroCardContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "grid",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
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
		gap: "8px",
		gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
		["@media (min-width: 1024px)"]: {
			gap: "32px",
		},
		["@media (min-width: 768px)"]: {
			gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
			gap: "16px",
		},
	}));

export const JoinUsWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(({ theme }) => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		gap: "16px",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
		background: `linear-gradient(to bottom, transparent, ${alpha(
			theme.palette.primary.main,
			0.1
		)})`,
	}));

export const ActivityWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		padding: "16px 0px",
		alignItems: "center",
		width: "100%",
		gap: "16px",
		["@media (min-width: 1024px)"]: {
			padding: "64px 0px",
			gap: "64px",
		},
		["@media (min-width: 768px)"]: {
			padding: "32px 0px",
			gap: "32px",
		},
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
		padding: "24px",
		gap: "32px",
		justifyContent: "space-between",
		["@media (min-width: 1024px)"]: {
			minHeight: "350px",
			padding: "48px",
		},
		["@media (min-width: 768px)"]: {
			padding: "36px",
		},
	}));
