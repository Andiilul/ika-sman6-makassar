"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Image from "next/image";
import { AboutSection } from "./styled";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";

export const AboutHome: React.FC = () => {
	const theme = useTheme();

	return (
		<FlexBox flexDirection={"column"}>
			<FlexBox>
				<Box display={"flex"} gap={"2px"} flexDirection={"column"}>
					<Box
						sx={{
							width: "12px",
							height: "4px",
							backgroundColor: theme.palette.primary.main,
						}}
					></Box>
					<Box
						sx={{
							width: "12px",
							height: "4px",
							backgroundColor: theme.palette.primary.main,
						}}
					></Box>
					<Box
						sx={{
							width: "12px",
							height: "90px",
							background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
						}}
					></Box>
				</Box>

				<Box>
					<Typography fontSize={"12px"} fontWeight={600} color="secondary">
						TENTANG KAMI
					</Typography>
					<Typography fontSize={"24px"} fontWeight={600}>
						Dari Alumni, Oleh Alumni, <br /> Untuk Masa Depan
					</Typography>
				</Box>
			</FlexBox>
			<AboutSection>
				<Box width={"100%"} height={"240px"} position={"relative"}>
					<Image
						src={"/images/test-hero.webp"}
						style={{
							borderRadius: "12px",
						}}
						alt=""
						fill
					/>
				</Box>
				<Box
					width={"100%"}
					height={"240px"}
					position={"relative"}
					display={"flex"}
					gap={"32px"}
					flexDirection={"column"}
				>
					<Typography marginTop={"16px"} fontSize={"16px"} fontWeight={500}>
						IKA SMA Negeri 6 Makassar adalah organisasi alumni lintas generasi
						yang bertujuan mempererat silaturahmi, membangun jaringan, dan
						berkontribusi bagi sekolah serta masyarakat.
					</Typography>
					<Box>
						<Link passHref href={"/about"}>
							<Button variant="outlined">
								<Typography
									display={"flex"}
									alignItems={"center"}
									padding={"4px 8px"}
									fontFamily={"Poppins"}
									fontSize={"16px"}
									fontWeight={400}
									textTransform={"capitalize"}
								>
									Pelajari Selengkapnya <ArrowRight />
								</Typography>
							</Button>
						</Link>
					</Box>
				</Box>
			</AboutSection>
		</FlexBox>
	);
};
