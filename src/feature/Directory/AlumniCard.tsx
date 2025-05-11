import { IAlumni } from "@/interfaces/Alumni";
import { Box, Typography, useTheme } from "@mui/material";
import { AlumniCardWrapper } from "./styled";
import Image from "next/image";
import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import { directusImageLoader } from "@/components/DirectusImage/DirectusImageLoader";

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
	return (
		<AlumniCardWrapper
			onMouseEnter={() => setHover(index)}
			onMouseLeave={() => setHover(null)}
			sx={{
				cursor: "pointer",
				overflow: "hidden",
				position: "relative",
			}}
		>
			{/* Gambar background */}
			<Image
				src={alumni.imageURL} // just the filename_disk
				alt={alumni.name}
				fill
				loader={directusImageLoader}
				style={{ objectFit: "cover" }}
			/>

			{/* Nama alumni (selalu tampil) */}
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
					height={"48px"}
					width={"48px"}
					borderRadius={"50%"}
					display={"flex"}
					justifyContent={"center"}
					alignItems={"center"}
				>
					{alumni.gender === "male" ? (
						<MaleIcon
							sx={{ color: theme.palette.primary.main, fontSize: "36px" }}
						/>
					) : (
						<FemaleIcon
							sx={{ color: theme.palette.secondary.main, fontSize: "36px" }}
						/>
					)}
				</Box>
			</Box>
			<Box
				sx={{
					position: "absolute",
					bottom: 0,
					left: 0,
					right: 0,
					px: 2,
					py: 1,
					background: "rgba(0, 0, 0, 0.7)",
					color: "white",
					transition: "all 0.3s ease-out",
					transform: hover === index ? "translateY(100%)" : "translateY(0)",
					opacity: hover === index ? 0 : 1,
				}}
			>
				<Typography fontSize={"16px"} fontWeight={600}>
					{alumni.name}
				</Typography>
				<Typography fontSize={"12px"}>{alumni.profession}</Typography>
				<Typography fontSize={"12px"}>
					Tahun Lulusan : {alumni.graduation_year}
				</Typography>
				<Typography fontSize={"12px"}>
					Lokasi Tugas :{" "}
					{alumni.location === "makassar" ? "Makassar" : "Luar Makassar"}
				</Typography>
			</Box>

			{/* Hover content tambaha\n (jika ada) */}
			<Box
				sx={{
					transition: "all 0.3s ease-out",
					transform: hover === index ? "translateY(0)" : "translateY(100%)",
					opacity: hover === index ? 1 : 0,
					position: "absolute",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					gap: "4px",
					background: "rgba(0, 0, 0, 0.9)",
					color: "white",
					padding: "16px",
					overflowY: "auto",
				}}
			>
				<Typography fontSize={"14px"} fontWeight={700}>
					{alumni.name}
				</Typography>
				<Typography fontSize="12px">NISN: {alumni.nisn}</Typography>
				<Typography fontSize="12px">Jenis Kelamin: {alumni.gender}</Typography>
				<Typography fontSize="12px">
					Tahun Lulusan: {alumni.graduation_year}
				</Typography>
				<Typography fontSize="12px">Suku: {alumni.ethnicity}</Typography>
				<Typography fontSize="12px">Domisili: {alumni.domicile}</Typography>
				<Typography fontSize="12px">Alamat: {alumni.address}</Typography>
				<Typography fontSize="12px">Kontak: {alumni.contact_number}</Typography>
				<Typography fontSize="12px">Profesi: {alumni.profession}</Typography>
				<Typography fontSize="12px">Jabatan: {alumni.position}</Typography>
				<Typography fontSize="12px">Lokasi Tugas: {alumni.location}</Typography>
				<Typography fontSize="12px">Hobi: {alumni.hobby}</Typography>
			</Box>
		</AlumniCardWrapper>
	);
};
