import React from "react";
import {
	GoalsContainer,
	GoalsContent,
	GoalsDivider,
	GoalsWrapper,
} from "./styled";
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";

const goals = [
	{
		title: "Menjaga Silaturahmi",
		desc: "Mengadakan kegiatan reuni, pertemuan, dan kegiatan sosial lainnya untuk mempererat hubungan antara alumni.",
		image: "/images/test-hero.webp",
	},
	{
		title: "Memberikan Kontribusi kepada Sekolah",
		desc: "Memberikan bantuan, baik dalam bentuk dana, fasilitas, maupun program-program yang mendukung peningkatan kualitas pendidikan di SMA Negeri 6 Makassar.",
		image: "/images/test-hero.webp",
	},
	{
		title: "Meningkatkan Networking",
		desc: "Membantu alumni untuk mengembangkan jaringan bisnis, profesional, dan sosial mereka.",
		image: "/images/test-hero.webp",
	},
	{
		title: "Membantu Alumni yang Membutuhkan",
		desc: "Mengadakan program-program bantuan sosial untuk membantu alumni yang mengalami kesulitan.",
		image: "/images/test-hero.webp",
	},
];

const Goals = () => {
	const theme = useTheme();
	return (
		<GoalsWrapper>
			<Typography
				width={"100%"}
				textAlign={"center"}
				component={"span"}
				color="secondary"
				fontSize={"32px"}
				fontWeight={600}
			>
				Tujuan
				<Typography
					component={"span"}
					color={theme.palette.text.primary}
					fontSize={"32px"}
					fontWeight={600}
				>
					{" "}
					Ika SMA 6 Makassar
				</Typography>
			</Typography>
			<Box
				sx={{
					display: "flex",
					flex: "1",
					flexDirection: "column",
				}}
			>
				{goals.map((goal, index) => (
					<GoalsContainer
						key={index}
						direction={index % 2 === 0 ? "row-reverse" : "row"}
					>
						<GoalsContent>
							<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
								<Typography
									color="secondary"
									fontSize={"24px"}
									fontWeight={"600"}
								>
									{goal.title}
								</Typography>
								<Typography>{goal.desc}</Typography>
							</Box>
						</GoalsContent>

						<GoalsDivider>
							<Box
								width={"2px"}
								bgcolor={theme.palette.secondary.main}
								flex={1}
							></Box>
							<Box
								width={"90px"}
								height={"90px"}
								borderRadius={"50%"}
								display={"flex"}
								justifyContent={"center"}
								alignItems={"center"}
								sx={{
									borderColor: theme.palette.secondary.main,
									borderWidth: "2px",
									borderStyle: "solid",
								}}
							>
								<Typography
									sx={{
										fontSize: "36px",
										fontWeight: 600,
									}}
								>
									{index + 1}
								</Typography>
							</Box>
							<Box
								width={"2px"}
								bgcolor={theme.palette.secondary.main}
								flex={1}
							></Box>
						</GoalsDivider>

						<GoalsContent>
							<Box
								position="relative"
								width="100%"
								sx={{
									aspectRatio: "5 / 3",
									borderRadius: "8px",
									overflow: "hidden",
								}}
							>
								<Image
									fill
									src={goal.image}
									alt={goal.title}
									style={{
										objectFit: "cover",
									}}
								/>
							</Box>
						</GoalsContent>
					</GoalsContainer>
				))}
			</Box>
		</GoalsWrapper>
	);
};

export default Goals;
