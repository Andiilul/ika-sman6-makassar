"use client";

import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Box, Typography, useTheme } from "@mui/material";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const theme = useTheme();

	return (
		<Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
			<Navbar />
			<Box width={"100%"} flex={1}>
				{children}
			</Box>
			<Box
				width={"100%"}
				display={"flex"}
				flexDirection={"column"}
				alignSelf={"end"}
			>
				<Footer />
				<Box
					display={"flex"}
					justifyContent={"center"}
					padding={"8px"}
					bgcolor={theme.palette.background.paper}
				>
					<Typography
						fontSize={"10px"}
						fontFamily={"Poppins"}
						textAlign={"center"}
					>
						&copy; 2025 Website IKA SMA Negeri 6 Makassar. Created by
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}
