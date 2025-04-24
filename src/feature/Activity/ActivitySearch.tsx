"use client";

import {
	Box,
	TextField,
	MenuItem,
	FormControl,
	InputLabel,
	Select,
	SelectChangeEvent,
	InputAdornment,
	Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

interface ActivitySearchProps {
	onSearch: (query: string) => void;
	onCategoryFilter: (category: string) => void;
	onDateRangeChange: (startDate: string, endDate: string) => void;
}

export const ActivitySearch: React.FC<ActivitySearchProps> = ({
	onSearch,
	onCategoryFilter,
	onDateRangeChange,
}) => {
	const [searchText, setSearchText] = useState("");
	const [category, setCategory] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchText(value);
		onSearch(value);
	};

	const handleReset = () => {
		setSearchText("");
		setCategory("");
		setStartDate("");
		setEndDate("");

		onSearch("");
		onCategoryFilter("");
		onDateRangeChange("", "");
	};

	const handleCategoryChange = (e: SelectChangeEvent<string>) => {
		const value = e.target.value;
		setCategory(value);
		onCategoryFilter(value);
	};

	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setStartDate(value);
		onDateRangeChange(value, endDate);
	};

	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setEndDate(value);
		onDateRangeChange(startDate, value);
	};

	return (
		<Box
			display="grid"
			gridTemplateColumns="repeat(2, 1fr)"
			gap={2}
			width="100%"
		>
			<Box display={"flex"} gap={"16px"}>
				<TextField
					placeholder="Cari judul kegiatan..."
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
					<InputLabel>Kategori</InputLabel>
					<Select
						value={category}
						label="Kategori"
						onChange={handleCategoryChange}
					>
						<MenuItem value="">Semua Kategori</MenuItem>
						<MenuItem value="Reuni">Reuni</MenuItem>
						<MenuItem value="Bakti Sosial">Bakti Sosial</MenuItem>
						<MenuItem value="Seminar">Seminar</MenuItem>
						<MenuItem value="Olahraga">Olahraga</MenuItem>
						<MenuItem value="Lainnya">Lainnya</MenuItem>
					</Select>
				</FormControl>
			</Box>

			<Box display={"flex"} gap={"16px"}>
				<TextField
					type="date"
					label="Dari Tanggal"
					InputLabelProps={{ shrink: true }}
					fullWidth
					value={startDate}
					onChange={handleStartDateChange}
				/>
				<TextField
					type="date"
					label="Sampai Tanggal"
					InputLabelProps={{ shrink: true }}
					fullWidth
					value={endDate}
					onChange={handleEndDateChange}
				/>
				<Button variant="outlined" onClick={handleReset}>
					Reset
				</Button>{" "}
			</Box>
		</Box>
	);
};
