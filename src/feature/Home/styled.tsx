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

export const HeroCardWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "grid",
		gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
		justifyContent: "flex-end",
		gap: "16px",
		zIndex: 2,
		["@media (max-width: 1024px)"]: {
			gap: "8px",
		},
		["@media (max-width: 640px)"]: {
			gap: "4px",
		},
	}));
export const HeroCardContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		padding: "12px 0px",
		width: "100%", // ✅ ubah dari maxWidth jadi width penuh
		overflowX: "auto", // ✅ gunakan "auto" agar muncul scroll hanya saat perlu
		overflowY: "visible",
		flexDirection: "row",
		justifyContent: "flex-start", // ✅ agar urutan card muncul dari kiri
		gap: "16px",
		zIndex: 2,
		scrollbarWidth: "thin", // opsional untuk Firefox
		["@media (max-width: 1024px)"]: {
			gap: "8px",
		},
		["@media (max-width: 640px)"]: {
			gap: "4px",
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
	padding: "16px",
	transition: "transform 0.3s ease-in-out",
	"&:hover": {
		transform: "translateY(-4px)",
	},
	["@media (max-width: 1024px)"]: {
		padding: "8px",
	},
	["@media (max-width: 640px)"]: {
		padding: "4px",
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
		padding: "96px 0px ",
		alignItems: "center",
		width: "100%",
		gap:"64px"

	}));

export const ActivityContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		justifyContent: "center",
		alignItems: "flex-start",
		width: "100%",
	}));
export const ActivityContentBox: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(({}) => ({
		display: "flex",
		flexDirection: "column",
		flex: "1",
	}));
export const ActivityContent: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(({}) => ({
		display: "flex",
		flexDirection: "column",
		padding: "64px",
		height: "350px",
		justifyContent: "space-between",
	}));
