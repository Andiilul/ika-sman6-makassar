import { createTheme, PaletteMode } from "@mui/material";

// Fungsi untuk generate tema berdasarkan mode (light/dark)
export const getDesignTokens = (mode: PaletteMode) => {
	return {
		palette: {
			mode,
			...(mode === "dark"
				? {
						primary: {
							main: "#31A7FF", // Argentinian Blue
							light: "#63BDFF", // Lighter blue for hover/focus
							dark: "#0073CC", // Stronger blue for active/selected
							contrastText: "#ffffff", // Keep white for readability
						},
						secondary: {
							main: "#001E36", // Oxford Blue
							light: "#123E5B", // Slightly lighter for hover states
							dark: "#000B1A", // Almost black for depth
							contrastText: "#ffffff", // Maintain good contrast
						},
						background: {
							default: "#191919", // Rich Black
							paper: "#1c242f", // Gunmetal
						},
						text: {
							primary: "#ffffff", // White
							secondary: "#bababa", // Silver
							disabled: "#555555", // Muted gray (still visible, but subdued)
						},
						common: {
							black: "#ffffff", // White (for icons on dark bg)
							white: "#000000", // Black (for rare light elements)
						},
				  }
				: {
						primary: {
							main: "#31A7FF", // Argentinian Blue
							light: "#63BDFF", // Slightly brighter for hover
							dark: "#0073CC", // For pressed/active state
							contrastText: "#ffffff", // Still provides high contrast on blue
						},
						secondary: {
							main: "#001E36", // Oxford Blue
							light: "#123E5B", // Slightly lighter than main
							dark: "#000B1A", // Deep navy for contrast
							contrastText: "#ffffff", // Ensures readability on dark blue
						},
						background: {
							default: "#f9f9f9", // Almost white for clean UI
							paper: "#ffffff", // Pure white cards, sheets
						},
						text: {
							primary: "#001E36", // Matches your secondary, gives consistency
							secondary: "#4f5b62", // Slightly muted dark gray
							disabled: "#9e9e9e", // Standard Material disabled gray
						},
						common: {
							black: "#000000",
							white: "#ffffff",
						},
				  }),
		},
	};
};

// Default theme (mode: 'light')
const theme = createTheme(getDesignTokens("light"));

export default theme;
