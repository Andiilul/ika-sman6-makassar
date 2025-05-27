import {
	alpha,
	Avatar,
	Box,
	IconButton,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { TeamsCard, TeamsCardCurrent, TeamsGrid, TeamsWrapper } from "./styled";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getOrdinal } from "@/services/others";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const ketuaUmumList = [
	{
		name: "Muhdar Ade Irawan, SE.",
		periods: [1, 2],
		years: ["1987 - 1991", "1991 - 1995"],
		alumni: 1983,
		image: "",
	},
	{
		name: "DR. H. Muhallis Mentja, S.Sit, MH, M",
		periods: 3,
		years: "2006 - 2009",
		alumni: 1991,
		image: "/images/chairman/2.png",
	},
	{
		name: "Drs. H. Latunreng, MM",
		periods: 4,
		years: "2015 - 2018",
		alumni: 1985,
		image: "/images/chairman/3.jpg",
	},
	{
		name: "dr. Muhammad Ridho, M.Kes",
		periods: 5,
		years: "2018 - 2021",
		alumni: 1994,
		image: "/images/chairman/4.png",
	},
	{
		name: "Rudianto Lallo, SH., MH",
		periods: 6,
		years: "2021 - 2024",
		alumni: 2002,
		image: "/images/chairman/5.jpg",
	},
	{
		name: "Ir. Muhammad Asriadi Doloking, MM",
		periods: 7,
		years: "2024 - 2027",
		alumni: 1992,
		image: "/images/chairman/6.jpg",
	},
];

export const Teams: React.FC = () => {
	const theme = useTheme();
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const locale = useLocale();
	const t = useTranslations("Teams");

	const currentChairman = 5;
	const [current, setCurrent] = useState<number>(5);

	const prev = () =>
		setCurrent((c) => (c === 0 ? ketuaUmumList.length - 1 : c - 1));
	const next = () =>
		setCurrent((c) => (c === ketuaUmumList.length - 1 ? 0 : c + 1));

	return (
		<Box paddingY={"48px"} display={"flex"} flexDirection="column" gap="24px" width="100%">
			<Box display={"flex"} flexDirection="column" alignItems={"center"} gap="8px">
				<Typography
					color="primary"
					fontSize={large ? "36px" : medium ? "30px" : "24px"}
					fontWeight={600}
					textAlign={"center"}
				>
					{" "}
					{t("title")}
				</Typography>
				<Typography
					fontFamily={"Poppins"}
					color={theme.palette.text.primary}
					fontSize={large ? "36px" : medium ? "30px" : "24px"}
					fontWeight={600}
					textAlign={"center"}
				>
					{" "}
					{t("subtitle")}{" "}
				</Typography>
			</Box>

			<TeamsWrapper>
				<Box
					display="flex"
					flex={1}
					minWidth={0}
					maxWidth="100%"
					sx={{ width: "100%" }}
					alignItems={"center"}
				>
					<Box
						sx={{
							display: medium ? "none" : "block",
						}}
					>
						<IconButton sx={{}} onClick={prev}>
							<ChevronLeft />
						</IconButton>
					</Box>
					<AnimatePresence mode="wait">
						<motion.div
							key={current}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.3 }}
							style={{ width: "100%" }}
						>
							<TeamsCardCurrent>
								<Avatar
									src={ketuaUmumList[current].image}
									alt={ketuaUmumList[current].name}
									sx={{
										width: large ? 120 : medium ? 100 : 80,
										height: large ? 120 : medium ? 100 : 80,
									}}
								/>

								<Box
									display="flex"
									flexDirection="column"
									gap="4px"
									alignItems="center"
								>
									<Typography
										fontSize="16px"
										fontWeight={600}
										fontFamily="Poppins"
									>
										{t("chairperson")}
									</Typography>

									<Typography
										width="100%"
										fontSize="16px"
										fontFamily="Poppins"
										fontWeight={500}
										color="primary"
										textAlign="center"
									>
										{ketuaUmumList[current].name}
									</Typography>

									{current === currentChairman && (
										<Typography
											fontSize="12px"
											fontWeight={500}
											fontFamily="Poppins"
											color="green"
											sx={{
												backgroundColor: "#E0F7FA",
												padding: "2px 8px",
												borderRadius: "8px",
												mt: "4px",
											}}
										>
											{t("current")}
										</Typography>
									)}

									<Typography
										fontSize="14px"
										width="100%"
										textAlign="center"
										fontFamily="Poppins"
									>
										{locale === "en"
											? `${
													Array.isArray(ketuaUmumList[current].periods)
														? ketuaUmumList[current].periods
																.map((p) => getOrdinal(p))
																.join(", ")
														: getOrdinal(ketuaUmumList[current].periods)
											  } Term`
											: `Periode ke-${
													Array.isArray(ketuaUmumList[current].periods)
														? ketuaUmumList[current].periods.join(", ")
														: ketuaUmumList[current].periods
											  } (${ketuaUmumList[current].years})`}
									</Typography>

									<Typography
										fontFamily="Poppins"
										fontSize="14px"
										width="100%"
										textAlign="center"
									>
										{Array.isArray(ketuaUmumList[current].years)
											? ketuaUmumList[current].years.join(", ")
											: ketuaUmumList[current].years}
									</Typography>

									<Typography
										fontSize="14px"
										fontWeight={400}
										fontFamily="Poppins"
										width="100%"
										textAlign="center"
									>
										{t("alumni")} : {ketuaUmumList[current].alumni}
									</Typography>
								</Box>
							</TeamsCardCurrent>
						</motion.div>
					</AnimatePresence>
					<Box
						sx={{
							display: medium ? "none" : "block",
						}}
					>
						<IconButton onClick={next}>
							<ChevronRight />
						</IconButton>
					</Box>
				</Box>

					<TeamsGrid>
						{ketuaUmumList.map((ketua, index) => (
							<TeamsCard
								key={index}
								onClick={() => setCurrent(index)}
								style={{
									cursor: "pointer",
									backgroundColor:
										index === current
											? alpha(theme.palette.primary.main, 0.2)
											: undefined,
								}}
							>
								<Avatar
									src={ketua.image}
									alt={ketua.name}
									sx={{
										width: large ? 60 : medium ? 50 : 40,
										height: large ? 60 : medium ? 50 : 40,
										marginRight: "12px",
									}}
								/>
								<Box
									display={"flex"}
									flexDirection="column"
									gap="4px"
									width={"100%"}
									alignItems={"flex-start"}
								>
									<Typography fontSize="14px" fontFamily="Poppins">
										{ketua.name.split(",")[0]}
									</Typography>
									<Typography fontFamily={"Poppins"} fontSize="12px">
										{locale === "en"
											? `${
													Array.isArray(ketua.periods)
														? ketua.periods.map((p) => getOrdinal(p)).join(", ")
														: getOrdinal(ketua.periods)
											  } Term General Chairperson`
											: `Ketua Umum Periode ke-${
													Array.isArray(ketua.periods)
														? ketua.periods.join(", ")
														: ketua.periods
											  }`}
									</Typography>
									<Typography fontSize="12px" fontFamily="Poppins">
										{Array.isArray(ketua.years)
											? ketua.years.join(", ")
											: ketua.years}
									</Typography>
								</Box>
							</TeamsCard>
						))}
					</TeamsGrid>
			</TeamsWrapper>
		</Box>
	);
};
