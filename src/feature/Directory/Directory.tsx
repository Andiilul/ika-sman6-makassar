"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

import { FlexBox } from "@/components/Page/FlexBox";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { AlumniGridContainer, DirectoryContainer } from "./styled";
import { AlumniCard } from "./AlumniCard";
import { AlumniSearch } from "./AlumniSearch";
import { IAlumni } from "@/interfaces/Alumni";
import theme from "@/constants/theme/theme";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export const Directory: React.FC = () => {
	const [hover, setHover] = useState<number | null>(null);
	const t = useTranslations("DirectoryPage");
	const tglobal = useTranslations("Global");

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();

	const pageParam = searchParams.get("page");
	const page =
		pageParam && !isNaN(+pageParam) && +pageParam > 0 ? +pageParam : 1;

	const [search, setSearch] = useState(searchParams.get("keyword") || "");
	const [filterYear, setFilterYear] = useState(
		searchParams.get("gradYear") || ""
	);
	const [filterLocation, setFilterLocation] = useState(
		searchParams.get("location") || ""
	);

	useEffect(() => {
		setSearch(searchParams.get("keyword") || "");
		setFilterYear(searchParams.get("gradYear") || "");
		setFilterLocation(searchParams.get("location") || "");
	}, [searchParams]);

	const [alumni, setAlumni] = useState<IAlumni[]>([]);
	const [loading, setLoading] = useState(false);
	const [isLastPage, setIsLastPage] = useState(false);

	const limit = 12;

	const [loadedPages, setLoadedPages] = useState<Record<number, IAlumni[]>>({});

	const fetchPageData = useCallback(
		async (pageNum: number) => {
			try {
				const params = new URLSearchParams();
				if (search) params.append("keyword", search);
				if (filterYear) params.append("gradYear", filterYear);
				if (filterLocation) params.append("location", filterLocation);
				params.append("limit", limit.toString());
				params.append("page", pageNum.toString());

				const res = await fetch(`/api/alumni?${params.toString()}`);
				if (!res.ok) throw new Error(`API error: ${res.status}`);
				const data = await res.json();

				return data.data as IAlumni[];
			} catch (error) {
				console.error("Failed to fetch alumni:", error);
				return [];
			}
		},
		[search, filterYear, filterLocation]
	);

	// Load page sekarang dari cache atau fetch baru
	useEffect(() => {
		(async () => {
			setLoading(true);
			if (loadedPages[page]) {
				setAlumni(loadedPages[page]);
			} else {
				const data = await fetchPageData(page);
				setAlumni(data);
				setLoadedPages((prev) => ({ ...prev, [page]: data }));
			}
			setLoading(false);
		})();
	}, [page, fetchPageData, loadedPages]);

	useEffect(() => {
		const nextPage = page + 1;
		(async () => {
			const data = await fetchPageData(nextPage);
			setIsLastPage(data.length === 0); // ✅ hanya cek panjangnya
		})();
	}, [page, fetchPageData]);

	const updateParams = (customPage?: number) => {
		const params = new URLSearchParams();
		if (search) params.set("keyword", search);
		if (filterYear) params.set("gradYear", filterYear);
		if (filterLocation) params.set("location", filterLocation);
		params.set("page", (customPage || 1).toString());
		router.push(`${pathname}?${params.toString()}`, { scroll: false });
	};

	const handleNext = () => {
		if (loading || isLastPage) return;
		updateParams(page + 1);
	};

	const handlePrevious = () => {
		if (loading || page <= 1) return;
		updateParams(page - 1);
	};

	// Reset cache saat filter/search berubah
	useEffect(() => {
		setLoadedPages({});
		setAlumni([]);
	}, [search, filterYear, filterLocation]);

	return (
		<FlexBox flexDirection="column">
			<PageHeader title={t("title")} />
			<PageLayout>
				<DirectoryContainer>
					<FlexBox>
						<Box
							display={medium ? "flex" : "none"}
							gap={"2px"}
							flexDirection={"column"}
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
							gap="8px"
							padding="12px 0"
							flexDirection="column"
						>
							<Typography fontSize="14px" fontWeight={600} color="secondary">
								{t("subtitle1")}
							</Typography>
							<Box display="flex" flexDirection="column" gap="4px">
								<Typography
									fontSize={large ? "36px" : medium ? "30px" : "24px"}
									lineHeight={large ? "36px" : medium ? "30px" : "24px"}
									fontWeight={600}
								>
									{t("subtitle2")}{" "}
								</Typography>
							</Box>
						</Box>
					</FlexBox>

					<Box mt={4}>
						<AlumniSearch
							initialSearch={search}
							initialYear={filterYear}
							initialLocation={
								filterLocation as "" | "makassar" | "non-makassar"
							}
							onSearch={(val) => {
								setSearch(val);
								updateParams(1); // ✅ Reset to page 1
							}}
							onApplyFilters={(year, location) => {
								setFilterYear(year);
								setFilterLocation(location);
								updateParams(1); // ✅ Reset to page 1
							}}
						/>
					</Box>

					<AlumniGridContainer>
						{loading ? (
							// Tampilkan loading indicator atau kosong selama loading
							<Typography textAlign="center" sx={{ width: "100%", py: 4 }}>
								Loading...
							</Typography>
						) : alumni.length === 0 ? (
							<Typography textAlign="center">
								Tidak ada alumni yang cocok.
							</Typography>
						) : (
							alumni.map((alum, index) => (
								<AlumniCard
									key={alum.id}
									index={index}
									hover={hover}
									setHover={setHover}
									alumni={alum}
								/>
							))
						)}
					</AlumniGridContainer>

					<Box
						display={"flex"}
						justifyContent="flex-start"
						gap={"8px"}
						mt={2}
						width={"100%"}
					>
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
				</DirectoryContainer>
			</PageLayout>
		</FlexBox>
	);
};

export default Directory;
