"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { ActivityGridContainer } from "./styled";
import activitydata from "@/mock/activity-mock-data-ts";
import { useState, useMemo, useEffect } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { ActivityContainer } from "./styled";
import { IActivity } from "@/interfaces/Kegiatan";
import { ActivitySearch } from "./ActivitySearch"; // Sesuaikan path
import { ActivityCard } from "./ActivityCard";

const activity: IActivity[] = activitydata;

export const Activity: React.FC = () => {
	const theme = useTheme();
	// Form state
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("");
	const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);

	// Debounce value
	const [debouncedSearch, setDebouncedSearch] = useState("");

	// Debounce logic (500ms delay)
	useEffect(() => {
		const timeout = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);

		return () => clearTimeout(timeout);
	}, [search]);

	// Filtering logic
	const filteredActivity = useMemo(() => {
		return activity.filter((item) => {
			const matchTitle = item.title
				.toLowerCase()
				.includes(debouncedSearch.toLowerCase());

			const matchCategory = category ? item.category === category : true;

			const matchDate =
				dateRange[0] && dateRange[1]
					? new Date(item.date) >= new Date(dateRange[0]) &&
					  new Date(item.date) <= new Date(dateRange[1])
					: true;

			return matchTitle && matchCategory && matchDate;
		});
	}, [debouncedSearch, category, dateRange]);

	return (
		<FlexBox flexDirection="column">
			<PageHeader title="Kegiatan" />

			<PageLayout>
				<ActivityContainer>
					{/* Section Header */}
					<Box display="flex" gap="16px">
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
					<Box width={"100%"}>
						<ActivitySearch
							onSearch={setSearch}
							onCategoryFilter={setCategory}
							onDateRangeChange={(start, end) => setDateRange([start, end])}
						/>
					</Box>

					{/* Result */}
						<ActivityGridContainer>
							{filteredActivity.length === 0 ? (
								<Typography>Tidak ada kegiatan yang cocok.</Typography>
							) : (
								filteredActivity.map((act, index) => (
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
