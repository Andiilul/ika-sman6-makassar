import theme from "@/constants/theme/theme";
import { Box, Typography, Divider, useMediaQuery } from "@mui/material";
import Image from "next/image";

export const Welcome: React.FC = () => {
	const large = useMediaQuery('(min-width:1024px)');
	const medium = useMediaQuery('(min-width:768px)');
	
	return (
		<Box paddingY={"128px"} width="100%">
			{/* Top Section */}
			<Box
				display="flex"
				flexDirection={{ xs: "column", md: "row" }}
				alignItems="flex-start"
				justifyContent="center"
				gap={6}
				width="100%"
			>
				{/* Chairman Photo */}
				<Box
					width={{ xs: "100%", md: "40%" }}
					display="flex"
					justifyContent="center"
				>
					<Box width="100%" maxWidth="360px">
						<Image
							src="/images/welcome.png"
							alt="Chairman Photo"
							width={400}
							height={400}
							style={{ width: "100%", height: "auto", borderRadius: "16px" }}
						/>
					</Box>
				</Box>

				{/* Main Info */}
				<Box flex={1} display="flex" flexDirection="column" gap={4}>
					{/* Logo */}
					<Box height="48px" display={"flex"} alignItems="center">
						<Image
							src="/images/logo.png"
							alt="IKA Logo"
							width={200}
							height={48}
							style={{ width: "auto", height: "100%" }}
						/>
						<Typography>
							{" "}
						</Typography>
					</Box>

					{/* Name + Title */}
					<Box>
						<Typography
							fontSize={{ xs: "28px", md: "36px" }}
							fontWeight={600}
							fontFamily="Poppins"
						>
							Ir. Muhammad Asriadi Doloking, MM.
						</Typography>
						<Box
							bgcolor={theme.palette.secondary.main}
							width="80px"
							height="4px"
							mt={1}
							mb={2}
						/>
						<Typography fontSize="18px" color={theme.palette.text.secondary}>
							Ketua Umum IKA SMAN 6 Makassar
						</Typography>
					</Box>

					{/* Welcome Message */}
					<Typography fontSize="16px" fontFamily="Poppins" lineHeight={1.7}>
						&quot;Ikatan Alumni SMA Negeri 6 Makassar adalah organisasi yang
						dibentuk oleh para alumni untuk menjalin silaturahmi, memperkuat
						jaringan, dan berkontribusi dalam pembangunan sekolah serta
						masyarakat.&quot;
					</Typography>
				</Box>
			</Box>

			{/* Bio Section */}
			<Box
				display="flex"
				flexDirection={{ xs: "column", md: "row" }}
				justifyContent="space-between"
				gap={4}
				pt={6}
				px={large? "50px" : medium ? "16px" : "20px"}
			>
				{/* Pendidikan */}
				<Box flex={1}>
					<Typography fontWeight={600} fontFamily={"Poppins"} fontSize="20px" mb={2}>
						Pendidikan
					</Typography>
					{[
						{ title: "SMU Negeri 6 Makassar", year: "1992" },
						{ title: "Teknik Sipil, UMI Makassar", year: "1996" },
						{ title: "Magister Manajemen, UMI Makassar", year: "2014" },
					].map((item, idx) => (
						<Box key={idx} mb={1}>
							<Typography fontWeight={400} fontFamily={"Poppins"} fontSize={"14px"}>
								{item.title}
								<Typography component="span" color="text.secondary">
									{" "}
									- {item.year}
								</Typography>
							</Typography>
							<Divider sx={{ mt: 1 }} />
						</Box>
					))}
				</Box>

				{/* Organisasi */}
				<Box flex={1}>
					<Typography fontWeight={600} fontFamily={"Poppins"} fontSize="20px" mb={2}>
						Organisasi
					</Typography>
					{[
						"HMI Komisariat Fakultas Teknik",
						"Shorinji Kempo Dojo UMI",
						"Ketua Angkatan 1992 IKA SMAN 6",
						"Ketua Harian IKA SMAN 6 (2021–2024)",
					].map((org, idx) => (
						<Box key={idx} mb={1}>
							<Typography fontWeight={400} fontFamily={"Poppins"} fontSize={"14px"}>{org}</Typography>
							<Divider sx={{ mt: 1 }} />
						</Box>
					))}
				</Box>

				{/* Pekerjaan */}
				<Box flex={1}>
					<Typography fontWeight={600} fontFamily={"Poppins"} fontSize="20px" mb={2}>
						Pekerjaan
					</Typography>
					{[
						"Developer & Konsultan Teknik (Yasa Group)",
						"Pemilik dan Pengelola Pasar Butung Makassar",
					].map((job, idx) => (
						<Box key={idx} mb={1}>
							<Typography fontWeight={400} fontFamily={"Poppins"} fontSize={"14px"}>{job}</Typography>
							<Divider sx={{ mt: 1 }} />
						</Box>
					))}
				</Box>
			</Box>
		</Box>
	);
};
