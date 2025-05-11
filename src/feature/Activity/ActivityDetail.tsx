"use client";

import { useMemo } from "react";
import { IActivity } from "@/interfaces/Kegiatan";
import activityData from "@/mock/activity-mock-data-ts"; // pastikan ini import datanya
import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import { ActivityDetailContainer, ActivityDetailWrapper } from "./styled";
import { PageLayout } from "@/components/Page";
import { NotFound } from "../NotFound";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

interface ActivityDetailProps {
	id: string;
}

export const ActivityDetail: React.FC<ActivityDetailProps> = ({ id }) => {
	const activity: IActivity | undefined = useMemo(() => {
		return activityData.find((item) => item.id === id);
	}, [id]);

	const theme = useTheme();

	if (!activity) {
		return <NotFound statusCode="204" />;
	}

	return (
		<PageLayout>
			<ActivityDetailWrapper>
				<ActivityDetailContainer>
					<Box
						display={"flex"}
						flexDirection={"column"}
						gap={"16px"}
						bgcolor={theme.palette.background.paper}
						p={2}
					>
						<Typography>{activity.title}</Typography>
						<Box display={"flex"} gap={"8px"} alignItems={"center"}>
							<CalendarMonthIcon />
							<strong>Tanggal:</strong>{" "}
							{new Date(activity.date).toLocaleDateString("id-ID")}
						</Box>
						<p>
							<strong>Lokasi:</strong> {activity.location}
						</p>
						<p>
							<strong>Kategori:</strong> {activity.activity_type}
						</p>
						<p>
							<strong>Deskripsi:</strong> {activity.description}
						</p>
						<Box sx={{ position: "relative", width: "100%", height: "300px" }}>
							<Image
								src={"/images/test-hero.webp"}
								alt={activity.title}
								fill
								style={{
									width: "100%",
									maxWidth: "600px",
									borderRadius: "8px",
									marginTop: "16px",
								}}
							/>
						</Box>
					</Box>
				</ActivityDetailContainer>
				<Box></Box>
			</ActivityDetailWrapper>
		</PageLayout>
	);
};
