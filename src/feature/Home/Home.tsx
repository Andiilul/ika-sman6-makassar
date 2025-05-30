"use client";

import { Hero } from "./Hero";
import { PageLayout } from "@/components/Page";
// import { AboutHome } from "./AboutHome";
// import { JoinUs } from "./JoinUJs";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import { AboutHome } from "./AboutHome";
import { ActivityHome } from "./ActivityHome";
import { JoinUs } from "./JoinUs";
import { Welcome } from "./Welcome";
// import { ActivityHome } from "./ActivityHome";

export const Home: React.FC = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const theme = useTheme();
	return (
		<Box display={"flex"} flexDirection={"column"}>
			<Hero />
			<Box
				gap={large ? "64px" : medium ? "32px" : "16px"}
				display={"flex"}
				flexDirection={"column"}
			>
				<PageLayout color={theme.palette.background.paper}>
					<Welcome />
				</PageLayout>
				<PageLayout>
					<Box display={"flex"} gap={"32px"} flexDirection={"column"}>
						<AboutHome />
					</Box>
				</PageLayout>
				<PageLayout>
					<ActivityHome />
				</PageLayout>
				<Box>
					<JoinUs />
				</Box>
			</Box>
		</Box>
	);
};

export default Home;
