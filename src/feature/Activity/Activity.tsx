"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
	Box,
	Button,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { ActivityCard } from "./ActivityCard";
import { ActivitySearch } from "./ActivitySearch";
import { ActivityGridContainer, ActivityContainer } from "./styled";
import { IActivity } from "@/interfaces/Kegiatan";
import { useTranslations } from "next-intl";

const limit = 6;

export const Activity: React.FC = () => {
	const theme = useTheme();
	const medium = useMediaQuery("(min-width:768px)");
	const large = useMediaQuery("(min-width:1024px)");
	const t = useTranslations("ActivitiesPage");
	const tglobal = useTranslations("Global");

	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();

	// Params from URL
	const pageParam = searchParams.get("page");
	const keywordParam = searchParams.get("keyword") || "";
	const minDateParam = searchParams.get("minDate") || "";
	const maxDateParam = searchParams.get("maxDate") || "";

	const page = pageParam && +pageParam > 0 ? +pageParam : 1;

	// State
	const [search, setSearch] = useState(keywordParam);
	const [filterApply, setFilterApply] = useState<[string, string]>([
		minDateParam,
		maxDateParam,
	]);
	const [activities, setActivities] = useState<IActivity[]>([]);
	const [prefetchData, setPrefetchData] = useState<IActivity[]>([]);
	const [loadedPages, setLoadedPages] = useState<Record<number, IActivity[]>>(
		{}
	);
	const [isLastPage, setIsLastPage] = useState(false);

	const [loading, setLoading] = useState(false);

	// Fetch by page
	const fetchPageData = useCallback(
		async (pageNum: number): Promise<IActivity[]> => {
			try {
				const params = new URLSearchParams();
				if (search) params.append("keyword", search);
				if (filterApply[0]) params.append("minDate", filterApply[0]);
				if (filterApply[1]) params.append("maxDate", filterApply[1]);
				params.append("limit", limit.toString());
				params.append("page", pageNum.toString());

				const res = await fetch(`/api/activity?${params.toString()}`);
				if (!res.ok) throw new Error(`API error: ${res.status}`);
				const data = await res.json();
				return data as IActivity[];
			} catch (err) {
				console.error("Failed to fetch activities:", err);
				return [];
			}
		},
		[search, filterApply]
	);

	// Load current page
	useEffect(() => {
		(async () => {
			setLoading(true);
			if (loadedPages[page]) {
				setActivities(loadedPages[page]);
			} else {
				const data = await fetchPageData(page);
				setActivities(data);
				setLoadedPages((prev) => ({ ...prev, [page]: data }));
			}
			setLoading(false);
		})();
	}, [page, fetchPageData, loadedPages]);

	// Prefetch next page
	useEffect(() => {
		setPrefetchData([]); // ❗ Kosongkan setiap ganti page

		const nextPage = page + 1;
		(async () => {
			const data = await fetchPageData(nextPage);
			setPrefetchData(data);
			setIsLastPage(data.length === 0);
		})();
	}, [page, fetchPageData]);

	// Reset state on search/filter change
	useEffect(() => {
		setLoadedPages({});
		setPrefetchData([]);
		setActivities([]);
	}, [search, filterApply]);

	// Update query params
	const updateParams = (customPage?: number) => {
		const params = new URLSearchParams();
		if (search) params.set("keyword", search);
		if (filterApply[0]) params.set("minDate", filterApply[0]);
		if (filterApply[1]) params.set("maxDate", filterApply[1]);
		params.set("page", (customPage || 1).toString());
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	const updateParamsWithSearch = (
		keyword: string,
		startDate: string,
		endDate: string,
		pageNum: number = 1
	) => {
		const params = new URLSearchParams();
		if (keyword) params.set("keyword", keyword);
		if (startDate) params.set("minDate", startDate);
		if (endDate) params.set("maxDate", endDate);
		params.set("page", pageNum.toString());

		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	// Handlers
	const handleSearch = (val: string) => {
		setSearch(val);
		updateParamsWithSearch(val, filterApply[0], filterApply[1], 1);
	};

	const handleDateRangeChange = (start: string, end: string) => {
		setFilterApply([start, end]);
		updateParams(1);
	};

	const handleNext = () => {
		if (loading || prefetchData.length === 0) return;
		updateParams(page + 1);
	};

	const handlePrevious = () => {
		if (loading || page <= 1) return;
		updateParams(page - 1);
	};

	return (
		<FlexBox flexDirection="column">
			<PageHeader title={t("title")} />
			<PageLayout>
				<ActivityContainer>
					{/* Section Header */}
					<FlexBox>
						<Box
							display={medium ? "flex" : "none"}
							gap="2px"
							flexDirection="column"
						>
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
									flex: "1",
									background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
								}}
							/>
						</Box>

						<Box
							display="flex"
							flexDirection="column"
							gap="4px"
							padding="12px 0"
						>
							<Typography fontSize="14px" fontWeight={600} color="secondary">
								{t("subtitle1")}{" "}
							</Typography>
							<Typography
								fontSize={large ? "36px" : medium ? "30px" : "24px"}
								fontWeight={600}
							>
								{t("subtitle2")}{" "}
							</Typography>
						</Box>
					</FlexBox>

					{/* Search & Filter */}
					<Box mt={4}>
						<ActivitySearch
							onSearch={handleSearch}
							onDateRangeChange={handleDateRangeChange}
							initialSearch={search}
							initialStartDate={filterApply[0]}
							initialEndDate={filterApply[1]}
						/>
					</Box>

					{/* Result */}
					<ActivityGridContainer>
						{loading ? (
							<Typography textAlign="center" sx={{ width: "100%", py: 4 }}>
								{tglobal("loading")}{" "}
							</Typography>
						) : activities.length === 0 ? (
							<Typography textAlign="center">{tglobal("nodata")} </Typography>
						) : (
							activities.map((act, index) => (
								<ActivityCard key={index} activity={act} />
							))
						)}
					</ActivityGridContainer>

					{/* Pagination */}
					<Box display="flex" justifyContent="space-between" gap="8px" mt={2}>
						<Button onClick={handlePrevious} disabled={loading || page === 1}>
							<ChevronLeft />
							{tglobal("previous")}
						</Button>

						<Button onClick={handleNext} disabled={loading || isLastPage}>
							{loading ? (
								`${tglobal("loading")}`
							) : (
								<>
									{tglobal("next")} <ChevronRight />
								</>
							)}
						</Button>
					</Box>
				</ActivityContainer>
			</PageLayout>
		</FlexBox>
	);
};

export default Activity;
