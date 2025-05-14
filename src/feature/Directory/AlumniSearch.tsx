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
	Button,
	Typography,
	useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, FilterList } from "@mui/icons-material";

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

	const [showFilter, setShowFilter] = useState<boolean>(false);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchText(value);
		onSearch(value);
	};

	const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setYear(e.target.value);
	};

	const handleLocationChange = (e: SelectChangeEvent) => {
		const value = e.target.value as "makassar" | "non-makassar" | "";
		setSelectedLocation(value);
	};

	const handleApply = () => {
		onFilterYear(year);
		onFilterLocation(selectedLocation);
	};

	const handleReset = () => {
		setYear("");
		setSelectedLocation("");
		onFilterYear("");
		onFilterLocation("");
	};

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<>
			<Box display="flex" gap="16px" width="100%" alignItems="center">
				<Box display="flex" gap="16px" width="100%" maxWidth="320px">
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
				</Box>

				<Box display="flex" height="100%">
					<Button
						variant="outlined"
						sx={{ height: "56px", display: "flex", gap: "8px" }}
						onClick={() => setShowFilter(!showFilter)}
					>
						<Typography fontFamily="Poppins" textTransform="none">
							Filter
						</Typography>
						{!showFilter ? (
							<FilterList sx={{ fontSize: "16px" }} />
						) : (
							<Close sx={{ fontSize: "16px" }} />
						)}
					</Button>
				</Box>
			</Box>

			<AnimatePresence>
				{showFilter && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<Box
							marginTop="16px"
							display="flex"
							width="100%"
							justifyContent="space-between"
						>
							<Typography>Filter :</Typography>
							<Button onClick={handleReset}>Reset</Button>
						</Box>

						<Box
							display="flex"
							flexDirection={medium ? "row" : "column"}
							gap="16px"
							mt={2}
						>
							<TextField
								type="number"
								label="Tahun Kelulusan"
								size={large ? "medium" : "small"}
								fullWidth
								value={year}
								onChange={handleYearChange}
							/>
							<FormControl fullWidth size={large ? "medium" : "small"}>
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
							<Button variant="outlined" onClick={handleApply}>
								Apply
							</Button>
						</Box>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
