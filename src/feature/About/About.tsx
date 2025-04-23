"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { alpha, Box, Typography, useTheme } from "@mui/material";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { AboutContainer } from "./styled";
import Goals from "./Goals";
import Image from "next/image";

export const About: React.FC = () => {
	const theme = useTheme();
	return (
		<FlexBox flexDirection={"column"}>
			<PageHeader title="Tentang Kami" />

			<PageLayout>
				<Box display={"flex"} flexDirection={"column"}>
					<AboutContainer>
						<Box
							display={"grid"}
							gridTemplateColumns={"repeat(2, 1fr)"}
							gap={"16px"}
							width="100%"
						>
							{/* KIRI: Konten Teks */}
							<Box display={"flex"} flexDirection={"column"}>
								{/* Judul & Garis */}
								<Box
									display={"flex"}
									gap={"8px"}
									width={"100%"}
									alignItems={"start"}
								>
									<Box display={"flex"} alignItems={"center"} height={"30px"}>
										<Typography fontWeight={600} color="secondary">
											TENTANG IKA SMA 6 MAKASSAR
										</Typography>
									</Box>
									<Box display={"flex"} flexDirection={"column"}>
										<Box height={"16px"}></Box>
										<Box height={"100%"} display={"flex"} alignItems={"start"}>
											<Box
												width={"120px"}
												height={"1px"}
												bgcolor={alpha(theme.palette.secondary.main, 0.5)}
											/>
											<Box
												display={"flex"}
												alignItems={"center"}
												flexDirection={"column"}
												width={"2px"}
											>
												<Box
													width={"2px"}
													height={"10px"}
													bgcolor={alpha(theme.palette.secondary.main, 0.5)}
												/>
												<Box
													borderRadius={"50%"}
													bgcolor={"transparent"}
													sx={{
														borderColor: alpha(
															theme.palette.secondary.main,
															0.5
														),
													}}
													border={"1px solid"}
													height={"9px"}
													width={"9px"}
												/>
											</Box>
										</Box>
									</Box>
								</Box>

								{/* Judul Besar dan Deskripsi */}
								<Box display={"flex"} flexDirection={"column"} gap={"8px"}>
									<Typography fontSize={"32px"} fontWeight={600}>
										IKA SMA 6
										<Typography
											fontSize={"32px"}
											fontWeight={600}
											component={"span"}
											color="secondary"
										>
											{" "}
											MAKASSAR
										</Typography>
										<br />
										<Typography
											fontSize={"32px"}
											fontWeight={600}
											component={"span"}
											color="secondary"
										>
											{" "}
											Menyatukan
										</Typography>{" "}
										Alumni
									</Typography>

									<Typography fontSize={"16px"}>
										Ikatan Alumni SMA Negeri 6 Makassar adalah organisasi yang
										dibentuk oleh para alumni SMA Negeri 6 Makassar. Organisasi
										ini bertujuan untuk menjalin silaturahmi, meningkatkan
										networking, dan berkontribusi dalam pembangunan sekolah dan
										masyarakat.
									</Typography>
								</Box>
							</Box>

							{/* KANAN: Gambar */}
							<Box
								position="relative"
								width="100%"
								minHeight="360px"
								borderRadius="12px"
								overflow="hidden"
							>
								<Image
									src="/images/test-hero.webp"
									alt="about"
									fill
									style={{
										objectFit: "cover",
									}}
								/>
							</Box>
						</Box>
					</AboutContainer>
					<Goals />
				</Box>
			</PageLayout>
		</FlexBox>
	);
};

export default About;
