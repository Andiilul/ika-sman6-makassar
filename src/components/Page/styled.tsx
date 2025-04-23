import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const PageWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== "bgcolor",
})<{ bgcolor?: string }>(({ bgcolor }) => ({
	width: "100vw",
	padding: "0px 120px",
	display: "flex",
	justifyContent: "center",
	backgroundColor: bgcolor || "transparent",
	["@media (max-width: 1024px)"]: {
		padding: "0px 32px",
	},
	["@media (max-width: 640px)"]: {
		padding: "0px 16px",
	},
}));

export const PageContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		width: "100%",
		maxWidth: "1980px",
		display: "flex",
		alignItems: "center",
		gap: "32px",
	}));
export const FlexContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		width: "100%",
		display: "flex",
		gap: "32px",
		["@media (max-width: 1024px)"]: {
			gap: "24px",
		},
		["@media (max-width: 640px)"]: {
			gap: "16px",
		},
		["@media (max-width: 480px)"]: {
			gap: "8px",
		},
	}));

	export const PageHeaderContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		position: "relative",
		zIndex: "1",
		display: "flex",
		alignItems:"center",
		flex: "1",
		gap: "16px",
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

export const PageHeaderWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		position: "relative",
		padding: "96px 120px",
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