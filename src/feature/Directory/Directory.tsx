"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { AlumniGridContainer, DirectoryContainer } from "./styled";
import { AlumniCard } from "./AlumniCard";
import { AlumniSearch } from "./AlumniSearch";
import { IAlumni } from "@/interfaces/Alumni";
import { useState, useEffect } from "react";
import theme from "@/constants/theme/theme";
import { Box, Typography, useMediaQuery } from "@mui/material";

export const Directory: React.FC = () => {
	const [hover, setHover] = useState<number | null>(null);
	const [search, setSearch] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [filterYear, setFilterYear] = useState("");
	const [filterLocation, setFilterLocation] = useState("");

	const [alumni, setAlumni] = useState<IAlumni[]>([]);
	const [loading, setLoading] = useState(false);

	// debounce khusus search
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);
		return () => clearTimeout(handler);
	}, [search]);

	// fetch data saat search OR filterYear OR filterLocation berubah
	useEffect(() => {
		const fetchAlumni = async () => {
			setLoading(true);
			try {
				const params = new URLSearchParams();
				if (debouncedSearch) params.append("keyword", debouncedSearch);
				if (filterYear) params.append("gradYear", filterYear);
				if (filterLocation) params.append("location", filterLocation);

				const res = await fetch(`/api/alumni?${params.toString()}`);
				if (!res.ok) {
					throw new Error(`API error: ${res.status}`);
				}
				const data = await res.json();
				setAlumni(data);
			} catch (error) {
				console.error("Failed to fetch alumni:", error);
			} finally {
				setLoading(false);
			}
		};
		fetchAlumni();
	}, [debouncedSearch, filterYear, filterLocation]);

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<FlexBox flexDirection="column">
			<PageHeader title="Direktori" />
			<PageLayout>
				<DirectoryContainer>
					{/* Heading */}
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
								DIREKTORI ALUMNI
							</Typography>
							<Box display="flex" flexDirection="column" gap="4px">
								{large ? (
									<>
										<Typography
											fontSize="36px"
											lineHeight="36px"
											fontWeight={600}
										>
											Daftar Alumni SMAN 6 Makassar
										</Typography>
									</>
								) : (
									<Typography
										fontSize={medium ? "30px" : "24px"}
										lineHeight={medium ? "30px" : "24px"}
										fontWeight={600}
									>
										Daftar Alumni SMAN 6 Makassar
									</Typography>
								)}
							</Box>
						</Box>
					</FlexBox>

					{/* Search & Filter */}
					<Box mt={4}>
						<AlumniSearch
							onSearch={setSearch}
							onFilterYear={setFilterYear}
							onFilterLocation={setFilterLocation}
						/>
					</Box>

					{/* Grid Result */}
					<AlumniGridContainer>
						{loading ? (
							<Typography>Loading...</Typography>
						) : alumni.length === 0 ? (
							<Typography>Tidak ada alumni yang cocok.</Typography>
						) : (
							alumni.map((alum,index) => (
								<AlumniCard
									key={alum.id}
									index={index}
									hover={hover}
									setHover={setHover}
									alumni={alum}
								/>
							))
						)}
					</AlumniGridContainer>
				</DirectoryContainer>
			</PageLayout>
		</FlexBox>
	);
};

export default Directory;
