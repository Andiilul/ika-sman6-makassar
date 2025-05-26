"use client";

import {
	Box,
	TextField,
	Button,
	InputAdornment,
	Typography,
	useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, FilterList } from "@mui/icons-material";
import { useTranslations } from "next-intl";

interface ActivitySearchProps {
	onSearch: (query: string) => void;
	onDateRangeChange: (startDate: string, endDate: string) => void;
	initialSearch: string;
	initialStartDate: string;
	initialEndDate: string;
}

export const ActivitySearch: React.FC<ActivitySearchProps> = ({
	onSearch,
	onDateRangeChange,
	initialSearch,
	initialStartDate,
	initialEndDate,
}) => {
	const [searchText, setSearchText] = useState(initialSearch || "");
	const [startDate, setStartDate] = useState(initialStartDate || "");
	const [endDate, setEndDate] = useState(initialEndDate || "");
	const [showFilter, setShowFilter] = useState<boolean>(false);

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const t = useTranslations("ActivitiesPage");
	const tglobal = useTranslations("Global");

	const handleApply = () => {
		onDateRangeChange(startDate, endDate);
	};

	const handleReset = () => {
		setStartDate("");
		setEndDate("");
		setSearchText("");
		onSearch("");
		onDateRangeChange("", "");
	};

	const handleSearchClick = () => {
		onSearch(searchText);
	};

	const handleClearSearch = () => {
		setSearchText("");
		onSearch("");
	};

	return (
		<>
			<Box
				display="flex"
				gap="16px"
				width="100%"
				height="56px"
				alignItems="center"
			>
				<Box display="flex" gap="16px" width="100%" maxWidth="320px">
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
							endAdornment: searchText && (
								<InputAdornment position="end" sx={{ cursor: "pointer" }}>
									<ClearIcon onClick={handleClearSearch} />
								</InputAdornment>
							),
						}}
					/>
					<Button variant="outlined" onClick={handleSearchClick}>
						{tglobal("search")}
					</Button>
				</Box>

				<Box display="flex" height="100%">
					<Button
						variant="outlined"
						sx={{ height: "100%", display: "flex", gap: "8px" }}
						onClick={() => setShowFilter(!showFilter)}
					>
						<Typography fontFamily="Poppins" textTransform="none">
							Filter
						</Typography>
						{!showFilter ? (
							<FilterList fontSize="small" />
						) : (
							<Close fontSize="small" />
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
							mt="16px"
							display="flex"
							justifyContent="space-between"
							width="100%"
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
								type="date"
								label={t("filter1")}
								InputLabelProps={{ shrink: true }}
								size={large ? "medium" : "small"}
								fullWidth
								value={startDate}
								onChange={(e) => setStartDate(e.target.value)}
							/>
							<TextField
								type="date"
								label={t("filter2")}
								InputLabelProps={{ shrink: true }}
								size={large ? "medium" : "small"}
								fullWidth
								value={endDate}
								onChange={(e) => setEndDate(e.target.value)}
							/>
							<Button variant="outlined" onClick={handleApply}>
								{tglobal("apply")}
							</Button>
						</Box>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};
