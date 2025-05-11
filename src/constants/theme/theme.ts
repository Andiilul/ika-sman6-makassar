"use client";

import { createTheme, PaletteMode } from "@mui/material";

// Fungsi untuk generate tema berdasarkan mode (light/dark)
export const getDesignTokens = (mode: PaletteMode) => {
	return {
		palette: {
			mode,
			...(mode === "dark"
				? {
						primary: {
							main: "#31A7FF",
							light: "#63BDFF",
							dark: "#0073CC",
							contrastText: "#ffffff",
						},
						secondary: {
							main: "#e53935", // Crimson Red — bold and energetic
							light: "#ef5350", // Light Crimson — hover/focus state
							dark: "#b71c1c", // Deep Crimson — active/pressed state
							contrastText: "#ffffff", // Ensures readability on buttons, etc.
						},
						background: {
							default: "#191919",
							paper: "#141414",
						},
						text: {
							primary: "#ffffff",
							secondary: "#bababa",
							disabled: "#555555",
						},
						common: {
							black: "#ffffff",
							white: "#000000",
						},
				  }
				: {
						primary: {
							main: "#31A7FF",
							light: "#63BDFF",
							dark: "#0073CC",
							contrastText: "#ffffff",
						},
						secondary: {
							main: "#e53935", // Crimson Red — bold and energetic
							light: "#ef5350", // Light Crimson — hover/focus state
							dark: "#b71c1c", // Deep Crimson — active/pressed state
							contrastText: "#ffffff", // Ensures readability on buttons, etc.
						},
						background: {
							default: "#f9f9f9",
							paper: "#ffffff",
						},
						text: {
							primary: "#000000",
							secondary: "#4f5b62",
							disabled: "#9e9e9e",
						},
						common: {
							black: "#000000",
							white: "#ffffff",
						},
				  }),
		},
		typography: {
			fontFamily: "var(--font-poppins)",
			h1: {
				fontFamily: "var(--font-inter)",
				fontWeight: 700,
				fontSize: "2.25rem", // 36px
				[`@media (min-width:768px)`]: {
					fontSize: "2.5rem", // 40px
				},
				[`@media (min-width:1024px)`]: {
					fontSize: "3rem", // 48px
				},
			},
			h2: {
				fontFamily: "var(--font-inter)",
				fontWeight: 600,
				fontSize: "2rem", // 32px
				[`@media (min-width:768px)`]: {
					fontSize: "2.25rem", // 36px
				},
				[`@media (min-width:1024px)`]: {
					fontSize: "2.5rem", // 40px
				},
			},
			h3: {
				fontFamily: "var(--font-inter)",
				fontWeight: 600,
				fontSize: "1.5rem", // 24px
				[`@media (min-width:768px)`]: {
					fontSize: "1.75rem", // 28px
				},
				[`@media (min-width:1024px)`]: {
					fontSize: "2rem", // 32px
				},
			},
			subtitle1: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "1.125rem", // 18px
			},
			subtitle2: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "0.875rem", // 14px
			},
			body1: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "1.125rem", // 18px
			},
			body2: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "1rem", // 16px
			},
			button: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 500,
				fontSize: "1rem", // 16px
			},
			caption: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "0.875rem", // 14px
			},
			overline: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "0.75rem", // 12px
				letterSpacing: "0.1em",
			},
		},
	};
};

// Default theme (mode: 'light')
const theme = createTheme(getDesignTokens("dark"));

export default theme;
