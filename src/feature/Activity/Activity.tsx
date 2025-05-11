"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { ActivityGridContainer } from "./styled";
import { useState, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ActivityContainer } from "./styled";
import { IActivity } from "@/interfaces/Kegiatan";
import { ActivitySearch } from "./ActivitySearch";
import { ActivityCard } from "./ActivityCard";

export const Activity: React.FC = () => {
	const theme = useTheme();

	// State
	const [search, setSearch] = useState("");
	const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);
	const [activities, setActivities] = useState<IActivity[]>([]);
	const [loading, setLoading] = useState(false);

	// Debounced search
	const [debouncedSearch, setDebouncedSearch] = useState("");
	useEffect(() => {
		const timeout = setTimeout(() => setDebouncedSearch(search), 500);
		return () => clearTimeout(timeout);
	}, [search]);

	// Fetch data when search or date range changes
	useEffect(() => {
		const fetchActivities = async () => {
			setLoading(true);
			try {
				const params = new URLSearchParams();
				if (debouncedSearch) params.append("keyword", debouncedSearch);
				if (dateRange[0]) params.append("minDate", dateRange[0]);
				if (dateRange[1]) params.append("maxDate", dateRange[1]);

				const res = await fetch(`/api/activity?${params.toString()}`);
				const data = await res.json();
				setActivities(data);
			} catch (error) {
				console.error("Failed to fetch activities:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchActivities();
	}, [debouncedSearch, dateRange]);

	return (
		<FlexBox flexDirection="column">
			<PageHeader title="Kegiatan" />
			<PageLayout>
				<ActivityContainer>
					{/* Section Header */}
					<Box display="flex" gap="16px" mb={2}>
						<Box display="flex" gap="2px" flexDirection="column">
							<Box
								sx={{
									width: "12px",
									height: "4px",
									backgroundColor: theme.palette.primary.main,
								}}
							/>
							<Box
								sx={{
									width: "12px",
									height: "4px",
									backgroundColor: theme.palette.primary.main,
								}}
							/>
							<Box
								sx={{
									width: "12px",
									height: "90px",
									background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
								}}
							/>
						</Box>
						<Box
							display="flex"
							flexDirection="column"
							justifyContent="center"
							gap="4px"
						>
							<Typography fontSize="16px" fontWeight={600} color="secondary">
								Kegiatan IKA SMA 6
							</Typography>
							<Typography fontSize="32px" fontWeight={600}>
								Daftar Kegiatan
							</Typography>
						</Box>
					</Box>

					{/* Search & Filter */}
					<Box width={"100%"} mb={3}>
						<ActivitySearch
							onSearch={setSearch}
							onDateRangeChange={(start, end) => setDateRange([start, end])}
						/>
					</Box>

					{/* Result */}
					<ActivityGridContainer>
						{loading ? (
							<Typography>Loading...</Typography>
						) : activities.length === 0 ? (
							<Typography>Tidak ada kegiatan yang cocok.</Typography>
						) : (
							activities.map((act, index) => (
								<ActivityCard key={index} activity={act} />
							))
						)}
					</ActivityGridContainer>
				</ActivityContainer>
			</PageLayout>
		</FlexBox>
	);
};

export default Activity;
