"use client";

import { Hero } from "./Hero";
import { PageLayout } from "@/components/Page";
// import { AboutHome } from "./AboutHome";
// import { JoinUs } from "./JoinUJs";
import { alpha, Box, useTheme } from "@mui/material";
// import { ActivityHome } from "./ActivityHome";

export const Home: React.FC = () => {
	
	const theme = useTheme();
	return (
		<Box
			gap={"64px"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Hero />
			<PageLayout>
				<Box display={"flex"} gap={"32px"} flexDirection={"column"}>
					{/* <AboutHome /> */}
				</Box>
			</PageLayout>
			<PageLayout color={alpha(theme.palette.primary.light, 0.05)}>
				{/* <ActivityHome /> */}
			</PageLayout>
			<PageLayout>
				{/* <JoinUs /> */}
			</PageLayout>
		</Box>
	);
};

export default Home;
