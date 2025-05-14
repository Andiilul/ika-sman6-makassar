"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { IActivity } from "@/interfaces/Kegiatan";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { directusImageLoader } from "@/components/DirectusImage/DirectusImageLoader";

interface ActivityCardProps {
	activity: IActivity;
}

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
	const theme = useTheme();
	const router = useRouter();

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const isHoverEnabled = large; // ✅ Hover hanya di tablet & desktop

	const [hover, setHover] = useState(false);

	const clampStyle = (lines: number) => ({
		display: "-webkit-box",
		WebkitLineClamp: lines,
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
	});

	return (
		<Box
			onMouseEnter={isHoverEnabled ? () => setHover(true) : undefined}
			onMouseLeave={isHoverEnabled ? () => setHover(false) : undefined}
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
					loader={directusImageLoader}
					src={activity.imageURL ?? ""}
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
			<Box
				padding={large ? "12px" : medium ? "8px" : "4px"}
				bgcolor={theme.palette.background.paper}
			>
				<Typography variant="body2" color="primary">
					{new Date(activity.date).toDateString()}
				</Typography>
				<Typography
					fontWeight={600}
					sx={clampStyle(2)} // Line-clamp 2 baris untuk judul
				>
					{activity.title}
				</Typography>
				<Typography
					variant="body2"
					sx={clampStyle(1)} // Line-clamp 2 baris untuk judul
					color={theme.palette.text.primary}
				>
					Lokasi : {activity.location}
				</Typography>
				<Typography
					variant="body2"
					sx={clampStyle(2)} // Line-clamp 2 baris untuk judul
					color={theme.palette.text.secondary}
				>
					{activity.short_description}
				</Typography>
			</Box>

			{/* Hover Overlay hanya di desktop/tablet */}
			{isHoverEnabled && (
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
						backdropFilter: "blur(2px)",
					}}
				>
					<Typography fontWeight={600} fontSize={"20px"}>
						Lihat Selengkapnya
					</Typography>
				</motion.div>
			)}
		</Box>
	);
};
