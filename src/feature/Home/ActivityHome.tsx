import {
	alpha,
	Box,
	Button,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import React from "react";
import {
	ActivityContainer,
	ActivityContent,
	ActivityContentBox,
	ActivityWrapper,
} from "./styled";
import Image from "next/image";

export const ActivityHome = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const theme = useTheme();

	return (
		<ActivityWrapper>
			<Typography
				fontSize={large ? "36px" : medium ? "30px" : "24px"}
				fontWeight={600}
				width={"100%"}
				textAlign={"center"}
			>
				&quot;Bersama, Kita Terhubung&quot;
			</Typography>

			<ActivityContainer>
				<Box
					width={"55%"}
					display={large ? "flex" : "none"}
					flexDirection={"column"}
				>
					<Box
						height={"350px"}
						position={"relative"}
						display={"flex"}
						alignItems={"flex-end"}
					>
						<Image
							src="/images/about-2.jpg"
							fill
							alt=""
							style={{
								objectFit: "cover",
							}}
						/>
						<Box
							bgcolor={alpha(theme.palette.primary.main, 0.5)}
							position={"absolute"}
							zIndex={"10"}
							height={"24px"}
							width={"100%"}
						></Box>
					</Box>
				</Box>
				<ActivityContentBox>
					<Box height={large ? "60px" : "0px"}></Box>
					<ActivityContent bgcolor={theme.palette.background.paper}>
						<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
							<Typography
								fontSize={large ? "24px" : medium ? "20px" : "16px"}
								fontWeight={500}
							>
								Aktivitas dan Kebersamaan
							</Typography>
							<Typography fontSize={large ? "14px" : "12px"} fontWeight={300}>
								Di balik setiap reuni, aksi sosial, dan pertemuan alumni, ada
								semangat untuk terus terhubung dan tumbuh bersama. Kami percaya,
								kebersamaan adalah kunci dari komunitas yang hidup.
							</Typography>
						</Box>
						<Box display={"flex"} justifyContent={"end"}>
							<Box>
								<Button
									size={large ? "large" : medium ? "medium" : "small"}
									variant="outlined"
									color="primary"
									sx={{
										borderRadius: "4px",
									}}
								>
									<Typography
										fontSize={large ? "16px" : "12px"}
										sx={{
											textTransform: "capitalize",
										}}
									>
										Lihat Kegiatan Kami
									</Typography>
								</Button>{" "}
							</Box>
						</Box>
					</ActivityContent>
				</ActivityContentBox>
			</ActivityContainer>
			<ActivityContainer>
				<ActivityContentBox>
					<Box height={large ? "60px" : "0px"}></Box>
					<ActivityContent bgcolor={theme.palette.background.paper}>
						<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
							<Typography
								fontSize={large ? "24px" : medium ? "20px" : "16px"}
								fontWeight={500}
							>
								Jaringan Alumni SMA 6 Makassar
							</Typography>
							<Typography fontSize={large ? "14px" : "12px"} fontWeight={300}>
								Ratusan alumni dari berbagai angkatan dan latar belakang kini
								terhubung dalam satu komunitas. Dari yang baru lulus hingga
								profesional senior — semua ada di sini, dan siap saling
								mendukung.
							</Typography>
						</Box>
						<Box display={"flex"} justifyContent={large ? "start" : "end"}>
							<Button
								size={large ? "large" : medium ? "medium" : "small"}
								variant="outlined"
								color="primary"
								sx={{
									borderRadius: "4px",
								}}
							>
								<Typography
									fontSize={large ? "16px" : "12px"}
									sx={{
										textTransform: "capitalize",
									}}
								>
									Telusuri Alumni
								</Typography>
							</Button>{" "}
						</Box>
					</ActivityContent>
				</ActivityContentBox>
				<Box
					width={"55%"}
					display={large ? "flex" : "none"}
					flexDirection={"column"}
				>
					<Box
						height={"350px"}
						position={"relative"}
						display={large ? "flex" : "none"}
						alignItems={"flex-end"}
					>
						<Image src="/images/test-hero.webp" fill alt="" />
						<Box
							position={"absolute"}
							zIndex={"10"}
							width={"100%"}
							display={"flex"}
							justifyContent={"end"}
						>
							<Box
								height={"24px"}
								width={"100%"}
								bgcolor={alpha(theme.palette.primary.main, 0.5)}
							></Box>
						</Box>
					</Box>
				</Box>
			</ActivityContainer>
		</ActivityWrapper>
	);
};
