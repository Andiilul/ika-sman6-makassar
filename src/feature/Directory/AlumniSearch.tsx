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
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, FilterList } from "@mui/icons-material";
import { useTranslations } from "next-intl";

interface AlumniSearchProps {
	onSearch: (val: string) => void;
	onApplyFilters: (year: string, location: string) => void;
	initialSearch: string;
	initialYear: string;
	initialLocation: "makassar" | "non-makassar" | "";
}

export const AlumniSearch: React.FC<AlumniSearchProps> = ({
	onSearch,
	onApplyFilters,
	initialSearch,
	initialYear,
	initialLocation,
}) => {
	const [searchText, setSearchText] = useState(initialSearch);
	const [year, setYear] = useState(initialYear);
	const [selectedLocation, setSelectedLocation] = useState<
		"makassar" | "non-makassar" | ""
	>(initialLocation);
	const t = useTranslations("DirectoryPage");
	const tglobal = useTranslations("Global");

	const [showFilter, setShowFilter] = useState<boolean>(false);

	const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setYear(e.target.value);
	};

	const handleLocationChange = (e: SelectChangeEvent) => {
		const value = e.target.value as "makassar" | "non-makassar" | "";
		setSelectedLocation(value);
	};

	const handleApply = () => {
		onApplyFilters(year, selectedLocation);
	};

	const handleReset = () => {
		setYear("");
		setSelectedLocation("");
		onApplyFilters("", "");
	};

	// Clear search input and trigger search with empty keyword
	const handleClearSearch = () => {
		setSearchText("");
		onSearch("");
	};

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<Box display={"flex"} flexDirection="column" marginY={"16px"}>
			<Box display="flex" gap="16px" width="100%" alignItems="center">
				<Box
					display="flex"
					gap="16px"
					width="100%"
					maxWidth="320px"
					position="relative"
				>
					<TextField
						placeholder={`${t("search")}...`}
						fullWidth
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<SearchIcon />
								</InputAdornment>
							),
							endAdornment: searchText ? (
								<InputAdornment position="end" sx={{ cursor: "pointer" }}>
									<ClearIcon onClick={handleClearSearch} />
								</InputAdornment>
							) : null,
						}}
					/>

					<Button variant="outlined" onClick={() => onSearch(searchText)}>
						{tglobal("search")}
					</Button>
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
								label={t("filter1")}
								size={large ? "medium" : "small"}
								fullWidth
								value={year}
								onChange={handleYearChange}
							/>
							<FormControl fullWidth size={large ? "medium" : "small"}>
								<InputLabel>{t("filter2")}</InputLabel>
								<Select
									value={selectedLocation}
									label="Lokasi"
									onChange={handleLocationChange}
								>
									<MenuItem value="">Semua Lokasi</MenuItem>
									<MenuItem value="makassar">Makassar</MenuItem>
									<MenuItem value="non-makassar">{t("nonmks")}</MenuItem>
								</Select>
							</FormControl>
							<Button variant="outlined" onClick={handleApply}>
								{tglobal("apply")}
							</Button>
						</Box>
					</motion.div>
				)}
			</AnimatePresence>
		</Box>
	);
};
