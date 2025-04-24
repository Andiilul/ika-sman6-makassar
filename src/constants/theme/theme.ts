"use client"

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
				fontSize: "3rem",
			},
			h2: {
				fontFamily: "var(--font-inter)",
				fontWeight: 600,
				fontSize: "2.25rem",
			},
			h3: {
				fontFamily: "var(--font-inter)",
				fontWeight: 600,
				fontSize: "1.875rem",
			},
			body1: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "1rem",
			},
			body2: {
				fontFamily: "var(--font-poppins)",
				fontWeight: 400,
				fontSize: "0.875rem",
			},
		},
	};
};

// Default theme (mode: 'light')
const theme = createTheme(getDesignTokens("dark"));

export default theme;
