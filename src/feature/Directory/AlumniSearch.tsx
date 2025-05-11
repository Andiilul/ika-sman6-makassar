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
	onSearch: (val: string) => void;
	onFilterYear: (val: string) => void;
	onFilterLocation: (val: string) => void;
}

export const AlumniSearch: React.FC<AlumniSearchProps> = ({
	onSearch,
	onFilterYear,
	onFilterLocation,
}) => {
	const [searchText, setSearchText] = useState("");
	const [year, setYear] = useState("");
	const [selectedLocation, setSelectedLocation] = useState<
		"makassar" | "non-makassar" | ""
	>("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchText(value);
		onSearch(value);
	};

	const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setYear(value);
		onFilterYear(value);
	};
	const handleLocationChange = (e: SelectChangeEvent) => {
		const value = e.target.value as "makassar" | "non-makassar" | "";
		setSelectedLocation(value);
		onFilterLocation(value);
	};

	return (
		<Box
			display="grid"
			gridTemplateColumns="repeat(3, 1fr)"
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
			<TextField
				placeholder="Tahun Kelulusan"
				type="number"
				fullWidth
				value={year}
				onChange={handleYearChange}
			/>
			<FormControl fullWidth>
				<InputLabel>Lokasi</InputLabel>
				<Select
					value={selectedLocation}
					label="Lokasi"
					onChange={handleLocationChange}
				>
					<MenuItem value="">Semua Lokasi</MenuItem>
					<MenuItem value="makassar">Makassar</MenuItem>
					<MenuItem value="non-makassar">Luar Makassar</MenuItem>
				</Select>
			</FormControl>
		</Box>
	);
};
