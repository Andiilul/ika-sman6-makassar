"use client";

import { Box, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { IActivity } from "@/interfaces/Kegiatan";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface ActivityCardProps {
	activity: IActivity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
	const theme = useTheme();
	const [hover, setHover] = useState(false);
	const router = useRouter();

	return (
		<Box
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			sx={{
				display: "flex",
				flexDirection: "column",
				borderRadius: 2,
				overflow: "hidden",
				position: "relative",
				cursor: "pointer",
			}}
			onClick={() => router.push(`/activity/${activity.id}`)}
		>
			{/* Gambar */}
			<Box
				sx={{
					position: "relative",
					width: "100%",
					aspectRatio: "5 / 3",
				}}
			>
				<Image
					src={"/images/test-hero.webp"}
					alt={activity.title}
					fill
					style={{
						objectFit: "cover",
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8,
					}}
				/>
			</Box>

			{/* Konten */}
			<Box p={2} bgcolor={theme.palette.background.paper}>
				<Typography fontWeight={600}>{activity.title}</Typography>
				<Typography variant="body2" mb={1}>
					{activity.shortDescription}
				</Typography>
				<Typography variant="caption" color="text.secondary">
					{new Date(activity.date).toLocaleDateString("id-ID")} —{" "}
					<Typography
						component="span"
						variant="caption"
						color={theme.palette.secondary.main}
						fontWeight={600}
					>
						{activity.category}
					</Typography>
				</Typography>
			</Box>

			{/* Overlay Slide Up */}
			<motion.div
				initial={{ y: "100%", opacity: 0 }}
				animate={hover ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
				transition={{ duration: 0.2, ease: "easeInOut" }}
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					right: 0,
					bottom: 0,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgba(0, 0, 0, 0.7)",
					color: "#fff",
					zIndex: 10,
          backdropFilter:"blur(2px)"
				}}
			>
				<Typography fontWeight={600} fontSize={"20px"}>
					Lihat Selengkapnya
				</Typography>
			</motion.div>
		</Box>
	);
};
