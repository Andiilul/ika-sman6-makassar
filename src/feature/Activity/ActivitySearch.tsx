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
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Close, FilterList } from "@mui/icons-material";

interface ActivitySearchProps {
	onSearch: (query: string) => void;
	onDateRangeChange: (startDate: string, endDate: string) => void;
}

export const ActivitySearch: React.FC<ActivitySearchProps> = ({
	onSearch,
	onDateRangeChange,
}) => {
	const [searchText, setSearchText] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [showFilter, setShowFilter] = useState<boolean>(false);

	const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchText(value);
		onSearch(value);
	};

	const handleReset = () => {
		setStartDate("");
		setEndDate("");
		onSearch("");
		onDateRangeChange("", "");
	};

	const handleApply = () => {
		onDateRangeChange(startDate, endDate);
	};

	const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setStartDate(e.target.value);
	};

	const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEndDate(e.target.value);
	};

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	return (
		<>
			<Box
				display="flex"
				gap={"16px"}
				width="100%"
				height={"56px"}
				alignItems={"center"}
			>
				<Box display={"flex"} gap={"16px"} width={"100%"} maxWidth={"320px"}>
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
				</Box>

				<Box display="flex" height={"100%"}>
					<Button
						variant="outlined"
						sx={{ height: "100%", display: "flex", gap: "8px" }}
						onClick={() => setShowFilter(!showFilter)}
					>
						<Typography fontFamily="Poppins" textTransform={"none"}>
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
							marginTop={"16px"}
							display={"flex"}
							width={"100%"}
							justifyContent={"space-between"}
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
								size={large ? "medium" : "small"}
								type="date"
								label="Dari Tanggal"
								InputLabelProps={{ shrink: true }}
								fullWidth
								value={startDate}
								onChange={handleStartDateChange}
							/>
							<TextField
								size={large ? "medium" : "small"}
								type="date"
								label="Sampai Tanggal"
								InputLabelProps={{ shrink: true }}
								fullWidth
								value={endDate}
								onChange={handleEndDateChange}
							/>
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
