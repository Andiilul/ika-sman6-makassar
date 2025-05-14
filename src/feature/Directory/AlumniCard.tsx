import { IAlumni } from "@/interfaces/Alumni";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AlumniCardWrapper } from "./styled";
import Image from "next/image";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { directusImageLoader } from "@/components/DirectusImage/DirectusImageLoader";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface AlumniCardProps {
	alumni: IAlumni;
	index: number;
	hover: number | null;
	setHover: (index: number | null) => void;
}

export const AlumniCard: React.FC<AlumniCardProps> = ({
	alumni,
	index,
	hover,
	setHover,
}) => {
	const theme = useTheme();
	const router = useRouter();
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	const isHoverEnabled = medium;

	const handleClick = () => {
		router.push(`/directory/${alumni.id}`);
	};

	const clampStyle = (lines: number) => ({
		display: "-webkit-box",
		WebkitLineClamp: lines,
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
	});

	return (
		<AlumniCardWrapper
			onMouseEnter={isHoverEnabled ? () => setHover(index) : undefined}
			onMouseLeave={isHoverEnabled ? () => setHover(null) : undefined}
			onClick={handleClick}
			sx={{
				cursor: "pointer",
				overflow: "hidden",
				position: "relative",
			}}
		>
			{/* Background Image */}
			<Image
				src={alumni.imageURL || ""}
				alt={alumni.name}
				fill
				loader={directusImageLoader}
				style={{ objectFit: "cover" }}
			/>

			{/* Gender Icon */}
			<Box
				sx={{
					position: "absolute",
					top: 0,
					right: 0,
					px: 2,
					py: 1,
					color: "white",
				}}
			>
				<Box
					bgcolor={"rgba(0, 0, 0, 0.5)"}
					height={large ? "48px" : medium ? "36px" : "24px"}
					width={large ? "48px" : medium ? "36px" : "24px"}
					borderRadius={"50%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					{alumni.gender === "male" ? (
						<MaleIcon
							sx={{
								color: theme.palette.primary.main,
								fontSize: large ? "36px" : medium ? "24px" : "18px",
							}}
						/>
					) : (
						<FemaleIcon
							sx={{
								color: theme.palette.secondary.main,
								fontSize: large ? "36px" : medium ? "24px" : "18px",
							}}
						/>
					)}
				</Box>
			</Box>

			{/* Bottom Info Text */}
			<Box
				sx={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					padding: large ? "12px" : medium ? "8px" : "4px",
					background: "rgba(0, 0, 0, 0.7)",
					color: "white",
				}}
			>
				<Typography
					fontSize={large ? "16px" : medium ? "14px" : "12px"}
					sx={clampStyle(2)} // Line-clamp 2 baris untuk judul
					fontWeight={600}
				>
					{alumni.name}
				</Typography>
				<Typography
					sx={clampStyle(2)} // Line-clamp 2 baris untuk judul
					fontSize={large ? "14px" : medium ? "12px" : "10px"}
				>
					{alumni.profession}
				</Typography>
				<Typography fontSize={large ? "14px" : medium ? "12px" : "10px"}>
					Tahun Lulusan: {alumni.graduation_year}
				</Typography>
				<Typography fontSize={large ? "14px" : medium ? "12px" : "10px"}>
					Lokasi Tugas:{" "}
					{alumni.location === "non-makassar" ? "Luar Makassar" : "Makassar"}
				</Typography>
			</Box>

			{/* Hover Slide Overlay */}
			{isHoverEnabled && (
				<motion.div
					initial={{ y: "100%", opacity: 0 }}
					animate={
						hover === index ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }
					}
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
		</AlumniCardWrapper>
	);
};
