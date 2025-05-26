"use client";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { JoinUsWrapper } from "./styled";
import { useTranslations } from "next-intl";

export const JoinUs: React.FC = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	const t = useTranslations("HomePage");
	return (
		<JoinUsWrapper>
			<Box
				maxWidth={"1280px"}
				padding={"32px"}
				display={"flex"}
				flexDirection={"column"}
				gap={large ? "24px" : medium ? "16px" : "8px"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Typography
					textAlign={"center"}
					fontSize={large ? "36px" : medium ? "30px" : "24px"}
					fontWeight={600}
				>
					{t("joinus")}
				</Typography>
				<Typography
					textAlign={"center"}
					fontSize={large ? "16px" : "14px"}
					fontWeight={200}
				>
					{t("joinus2")}
				</Typography>
				<Button
					size={large ? "large" : medium ? "medium" : "small"}
					variant="outlined"
					color="primary"
					sx={{
						borderRadius: "4px",
					}}
				>
					<Typography
						sx={{
							padding: "4px 12px",
							textTransform: "capitalize",
							fontSize: large ? "16px" : medium ? "14px" : "12px",
						}}
					>
						{t("joinus3")}
					</Typography>
				</Button>
			</Box>
		</JoinUsWrapper>
	);
};
