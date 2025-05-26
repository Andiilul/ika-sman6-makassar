"use client";

import React, { useMemo } from "react";
import {
	GoalsContainer,
	GoalsContent,
	GoalsDivider,
	GoalsWrapper,
} from "./styled";
import Image from "next/image";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useTranslations } from "next-intl";

const Goals = () => {
	const theme = useTheme();

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const t = useTranslations("AboutPage");

	const goals = useMemo(
		() => [
			{
				title: t("goals1"),
				desc: t("gtext1"),
				image: "/images/test-hero.webp",
			},
			{
				title: t("goals2"),
				desc: t("gtext2"),
				image: "/images/test-hero.webp",
			},
			{
				title: t("goals3"),
				desc: t("gtext3"),
				image: "/images/test-hero.webp",
			},
			{
				title: t("goals4"),
				desc: t("gtext4"),
				image: "/images/test-hero.webp",
			},
		],
		[t] // dependencies
	);


	return (
		<GoalsWrapper>
			<Typography
				width={"100%"}
				textAlign={"center"}
				component={"span"}
				color="primary"
				fontSize={large ? "36px" : medium ? "30px" : "24px"}
				fontWeight={600}
			>
				{t("goals")}
				<Typography
					component={"span"}
					color={theme.palette.text.primary}
					fontSize={large ? "36px" : medium ? "30px" : "24px"}
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
					gap: medium ? "0" : "12px",
				}}
			>
				{goals.map((goal, index) => (
					<GoalsContainer
						key={index}
						direction={
							!medium ? "row" : index % 2 === 0 ? "row-reverse" : "row"
						}
					>
						<GoalsContent>
							<Box
								display={"flex"}
								flexDirection={"column"}
								gap={large ? "16px" : ""}
							>
								<Typography
									color="primary"
									fontSize={large ? "24px" : medium ? "20px" : "16px"}
									fontWeight={"600"}
								>
									{goal.title}
								</Typography>
								<Typography
									fontSize={large ? "16px" : medium ? "14px" : "12px"}
								>
									{goal.desc}
								</Typography>
							</Box>
						</GoalsContent>
						{medium && (
							<>
								<GoalsDivider>
									<Box
										width={"2px"}
										bgcolor={theme.palette.secondary.main}
										flex={1}
									></Box>
									<Box
										width={large ? "90px" : "60px"}
										height={large ? "90px" : "60px"}
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
											color="secondary"
											sx={{
												fontSize: large ? "36px" : "30px",
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
										display={medium ? "block" : "none"}
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
												display: medium ? "block" : "none",
												objectFit: "cover",
											}}
										/>
									</Box>
								</GoalsContent>
							</>
						)}
					</GoalsContainer>
				))}
			</Box>
		</GoalsWrapper>
	);
};

export default Goals;
