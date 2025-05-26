"use client";

import {
	alpha,
	Box,
	Link,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { ContactUSContainer } from "./styled";
import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { socialMedia } from "@/constants/socialMedia";
import { IGlobal } from "@/interfaces/Global";
import { useTranslations } from "next-intl";

interface ContactUsProps {
	globals: IGlobal | null;
}

export const ContactUs: React.FC<ContactUsProps> = ({ globals }) => {
	const theme = useTheme();

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const t = useTranslations("ContactPage");
	return (
		<Box width={"100%"} display={"flex"} flexDirection={"column"}>
			<PageHeader title={t("title")} />
			<PageLayout>
				<ContactUSContainer>
					<Box
						width={"100%"}
						display={"flex"}
						gap={"8px"}
						justifyContent={"center"}
					>
						<Typography fontSize={"24px"} fontWeight={"500"}>
							{t("title")}
						</Typography>
					</Box>
					<Box
						display={"flex"}
						width={"100%"}
						gap={large ? "64px" : medium ? "32px" : "16px"}
						flexDirection={"column"}
					>
						<Box
							display={"flex"}
							flexDirection={large ? "row" : "column"}
							gap={large ? "64px" : medium ? "32px" : "16px"}
						>
							<Box
								flex={1}
								padding={large ? "32px" : medium ? "24px" : "16px"}
								display={"flex"}
								gap={"16px"}
								alignItems={"center"}
								bgcolor={theme.palette.background.paper}
							>
								<Phone
									sx={{
										fontSize: "32px",
									}}
								/>
								<Box display={"flex"} flexDirection={"column"} gap={"8px"}>
									<Typography
										fontWeight={600}
										fontSize={large ? "16px" : "14px"}
									>
										Call Center
									</Typography>
									<Typography fontWeight={500} fontSize={"12px"}>
										{globals?.call_center}
									</Typography>
								</Box>
							</Box>
							<Box
								flex={1}
								padding={large ? "32px" : medium ? "24px" : "16px"}
								display={"flex"}
								gap={"16px"}
								alignItems={"center"}
								bgcolor={theme.palette.background.paper}
							>
								<Mail
									sx={{
										fontSize: "32px",
									}}
								/>
								<Box display={"flex"} flexDirection={"column"} gap={"8px"}>
									<Typography
										fontWeight={600}
										fontSize={large ? "16px" : "14px"}
									>
										Email
									</Typography>
									<Typography fontWeight={500} fontSize={"12px"}>
										{globals?.contact_email}
									</Typography>
								</Box>
							</Box>
						</Box>
						<Box display={"flex"} justifyContent={"center"}>
							<Box
								minWidth={large ? "480px" : "min-content"}
								width={large ? "calc(50% - 32px)" : "100%"}
								padding={large ? "32px" : medium ? "24px" : "16px"}
								display={"flex"}
								gap={"16px"}
								alignItems={"center"}
								bgcolor={theme.palette.background.paper}
							>
								<LocationCity
									sx={{
										fontSize: "32px",
									}}
								/>
								<Box display={"flex"} flexDirection={"column"} gap={"8px"}>
									<Typography
										fontWeight={600}
										fontSize={large ? "16px" : "14px"}
									>
										Sekretariat IKA SMA 6 Makassar
									</Typography>
									<Typography fontWeight={500} fontSize={"12px"}>
										Jalan Ir. Sutami, Makassar{" "}
									</Typography>
								</Box>
							</Box>
						</Box>
					</Box>
					<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
						<Box display={"flex"} gap={"16px"} alignItems={"center"}>
							<Box
								display={"flex"}
								height={"1px"}
								flex={1}
								bgcolor={alpha(theme.palette.common.black, 0.5)}
							></Box>
							<Typography fontSize={large ? "16px" : "14px"}>
								{t("followus")}{" "}
							</Typography>
							<Box
								display={"flex"}
								height={"1px"}
								flex={1}
								bgcolor={alpha(theme.palette.common.black, 0.5)}
							></Box>
						</Box>
						<Box
							display={"flex"}
							gap={"32px"}
							justifyContent={"center"}
							width={"100%"}
						>
							{socialMedia.map((map, index) => (
								<Link key={index} href={map.link}>
									<Box>
										<Typography
											fontSize={large ? "48px" : medium ? "36px" : "24px"}
										>
											{map.icon}
										</Typography>
									</Box>
								</Link>
							))}
						</Box>
					</Box>
				</ContactUSContainer>
			</PageLayout>
		</Box>
	);
};

export default ContactUs;
