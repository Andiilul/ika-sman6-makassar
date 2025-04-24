"use client";

import { alpha, Box, Link, Typography, useTheme } from "@mui/material";
import { PageLayout } from "@/components/Page";
import { PageHeader } from "@/components/Page/PageHeader";
import { ContactUSContainer } from "./styled";
import { LocationCity, Mail, Phone } from "@mui/icons-material";
import { socialMedia } from "@/constants/socialMedia";

export const ContactUs: React.FC = () => {
	const theme = useTheme();
	return (
		<Box width={"100%"} display={"flex"} flexDirection={"column"}>
			<PageHeader title="Kontak kami" />
			<PageLayout>
				<ContactUSContainer>
					<Box
						width={"100%"}
						display={"flex"}
						gap={"8px"}
						justifyContent={"center"}
					>
						<Typography fontSize={"24px"} fontWeight={"500"}>
							Kontak kami
						</Typography>
					</Box>
					<Box
						display={"flex"}
						width={"100%"}
						gap={"64px"}
						flexDirection={"column"}
					>
						<Box display={"flex"} gap={"64px"}>
							<Box
								flex={1}
								padding={"32px"}
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
									<Typography fontWeight={600} fontSize={"16px"}>
										Call Center
									</Typography>
									<Typography fontWeight={600} fontSize={"12px"}>
										+62 xxx xxx xxx xxx
									</Typography>
								</Box>
							</Box>
							<Box
								flex={1}
								padding={"32px"}
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
									<Typography fontWeight={600} fontSize={"16px"}>
										Email
									</Typography>
									<Typography fontWeight={600} fontSize={"12px"}>
										info@gmail.com
									</Typography>
								</Box>
							</Box>
						</Box>
						<Box display={"flex"} justifyContent={"center"}>
							<Box
								width={"calc(50% - 32px)"}
								padding={"32px"}
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
									<Typography fontWeight={600} fontSize={"16px"}>
										Sekretariat IKA SMA 6 Makassar
									</Typography>
									<Typography fontWeight={600} fontSize={"12px"}>
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
							<Typography> Ikuti Sosial Media Kami</Typography>
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
										<Typography fontSize={"48px"}>{map.icon}</Typography>
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
