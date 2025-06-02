"use client";

import { PageLayout } from "@/components/Page";
import {
	Box,
	Button,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import React, { useMemo, useState } from "react";
import { gformLinks } from "@/constants/gformLinks";
import { useTranslations } from "next-intl";

export const Register: React.FC = () => {
	const t = useTranslations("RegisterPage");
	const [currentDataID, setCurrentDataID] = useState<number | "">("");

	const data = useMemo(() => {
		return gformLinks.map((item) => ({
			batch: item.batch,
			link: item.links,
			shortened: item.shortlinks,
			id: item.no,
		}));
	}, []);

	const selectedItem = data.find((item) => item.batch === currentDataID);

	return (
		<PageLayout>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="flex-start"
				gap={3}
				maxWidth="480px"
				px={{ xs: 2, md: 0 }}
				py={4}
			>
				<Typography variant="h5" fontWeight={600}>
					{t("title")}
				</Typography>

				<Typography variant="body1" color="text.secondary">
					{t("subtitle")}
				</Typography>
				<FormControl fullWidth>
					<InputLabel id="year-select-label">{t("placeholder")}</InputLabel>
					<Select
						labelId="year-select-label"
						id="year-select"
						value={currentDataID}
						label={`${t("placeholder")}`}
						onChange={(event) =>
							setCurrentDataID(event.target.value as number | "")
						}
					>
						{data.map((item) => (
							<MenuItem key={item.batch} value={item.batch}>
								{t("batch")} {item.batch}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<Button
					variant="contained"
					color="primary"
					href={selectedItem?.shortened || "#"}
					disabled={!selectedItem}
					sx={{
						width: "100%",
						transition: "0.3s",
					}}
				>
					{selectedItem ? t("open") : t("select")}
				</Button>
			</Box>
		</PageLayout>
	);
};
