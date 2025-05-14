"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { ActivityGridContainer } from "./styled";
import { useState, useEffect } from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { ActivityContainer } from "./styled";
import { IActivity } from "@/interfaces/Kegiatan";
import { ActivityCard } from "./ActivityCard";
import { ActivitySearch } from "./ActivitySearch";

export const Activity: React.FC = () => {
	const theme = useTheme();

	// State
	const [search, setSearch] = useState("");
	// const [dateRange, setDateRange] = useState<[string, string]>(["", ""]);
	const [activities, setActivities] = useState<IActivity[]>([]);
	const [loading, setLoading] = useState(false);

	const [filterApply, setFilterApply] = useState<[string, string]>(["", ""]);

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
				if (filterApply[0]) params.append("minDate", filterApply[0]);
				if (filterApply[1]) params.append("maxDate", filterApply[1]);

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
	}, [debouncedSearch, filterApply]); // ✅ Remove dateRange, use filterApply

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<FlexBox flexDirection="column">
			<PageHeader title="Kegiatan" />
			<PageLayout>
				<ActivityContainer>
					{/* Section Header */}
					<FlexBox>
						<Box
							display={medium ? "flex" : "none"}
							gap={"2px"}
							flexDirection={"column"}
						>
							<Box
								sx={{
									width: "12px",
									height: "4px",
									backgroundColor: theme.palette.primary.main,
								}}
							></Box>
							<Box
								sx={{
									width: "12px",
									height: "4px",
									backgroundColor: theme.palette.primary.main,
								}}
							></Box>
							<Box
								sx={{
									width: "12px",
									flex: "1",
									background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
								}}
							></Box>
						</Box>

						<Box
							display={"flex"}
							gap={"8px"}
							padding={"12px 0"}
							flexDirection={"column"}
						>
							<Typography fontSize={"14px"} fontWeight={600} color="secondary">
								KEGIATAN IKA SMAN 6 MAKASSAR
							</Typography>
							<Box display="flex" flexDirection="column" gap="4px">
								{large ? (
									<>
										<Typography
											fontSize="36px"
											lineHeight="36px"
											fontWeight={600}
										>
											Daftar Kegiatan
										</Typography>
									</>
								) : (
									<Typography
										fontSize={medium ? "30px" : "24px"}
										lineHeight={medium ? "30px" : "24px"}
										fontWeight={600}
									>
										Daftar Kegiatan
									</Typography>
								)}
							</Box>
						</Box>
					</FlexBox>

					{/* Search & Filter */}
					<Box width={"100%"} mb={3}>
						<ActivitySearch
							onSearch={setSearch}
							onDateRangeChange={(start, end) => setFilterApply([start, end])}
						/>
					</Box>

					{/* Result */}
					<ActivityGridContainer>
						{loading ? (
							<Typography>Loading...</Typography>
						) : activities.length === 0 ? (
							<Typography>Tidak ada kegiatan yang cocok.</Typography>
						) : (
							activities.map((act) => (
								<>
									<ActivityCard key={act.id} activity={act} />
								</>
							))
						)}
					</ActivityGridContainer>
				</ActivityContainer>
			</PageLayout>
		</FlexBox>
	);
};

export default Activity;
