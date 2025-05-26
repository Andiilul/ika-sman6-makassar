"use client";

import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Box, Button, Typography } from "@mui/material";

const LanguageSwitcher = ({ handleCloseLocal }: { handleCloseLocal: () => void }) => {
	const router = useRouter();
	const pathname = usePathname(); // contoh: /id/about
	const locale = useLocale();

	const switchLocale = (targetLocale: string) => {
		handleCloseLocal();

		const segments = pathname.split("/");
		segments[1] = targetLocale; // ganti locale
		const newPath = segments.join("/");

		router.replace(newPath); // replace tanpa reload
	};

	return (
		<Box display="flex" flexDirection="column" padding="4px">
			<Button
				fullWidth
				onClick={() => switchLocale("id")}
				sx={{
					textTransform: "none",
					justifyContent: "flex-start",
					color: locale === "id" ? "primary.main" : "text.primary",
				}}
			>
				<Typography width="100%" textAlign="left">
					ID
				</Typography>
			</Button>

			<Button
				fullWidth
				onClick={() => switchLocale("en")}
				sx={{
					textTransform: "none",
					justifyContent: "flex-start",
					color: locale === "en" ? "primary.main" : "text.primary",
				}}
			>
				<Typography width="100%" textAlign="left">
					EN
				</Typography>
			</Button>
		</Box>
	);
};

export default LanguageSwitcher;
