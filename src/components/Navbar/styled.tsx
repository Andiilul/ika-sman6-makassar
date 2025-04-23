import { Box, styled, BoxProps } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";

export const NavbarContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		maxWidth: "1720px",
	}));

export const NavbarWrapper: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		padding: "12px 24px",
		color: "white",
		display: "flex",
		top: "0",
		position:"sticky",
		width: "100vw",
		overflowX: "hidden",
		zIndex: "100",
		userSelect: "none",
		justifyContent: "center",
	}));

export const NavbarMenuList: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		display: "flex",
		gap: "24px",
	}));

export const NavItem: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(() => ({}));
