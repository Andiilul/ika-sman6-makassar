"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { Box } from "@mui/material";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";

export const Activity: React.FC = () => {
	return (
		<FlexBox flexDirection={"column"}>
			<PageHeader title="Kegiatan" />

			<PageLayout>
				<Box>asdas</Box>
				<Box>asdas</Box>
				<Box>asdas</Box>
				<Box>asdas</Box>
				<Box>asdas</Box>
			</PageLayout>
		</FlexBox>
	);
};

export default Activity;
