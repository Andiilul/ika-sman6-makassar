"use client";

// Hero.tsx
import { Box, Typography, useMediaQuery } from "@mui/material";
import {
	HeroCard,
	HeroCardContainer,
	HeroCardWrapper,
	HeroContainer,
	HeroWrapper,
} from "./styled";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import SchoolIcon from "@mui/icons-material/School";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

import { useTheme } from "@mui/material";
import { useState } from "react";
import { Phone } from "@mui/icons-material";

export const Hero: React.FC = () => {
	const [hover, setHover] = useState<number | null>(null);

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	const theme = useTheme();
	return (
		<HeroWrapper>
			<HeroContainer>
				<Box display={"flex"} flexDirection={"column"}>
					<Typography
						width={"100%"}
						textAlign={large ? "left" : "center"}
						fontFamily={"Alike"}
						fontSize={large ? "24px" : medium ? "18px" : "12px"}
						color={"white"}
					>
						Menyatukan Alumni dari Berbagai Generasi
					</Typography>
					<Typography
						width={"100%"}
						textAlign={large ? "left" : "center"}
						fontFamily={"Poppins"}
						fontSize={large ? "56px" : medium ? "48px" : "40px"}
						lineHeight={large ? "56px" : medium ? "48px" : "40px"}
						color={"white"}
						fontWeight={600}
						sx={{
							userSelect: "none",
						}}
					>
						IKA SMA 6
					</Typography>
					<Typography
						width={"100%"}
						textAlign={large ? "left" : "center"}
						fontFamily={"Poppins"}
						fontSize={large ? "56px" : medium ? "48px" : "40px"}
						color={theme.palette.primary.main}
						fontWeight={600}
						lineHeight={large ? "56px" : medium ? "48px" : "40px"}
						sx={{
							userSelect: "none",
						}}
					>
						MAKASSAR
					</Typography>
				</Box>
				<HeroCardWrapper>
					<Box></Box>
					<HeroCardContainer>
						{/* Card 1 */}
						<HeroCard
							onMouseEnter={() => setHover(1)}
							onMouseLeave={() => setHover(null)}
							sx={{
								cursor: "pointer",
								overflow: "hidden",
								position: "relative",
							}}
						>
							{/* Default content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform:
										hover === 1 ? "translateY(-100%)" : "translateY(0)",
									opacity: hover === 1 ? 0 : 1,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<Box display="flex" alignItems="center" gap="12px">
									<ManageSearchIcon
										sx={{ fontSize: "48px" }}
										color="secondary"
									/>
									<Typography
										fontSize="24px"
										fontWeight="600"
										color={theme.palette.text.primary}
									></Typography>
								</Box>
								<Typography
									fontSize="16px"
									fontWeight="500"
									color={theme.palette.text.primary}
								>
									Tentang Kami{" "}
								</Typography>
							</Box>

							{/* Hover content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform: hover === 1 ? "translateY(0)" : "translateY(100%)",
									opacity: hover === 1 ? 1 : 0,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									gap: "4px",
								}}
							>
								<Typography
									fontSize="20px"
									fontWeight="600"
									textAlign="center"
									color={theme.palette.text.primary}
								>
									Tentang IKA SMA 6 Makassar
								</Typography>

								<Typography
									fontSize="14px"
									fontWeight="400"
									color={theme.palette.text.secondary}
									textAlign="center"
								>
									Lihat selengkapnya
								</Typography>
							</Box>
						</HeroCard>
						{/* Card 2 */}
						<HeroCard
							onMouseEnter={() => setHover(2)}
							onMouseLeave={() => setHover(null)}
							sx={{
								cursor: "pointer",
								overflow: "hidden",
								position: "relative",
							}}
						>
							{/* Default content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform:
										hover === 2 ? "translateY(-100%)" : "translateY(0)",
									opacity: hover === 2 ? 0 : 1,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<Box display="flex" alignItems="center" gap="12px">
									<SchoolIcon sx={{ fontSize: "48px" }} color="secondary" />
									<Typography
										fontSize="24px"
										fontWeight="600"
										color={theme.palette.text.primary}
									>
										1200+
									</Typography>
								</Box>
								<Typography
									fontSize="16px"
									fontWeight="500"
									color={theme.palette.text.primary}
								>
									Alumni Terdaftar
								</Typography>
							</Box>

							{/* Hover content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform: hover === 2 ? "translateY(0)" : "translateY(100%)",
									opacity: hover === 2 ? 1 : 0,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									gap: "4px",
								}}
							>
								<Typography
									fontSize="20px"
									fontWeight="600"
									textAlign="center"
									color={theme.palette.text.primary}
								>
									Direktori Alumni
								</Typography>
								<Typography
									fontSize="14px"
									fontWeight="400"
									color={theme.palette.text.secondary}
									textAlign="center"
								>
									Pelajari Selengkapnya
								</Typography>
							</Box>
						</HeroCard>
						{/* Card 3 */}
						<HeroCard
							onMouseEnter={() => setHover(3)}
							onMouseLeave={() => setHover(null)}
							sx={{
								cursor: "pointer",
								overflow: "hidden",
								position: "relative",
							}}
						>
							{/* Default content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform:
										hover === 3 ? "translateY(-100%)" : "translateY(0)",
									opacity: hover === 3 ? 0 : 1,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<Box display="flex" alignItems="center" gap="12px">
									<GroupAddIcon sx={{ fontSize: "48px" }} color="secondary" />
									<Typography
										fontSize="24px"
										fontWeight="600"
										color={theme.palette.text.primary}
									></Typography>
								</Box>
								<Typography
									fontSize="16px"
									fontWeight="500"
									color={theme.palette.text.primary}
								>
									Gabung Alumni{" "}
								</Typography>
							</Box>

							{/* Hover content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform: hover === 3 ? "translateY(0)" : "translateY(100%)",
									opacity: hover === 3 ? 1 : 0,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									gap: "4px",
								}}
							>
								<Typography
									fontSize="20px"
									fontWeight="600"
									textAlign="center"
									color={theme.palette.text.primary}
								>
									Jadi Bagian Kami
								</Typography>

								<Typography
									fontSize="14px"
									fontWeight="400"
									color={theme.palette.text.secondary}
									textAlign="center"
								>
									Isi Formulir
								</Typography>
							</Box>
						</HeroCard>
						{/* Card 4 */}
						<HeroCard
							onMouseEnter={() => setHover(4)}
							onMouseLeave={() => setHover(null)}
							sx={{
								cursor: "pointer",
								overflow: "hidden",
								position: "relative",
							}}
						>
							{/* Default content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform:
										hover === 4 ? "translateY(-100%)" : "translateY(0)",
									opacity: hover === 4 ? 0 : 1,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "center",
									alignItems: "center",
									gap: "8px",
								}}
							>
								<Box display="flex" alignItems="center" gap="12px">
									<Phone sx={{ fontSize: "48px" }} color="secondary" />
									<Typography
										fontSize="24px"
										fontWeight="600"
										color={theme.palette.text.primary}
									></Typography>
								</Box>
								<Typography
									fontSize="16px"
									fontWeight="500"
									color={theme.palette.text.primary}
								>
									Hubungi Kami{" "}
								</Typography>
							</Box>

							{/* Hover content */}
							<Box
								sx={{
									transition: "all 0.3s ease-in-out",
									transform: hover === 4 ? "translateY(0)" : "translateY(100%)",
									opacity: hover === 4 ? 1 : 0,
									position: "absolute",
									width: "100%",
									height: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									flexDirection: "column",
									gap: "4px",
								}}
							>
								<Typography
									fontSize="20px"
									fontWeight="600"
									textAlign="center"
									color={theme.palette.text.primary}
								>
									Mari Tetap Terhubung{" "}
								</Typography>

								<Typography
									fontSize="14px"
									fontWeight="400"
									color={theme.palette.text.secondary}
									textAlign="center"
								>
									Hubungi Kami
								</Typography>
							</Box>
						</HeroCard>
					</HeroCardContainer>
				</HeroCardWrapper>
			</HeroContainer>
		</HeroWrapper>
	);
};
