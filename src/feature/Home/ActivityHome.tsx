import { alpha, Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import {
	ActivityContainer,
	ActivityContent,
	ActivityContentBox,
	ActivityWrapper,
} from "./styled";
import Image from "next/image";

export const ActivityHome = () => {
	const theme = useTheme();
	return (
		<ActivityWrapper>
			<Typography fontSize={"36px"} fontWeight={600}>
				&quot;Bersama, Kita Terhubung&quot;
			</Typography>
			<ActivityContainer>
				<Box width={"55%"} display={"flex"} flexDirection={"column"}>
					<Box
						height={"350px"}
						position={"relative"}
						display={"flex"}
						alignItems={"flex-end"}
					>
						<Image src="/images/test-hero.webp" fill alt="" />
						<Box
							bgcolor={alpha(theme.palette.primary.main, 0.5)}
							position={"absolute"}
							zIndex={"10"}
							height={"24px"}
							width={"80%"}
						></Box>
					</Box>
					<Box
						width={"100%"}
						height={"60px"}
						display={"flex"}
						justifyContent={"end"}
					>
						<Box
							bgcolor={theme.palette.background.paper}
							height={"60px"}
							width={"20%"}
						></Box>
					</Box>
				</Box>
				<ActivityContentBox>
					<Box height={"60px"}></Box>
					<ActivityContent bgcolor={theme.palette.background.paper}>
						<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
							<Typography fontSize={"24px"} fontWeight={500}>
								Aktivitas dan Kebersamaan
							</Typography>
							<Typography fontSize={"14px"} fontWeight={300}>
								Di balik setiap reuni, aksi sosial, dan pertemuan alumni, ada
								semangat untuk terus terhubung dan tumbuh bersama. Kami percaya,
								kebersamaan adalah kunci dari komunitas yang hidup.
							</Typography>
						</Box>
						<Box display={"flex"} justifyContent={"end"}>
							<Box>
								<Button
									variant="outlined"
									color="primary"
									sx={{
										borderRadius: "4px",
									}}
								>
									<Typography
										sx={{
											padding: "4px 12px",
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
					<Box height={"60px"}></Box>
					<ActivityContent bgcolor={theme.palette.background.paper}>
						<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
							<Typography fontSize={"24px"} fontWeight={500}>
								Jaringan Alumni SMA 6 Makassar
							</Typography>
							<Typography fontSize={"14px"} fontWeight={300}>
								Ratusan alumni dari berbagai angkatan dan latar belakang kini
								terhubung dalam satu komunitas. Dari yang baru lulus hingga
								profesional senior — semua ada di sini, dan siap saling
								mendukung.
							</Typography>
						</Box>
						<Box>
							<Button
								variant="outlined"
								color="primary"
								sx={{
									borderRadius: "4px",
								}}
							>
								<Typography
									sx={{
										padding: "4px 12px",
										textTransform: "capitalize",
									}}
								>
									Telusuri Alumni
								</Typography>
							</Button>{" "}
						</Box>
					</ActivityContent>
				</ActivityContentBox>
				<Box width={"55%"} display={"flex"} flexDirection={"column"}>
					<Box
						height={"350px"}
						position={"relative"}
						display={"flex"}
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
								width={"80%"}
								bgcolor={alpha(theme.palette.primary.main, 0.5)}
							></Box>
						</Box>
					</Box>
					<Box
						width={"100%"}
						height={"60px"}
						display={"flex"}
						justifyContent={"start"}
					>
						<Box
							bgcolor={theme.palette.background.paper}
							height={"60px"}
							width={"20%"}
						></Box>
					</Box>
				</Box>
			</ActivityContainer>
		</ActivityWrapper>
	);
};
