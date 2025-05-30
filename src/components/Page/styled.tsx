import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const PageWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== "bgcolor",
})<{ bgcolor?: string }>(({ bgcolor }) => ({
	width: "100vw",
	padding: "0px 16px", // mobile default
	display: "flex",
	marginBottom: "16px",

	justifyContent: "center",
	backgroundColor: bgcolor || "transparent",
	["@media (min-width: 768px)"]: {
		padding: "0px 32px",
		marginBottom: "32px",
	},
	["@media (min-width: 1024px)"]: {
		padding: "0px 64px",
		marginBottom: "64px",
	},
}));

export const PageContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		width: "100%",
		maxWidth: "1280px",
		display: "flex",
		alignItems: "center",
		gap: "32px",
	}));

export const FlexContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		width: "100%",
		display: "flex",
		gap: "8px", // mobile default
		["@media (min-width: 480px)"]: {
			gap: "16px",
		},
		["@media (min-width: 768px)"]: {
			gap: "24px",
		},
		["@media (min-width: 1024px)"]: {
			gap: "32px",
		},
	}));

export const PageHeaderContainer: StyledComponent<
	BoxProps & { theme?: Theme }
> = styled(Box)(() => ({
	position: "relative",
	zIndex: "1",
	display: "flex",
	alignItems: "center",
	flex: "1",
	gap: "16px",
	flexDirection: "column",
	maxWidth: "", // mobile default
	justifyContent: "center",
	["@media (min-width: 1024px)"]: {
		maxWidth: "1280px",
	},
}));

export const PageHeaderWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		position: "relative",
		padding: "64px 16px", // mobile default
		justifyContent: "Center",
		alignItems: "center",
		width: "100%",
		backgroundSize: "cover",
		backgroundImage: "url('/images/new_hero.jpg')",
		backgroundPosition: "center",
		height: "max-content",
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
			padding: "96px 120px",
		},
	}));
