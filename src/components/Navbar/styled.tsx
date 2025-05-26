"use client";

import {
	Box,
	styled,
	BoxProps,
	Typography,
	TypographyProps,
	Switch,
	AccordionProps,
	AccordionDetails,
	Accordion,
} from "@mui/material";
import { alpha, Theme } from "@mui/material/styles";
import { StyledComponent } from "@emotion/styled";
import { motion } from "framer-motion";

// styled/NavbarWrapper.ts
export const NavbarWrapper = styled(motion(Box), {
	shouldForwardProp: (prop) => prop !== "variant",
})<{ variant: "initial" | "sticky" | "fixed" }>(({ theme, variant }) => ({
	position:
		variant === "fixed"
			? "fixed"
			: variant === "sticky"
			? "sticky"
			: "absolute",
	top: 0,
	zIndex: 100,
	width: "100vw",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "16px", // default mobile
	backgroundColor:
		variant === "sticky" || variant === "fixed"
			? alpha(theme.palette.background.paper, 0.8)
			: "transparent",
	backdropFilter: variant !== "initial" ? "blur(10px)" : "none",
	boxShadow: variant === "sticky" ? "0px 1px 4px rgba(0,0,0,0.2)" : "none",

	["@media (min-width: 768px)"]: {
		padding: "32px",
	},
	["@media (min-width: 1024px)"]: {
		padding: "12px 64px",
	},
}));

export const NavbarContainer: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		// backgroundColor: "white",
		width: "100%",
		maxWidth: "1280px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		gap: "32px",
	}));
export const NavActionBox: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		alignItems: "center",
		display: "flex",
		gap: "16px",
		["@media (min-width: 1024px)"]: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		["@media (min-width: 768px)"]: {},
	}));
export const LogoBox: StyledComponent<BoxProps & { theme?: Theme }> = styled(
	Box
)(() => ({
	display: "flex",
	alignItems: "center",
	gap: "8px",
	["@media (min-width: 1024px)"]: {
		position: "relative",
	},
	["@media (min-width: 768px)"]: {},
}));

export const NavbarMenuList: StyledComponent<BoxProps & { theme?: Theme }> =
	styled(Box)(() => ({
		gap: "16px",
		display: "none",
		["@media (min-width: 1024px)"]: {
			display: "flex",
		},
		["@media (min-width: 768px)"]: {},
	}));

export const NavItem: StyledComponent<TypographyProps & { theme?: Theme }> =
	styled(Typography)(({ theme }) => ({
		padding: "2px",
		color: "#ffffff",
		fontFamily: "Poppins",
		fontSize: "14px",
		fontWeight: "300",
		transition: "200ms",
		":hover": {
			color: theme.palette.secondary.main,
		},
	}));

export const ThemeSwitcher = styled(Switch)(({ theme }) => ({
	width: 62,
	height: 34,
	padding: 7,
	"& .MuiSwitch-switchBase": {
		margin: 0,
		padding: 0,
		transform: "translateX(6px)",
		"&.Mui-checked": {
			color: "#fff",
			transform: "translateX(22px)",
			"& .MuiSwitch-thumb:before": {
				backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
					"#fff"
				)}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
			},
			"& + .MuiSwitch-track": {
				opacity: 1,
				backgroundColor: "#aab4be",
				...theme.applyStyles("dark", {
					backgroundColor: "#8796A5",
				}),
			},
		},
	},
	"& .MuiSwitch-thumb": {
		backgroundColor: "#001e3c",
		width: 32,
		height: 32,
		"&::before": {
			content: "''",
			position: "absolute",
			width: "100%",
			height: "100%",
			left: 0,
			top: 0,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center",
			backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
				"#fff"
			)}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
		},
		...theme.applyStyles("dark", {
			backgroundColor: "#003892",
		}),
	},
	"& .MuiSwitch-track": {
		opacity: 1,
		backgroundColor: "#aab4be",
		borderRadius: 20 / 2,
		...theme.applyStyles("dark", {
			backgroundColor: "#8796A5",
		}),
	},
}));

export const AccordionStyle = styled((props: AccordionProps) => (
	<Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	"&:not(:last-child)": {
		borderBottom: 0,
	},
	"&::before": {
		display: "none",
	},
}));

import MuiAccordionSummary, {
	AccordionSummaryProps,
	accordionSummaryClasses,
} from "@mui/material/AccordionSummary";

export const AccordionSummaryStyle = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary {...props} />
))(() => ({
	flexDirection: "row",
	[`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
		{
			transform: "rotate(90deg)",
		},
	[`& .${accordionSummaryClasses.content}`]: {
		marginLeft: "0px",
	},
}));

export const AccordionDetailsStyle = styled(AccordionDetails)(() => ({
	padding: "0px",
	borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
