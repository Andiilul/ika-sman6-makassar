import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

// Define the type for FooterContainer
export const FooterWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(({ theme }) => ({
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.primary,
		width: "100vw",
		padding: "16px", // mobile default
		display: "flex",
		boxShadow: "0px -1px 4px rgba(0, 0, 0, 0.25)",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
		["@media (min-width: 768px)"]: {
			padding: "32px",
		},
		["@media (min-width: 1024px)"]: {
			padding: "64px 64px",
		},
	}));
export const FooterContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "grid",
		maxWidth: "1280px",
		gridTemplateColumns: "repeat(1 , minmax(0,1fr))", // mobile default
		gap: "32px",
		["@media (min-width: 1024px)"]: {
			gridTemplateColumns: "repeat(2 , minmax(0,1fr))",
		},
	}));
export const FooterBox: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(() => ({
	gap: "12px",
}));

export const FooterLeft: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	FooterBox
)(() => ({
	display: "flex",
	flexDirection: "column",
}));

export const QuickLinks: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(() => ({
	display: "flex",
	flexDirection: "column",
	gap: "12px",
	fontWeight: "400",
	fontSize: "10px", // mobile default
	["@media (min-width: 768px)"]: {
		fontSize: "12px",
	},
	["@media (min-width: 1024px)"]: {
		fontSize: "14px",
	},
}));

export const FooterRight: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(FooterBox)(() => ({
		display: "grid",
		gridTemplateColumns: "repeat(2 , minmax(0,1fr))", // mobile default
	}));
