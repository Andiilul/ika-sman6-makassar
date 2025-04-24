"use client";

import {
	Box,
	TextField,
	MenuItem,
	InputAdornment,
	Select,
	FormControl,
	InputLabel,
  SelectChangeEvent,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface AlumniSearchProps {
	onSearch: (query: string) => void;
	onFilterYear: (year: string) => void;
	onFilterLocation: (location: string) => void;
	graduationYears: number[];
}

export const AlumniSearch: React.FC<AlumniSearchProps> = ({
	onSearch,
	onFilterYear,
	onFilterLocation,
	graduationYears,
}) => {
	const [searchText, setSearchText] = useState("");
	const [selectedYear, setSelectedYear] = useState("");
	const [selectedLocation, setSelectedLocation] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchText(value);
		onSearch(value);
	};
	const handleYearChange = (e: SelectChangeEvent<string>) => {
		const year = e.target.value;
		setSelectedYear(year);
		onFilterYear(year);
	};

	const handleLocationChange = (e: SelectChangeEvent<string>) => {
		const location = e.target.value;
		setSelectedLocation(location);
		onFilterLocation(location);
	};


  
	return (
		<Box
			display="grid"
      gridTemplateColumns={"repeat(3, 1fr)"}
			gap={2}
			width="100%"
		>
			<TextField
				placeholder="Cari nama alumni..."
				fullWidth
				value={searchText}
				onChange={handleSearch}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>

			<FormControl fullWidth>
				<InputLabel>Tahun Lulus</InputLabel>
				<Select
					value={selectedYear}
					label="Tahun Lulus"
					onChange={handleYearChange}
				>
					<MenuItem value="">Semua Tahun</MenuItem>
					{graduationYears.map((year) => (
						<MenuItem key={year} value={year.toString()}>
							{year}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			<FormControl fullWidth>
				<InputLabel>Lokasi</InputLabel>
				<Select
					value={selectedLocation}
					label="Lokasi"
					onChange={handleLocationChange}
				>
					<MenuItem value="">Semua Lokasi</MenuItem>
					<MenuItem value="Makassar">Makassar</MenuItem>
					<MenuItem value="Luar Makassar">Luar Makassar</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
