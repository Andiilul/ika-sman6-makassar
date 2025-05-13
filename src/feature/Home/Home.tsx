"use client";

import { Hero } from "./Hero";
import { PageLayout } from "@/components/Page";
// import { AboutHome } from "./AboutHome";
// import { JoinUs } from "./JoinUJs";
import { Box, useMediaQuery } from "@mui/material";
import { AboutHome } from "./AboutHome";
import { ActivityHome } from "./ActivityHome";
import { JoinUs } from "./JoinUJs";
// import { ActivityHome } from "./ActivityHome";

export const Home: React.FC = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	return (
		<Box
			gap={large ? "64px" : medium ? "32px" : "16px"}
			display={"flex"}
			flexDirection={"column"}
		>
			<Hero />
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
	);
};

export default Home;
