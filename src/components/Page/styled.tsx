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
