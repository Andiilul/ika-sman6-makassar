"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { alpha, Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { AboutContainer } from "./styled";
import Goals from "./Goals";
import Image from "next/image";
import { Teams } from "./Teams";
import { useTranslations } from "next-intl";

export const About: React.FC = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const theme = useTheme();
	const t = useTranslations("AboutPage");
	return (
		<FlexBox flexDirection={"column"}>
			<PageHeader title={t("title")} />

			<PageLayout>
				<Box display={"flex"} flexDirection={"column"}>
					<AboutContainer>
						<Box
							display={medium ? "grid" : "flex"}
							flexDirection={medium ? "row" : "column-reverse"}
							gridTemplateColumns={medium ? "repeat(2, 1fr)" : "0"}
							gap={large ? "36px" : medium ? "30px" : "24px"}
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
										<Typography fontWeight={600} color="primary">
											{t("subtitle1")}
										</Typography>
									</Box>
									<Box
										display={medium ? "flex" : "none"}
										flexDirection={"column"}
									>
										<Box height={"16px"}></Box>
										<Box height={"100%"} display={"flex"} alignItems={"start"}>
											<Box
												width={"120px"}
												height={"1px"}
												bgcolor={alpha(theme.palette.primary.main, 0.5)}
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
													bgcolor={alpha(theme.palette.primary.main, 0.5)}
												/>
												<Box
													borderRadius={"50%"}
													bgcolor={"transparent"}
													sx={{
														borderColor: alpha(theme.palette.primary.main, 0.5),
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
									<Typography
										fontSize={large ? "36px" : medium ? "30px" : "24px"}
										fontWeight={600}
									>
										IKA SMA 6
										<Typography
											fontSize={large ? "36px" : medium ? "30px" : "24px"}
											fontWeight={600}
											component={"span"}
											color="primary"
										>
											{" "}
											MAKASSAR
										</Typography>
										<br />
										<Typography
											fontSize={large ? "36px" : medium ? "30px" : "24px"}
											fontWeight={600}
											component={"span"}
											color="primary"
										>
											{" "}
											{t("catch2")}
										</Typography>{" "}
										Alumni
									</Typography>

									<Typography fontSize={medium ? "16px" : "14px"}>
										{t("text2")}
									</Typography>
								</Box>
							</Box>

							{/* KANAN: Gambar */}
							<Box
								position="relative"
								width="100%"
								height={large ? "360px" : medium ? "240px" : "160px"}
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
					<Teams />
					<Goals />
				</Box>
			</PageLayout>
		</FlexBox>
	);
};

export default About;
