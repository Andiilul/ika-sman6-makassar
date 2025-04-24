"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { AlumniGridContainer } from "./styled";
import { AlumniCard } from "./AlumniCard";
import alumniData from "@/mock/alumni-mock-data-ts";
import { IAlumni } from "@/interfaces/Alumni";
import { useState, useMemo, useEffect } from "react";
import theme from "@/constants/theme/theme";
import { Box, Typography } from "@mui/material";
import { DirectoryContainer } from "./styled";
import { AlumniSearch } from "./AlumniSearch"; // Import komponen search/filter

const alumni: IAlumni[] = alumniData;

export const Directory: React.FC = () => {
	const [hover, setHover] = useState<number | null>(null);
	const [search, setSearch] = useState("");
	const [filterYear, setFilterYear] = useState("");
	const [filterLocation, setFilterLocation] = useState("");

	const graduationYears = useMemo(() => {
		const years = alumni.map((a) => a.graduationYear.year);
		return Array.from(new Set(years)).sort((a, b) => b - a);
	}, []);

	const [debouncedSearch, setDebouncedSearch] = useState("");

	// Delay 300ms setelah user berhenti mengetik
	useEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedSearch(search);
		}, 500);

		return () => clearTimeout(handler);
	}, [search]);


	const filteredAlumni = useMemo(() => {
		return alumni.filter((a) => {
			const matchName = a.fullName
				.toLowerCase()
				.includes(debouncedSearch.toLowerCase());
			const matchYear = filterYear
				? a.graduationYear.year.toString() === filterYear
				: true;
			const matchLocation = filterLocation
				? a.location === filterLocation
				: true;
			return matchName && matchYear && matchLocation;
		});
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
							onSearch={(val) => setSearch(val)}
							onFilterYear={(val) => setFilterYear(val)}
							onFilterLocation={(val) => setFilterLocation(val)}
							graduationYears={graduationYears}
						/>
					</Box>

					<AlumniGridContainer>
						{filteredAlumni.map((alumni, index) => (
							<AlumniCard
								key={index}
								index={index}
								hover={hover}
								setHover={setHover}
								alumni={alumni}
							/>
						))}
					</AlumniGridContainer>
				</DirectoryContainer>
			</PageLayout>
		</FlexBox>
	);
};

export default Directory;
