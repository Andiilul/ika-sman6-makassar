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
import { Box, Typography } from "@mui/material";

export const Directory: React.FC = () => {
	const [hover, setHover] = useState<number | null>(null);
	const [search, setSearch] = useState("");
	const [filterYear, setFilterYear] = useState("");
	const [filterLocation, setFilterLocation] = useState("");
	const [debouncedSearch, setDebouncedSearch] = useState("");
	const [alumni, setAlumni] = useState<IAlumni[]>([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);
		return () => clearTimeout(handler);
	}, [search]);

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

	return (
		<FlexBox flexDirection="column">
			<PageHeader title="Direktori" />
			<PageLayout>
				<DirectoryContainer>
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
								DIREKTORI ALUMNI
							</Typography>
							<Typography fontSize="32px" fontWeight={600}>
								Daftar Alumni IKA SMA 6 MAKASSAR
							</Typography>
						</Box>
					</Box>

					<Box mt={4}>
						<AlumniSearch
							onSearch={setSearch}
							onFilterYear={setFilterYear}
							onFilterLocation={setFilterLocation}
						/>
					</Box>

					<AlumniGridContainer>
						{loading ? (
							<Typography>Loading...</Typography>
						) : alumni.length === 0 ? (
							<Typography>Tidak ada alumni yang cocok.</Typography>
						) : (
							alumni.map((alum, index) => (
								<AlumniCard
									key={index}
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
