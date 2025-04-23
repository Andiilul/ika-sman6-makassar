"use client";

import theme from "@/constants/theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

interface ProvidersProps {
	children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
	return (
		<ThemeProvider theme={theme}>
      <CssBaseline/>
			{children}
		</ThemeProvider>
	);
}
