"use client";

import { FlexBox } from "@/components/Page/FlexBox";
import {
	Box,
	Button,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import Image from "next/image";
import { AboutSection } from "./styled";
import { ArrowRight } from "@mui/icons-material";
import { useTranslations } from "next-intl";

export const AboutHome: React.FC = () => {
	const theme = useTheme();
		const t = useTranslations('HomePage');
		const tglobal=useTranslations('Global') // ⬅️ Scope key


	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<FlexBox flexDirection={"column"}>
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
					></Box>
					<Box
						sx={{
							width: "12px",
							height: "4px",
							backgroundColor: theme.palette.primary.main,
						}}
					></Box>
					<Box
						sx={{
							width: "12px",
							flex: "1",
							background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, transparent 100%)`,
						}}
					></Box>
				</Box>

				<Box display={"flex"} gap={"8px"} padding={"12px 0a"} flexDirection={"column"}>
					<Typography fontSize={"14px"} fontWeight={600} color="secondary">
						{t("about1")}
					</Typography>
					<Box display="flex" flexDirection="column" gap="4px">
						{large ? (
							<>
								<Typography fontSize="36px" lineHeight="36px" fontWeight={600}>
									{t("catch1")}
								</Typography>
								<Typography fontSize="36px" lineHeight="36px" fontWeight={600}>
									{t("catch2")}
								</Typography>
							</>
						) : (
							<Typography
								fontSize={medium ? "30px" : "24px"}
								lineHeight={medium ? "30px" : "24px"}
								fontWeight={600}
							>
									{t("catch1")}
								<br />
									{t("catch2")}
							</Typography>
						)}
					</Box>
				</Box>
			</FlexBox>
			<AboutSection>
				<Box
					width={"100%"}
					height={large ? "320px" : medium ? "240px" : "160px"}
					position={"relative"}
				>
					<Image
						src={"/images/about-1.jpg"}
						style={{
							borderRadius: "12px",
							objectFit: "cover",
						}}
						alt=""
						fill
					/>
				</Box>
				<Box
					width={"100%"}
					position={"relative"}
					display={"flex"}
					gap={large ? "32px" : "16px"}
					flexDirection={"column"}
				>
					<Typography
						marginTop={medium ? "16px" : "0px"}
						fontSize={large ? "16px" : "14px"}
						fontWeight={500}
					>{t("about2")}
					</Typography>
					<Box
						width={"100%"}
						display={"flex"}
						gap={"8px"}
						justifyContent={medium ? "flex-start" : "center"}
					>
						<Button
							variant="outlined"
							size={large ? "large" : "medium"}
							href="/about"
						>
							<Typography
								display={"flex"}
								width={"max-content"}
								alignItems={"center"}
								padding={large ? "4px 8px" : ""}
								fontFamily={"Poppins"}
								fontSize={large ? "16px" : "14px"}
								fontWeight={400}
								textTransform={"capitalize"}
							>
								{tglobal("learnMore")} <ArrowRight />
							</Typography>
						</Button>
					</Box>
				</Box>
			</AboutSection>
		</FlexBox>
	);
};
