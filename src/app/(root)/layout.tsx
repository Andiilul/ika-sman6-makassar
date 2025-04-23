"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Box } from "@mui/material";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<Box>
			<Navbar />
			{children}
			<Footer />
		</Box>
	);
}
