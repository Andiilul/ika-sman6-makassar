import {
	Box,
	styled,
	BoxProps,
	CardActionArea,
	CardActionAreaProps,
} from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const HeroWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		position: "relative",
		padding: "64px 96px",
		height: "100vh",
		maxHeight: "720px",
		justifyContent: "Center",
		alignItems: "center",
		width: "100%",
		backgroundSize: "cover",
		backgroundImage: "url('/assets/image-1.jpg')",
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

export const HeroContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		position: "relative",
		zIndex: "1",
		display: "flex",
		flex: "1",
		flexDirection: "column",
		maxWidth: "1980px",
		alignItems: "center",
		justifyContent: "center",
		["@media (max-width: 1024px)"]: {
			maxWidth: "",
		},
		["@media (max-width: 640px)"]: {
			maxWidth: "",
		},
	}));

export const HeroGrid: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(() => ({
	display: "grid",
	width: "100vw",
	gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
	padding: "0px 64px",
	maxWidth: "1440px",
	gap: "16px",
	["@media (max-width: 1024px)"]: {
		padding: "0 32px",
		gap: "8px",
	},
	["@media (max-width: 640px)"]: {
		padding: "0 4px",
		gap: "4px",
	},
}));

export const HeroCard: StyledComponent<
	CardActionAreaProps & { theme?: Theme }
> = styled(CardActionArea)(() => ({
	borderRadius: "4px",
	padding: "12px",
	display: "flex",
	["@media (max-width: 1024px)"]: {
		display: "flex",
	},
	["@media (max-width: 640px)"]: {},
}));