"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { getDesignTokens } from "@/constants/theme/theme";
import React, {
	createContext,
	useContext,
	useMemo,
	useState,
	useEffect,
} from "react";

type ThemeMode = "light" | "dark";

interface ThemeContextType {
	mode: ThemeMode;
	toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error("useThemeContext must be used inside ThemeProvider");
	return context;
};

export default function Providers({ children }: { children: React.ReactNode }) {
	const [mode, setMode] = useState<ThemeMode>("light");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const saved = localStorage.getItem("theme") as ThemeMode;
		if (saved === "dark" || saved === "light") {
			setMode(saved);
		}
		setMounted(true);
	}, []);

	const toggleTheme = () => {
		setMode((prev) => {
			const next = prev === "light" ? "dark" : "light";
			localStorage.setItem("theme", next);
			return next;
		});
	};

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	if (!mounted) return null; // ⛔️ hindari mismatch saat awal

	return (
		<ThemeContext.Provider value={{ mode, toggleTheme }}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	);
}
