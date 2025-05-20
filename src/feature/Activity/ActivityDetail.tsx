"use client";

import { useEffect, useState } from "react";
import { IActivity } from "@/interfaces/Kegiatan";
import Image from "next/image";
import { Box, Typography, useTheme, CircularProgress } from "@mui/material";
import {
	ActivityDetailContainer,
	ActivityDetailWrapper,
	ActivityImageContainer,
} from "./styled";
import { PageLayout } from "@/components/Page";
import { NotFound } from "../NotFound";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { directusImageLoader } from "@/components/DirectusImage/DirectusImageLoader";
import ReactMarkdown from "react-markdown";

interface ActivityDetailProps {
	id: string;
}

export const ActivityDetail: React.FC<ActivityDetailProps> = ({ id }) => {
	const theme = useTheme();

	const [activity, setActivity] = useState<IActivity | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const fetchActivity = async () => {
			try {
				const res = await fetch(`/api/activity/${id}`);
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				setActivity(data);
			} catch (err) {
				console.error("Failed to fetch activity:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchActivity();
	}, [id]);

	if (loading) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="300px"
			>
				<CircularProgress />
			</Box>
		);
	}

	if (error || !activity) {
		return <NotFound statusCode="404" />;
	}

	return (
		<PageLayout>
			<ActivityDetailWrapper>
				{activity.imageURL && (
					<ActivityImageContainer>
				<Image
					loader={directusImageLoader}
					src={activity.imageURL ?? ""}
					alt={activity.title}
					fill
					style={{
						objectFit: "cover",
					}}
				/>
					</ActivityImageContainer>
				)}

				<ActivityDetailContainer>
					<Box
						display={"flex"}
						gap="8px"
						flexDirection={"column"}
						width={"100%"}
					>
						<Typography variant="h5" fontWeight={600}>
							{activity.title}
						</Typography>
						<Box display="flex" gap="8px" alignItems="center">
							<CalendarMonthIcon
								sx={{
									color: theme.palette.secondary.light,
								}}
								fontSize="small"
							/>
							<Typography color={theme.palette.secondary.light} variant="body2">
								<strong>Tanggal:</strong>{" "}
								{new Date(activity.date).toLocaleDateString("id-ID")}
							</Typography>
						</Box>

						<Typography variant="body2">
							<strong>Lokasi:</strong> {activity.location}
						</Typography>
					</Box>

					<Box>
						<Typography variant="body2" fontWeight={600} mb={1}>
							Deskripsi:
						</Typography>
						<ReactMarkdown
							components={{
								h1: ({ children }) => (
									<Typography variant="h4" fontWeight={600}>
										{children}
									</Typography>
								),
								h2: ({ children }) => (
									<Typography variant="h5" fontWeight={600}>
										{children}
									</Typography>
								),
								h3: ({ children }) => (
									<Typography variant="h6" fontWeight={600}>
										{children}
									</Typography>
								),
								p: ({ children }) => (
									<Typography variant="body2" paragraph>
										{children}
									</Typography>
								),
								a: ({ href, children }) => (
									<Typography
										component="a"
										href={href}
										color="primary.main"
										sx={{ textDecoration: "underline" }}
									>
										{children}
									</Typography>
								),
								ul: ({ children }) => (
									<Box component="ul" sx={{ pl: 2 }}>
										{children}
									</Box>
								),
								li: ({ children }) => (
									<Typography component="li" variant="body2">
										{children}
									</Typography>
								),
							}}
						>
							{activity.description}
						</ReactMarkdown>
					</Box>
				</ActivityDetailContainer>
			</ActivityDetailWrapper>
		</PageLayout>
	);
};
