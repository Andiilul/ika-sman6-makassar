import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import {
	FooterContainer,
	FooterLeft,
	FooterRight,
	FooterWrapper,
	QuickLinks,
} from "./styled";
import { socialMedia } from "@/constants/socialMedia";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export const Footer: React.FC = () => {
	const theme = useTheme();

	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const t = useTranslations("Footer");
	const tmenu = useTranslations("Menu");

	const menu = [
		{ title: tmenu("home"), path: "home" },
		{ title: tmenu("about"), path: "about" },
		{ title: tmenu("activity"), path: "activity" },
		{ title: tmenu("directory"), path: "directory" },
		{ title: tmenu("contact"), path: "contact-us" },
	];

	return (
		<FooterWrapper>
			<FooterContainer>
				<FooterLeft>
					<Box display={"flex"} gap={"16px"} alignItems={"center"}>
						<Box
							height={"60px"}
							display="flex"
							alignItems="center"
							position="relative"
						>
							<Image
								src="/images/logo.png"
								alt="Logo IKA SMA 6"
								height={500}
								width={500}
								style={{
									height: large ? "42px" : medium ? "36px" : "30px",
									width: "auto",
								}}
							/>
						</Box>
						<Typography
							fontSize={large ? "28px" : medium ? "24px" : "18px"}
							fontFamily={"Alike"}
							fontWeight={600}
						>
							IKA SMAN 6 Makassar
						</Typography>
					</Box>

					<Typography
						fontFamily={"Poppins"}
						fontSize={large ? "14px" : medium ? "12px" : "10px"}
						fontWeight={"300"}
					>
						{t("catchphrase")}
					</Typography>

					<Typography
						fontFamily={"Poppins"}
						fontSize={large ? "14px" : medium ? "12px" : "10px"}
						fontWeight={"300"}
					>
						Jl. Andi Tonro, Kota Makassar, Sulawesi Selatan
					</Typography>

					<span>
						<Typography
							fontFamily={"Poppins"}
							fontSize={large ? "14px" : medium ? "12px" : "10px"}
							fontWeight={"400"}
						>
							Email:{" "}
							<Typography
								component={"span"}
								fontFamily={"Poppins"}
								fontSize={large ? "14px" : medium ? "12px" : "10px"}
								fontWeight={"400"}
								sx={{
									":hover": {
										color: theme.palette.primary.main,
										transition: "300ms",
									},
									cursor: "pointer",
									userSelect: "none",
									transition: "300ms",
								}}
							>
								@emailIKASMA6nanti.com{" "}
							</Typography>
						</Typography>
					</span>
				</FooterLeft>

				<FooterRight display={"flex"} gap={"32px"} flexDirection={"row"}>
					<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
						<Typography
							fontSize={large ? "28px" : medium ? "24px" : "18px"}
							fontFamily={"Alike"}
						>
							{t("navigate")}
						</Typography>
						<QuickLinks>
							{menu.map((map, index) => (
								<Link
									key={index}
									href={`/${map.path}`}
									passHref
									style={{ textDecoration: "none" }}
								>
									<Box sx={{ cursor: "pointer" }}>
										<Typography
											color={theme.palette.primary.main}
											fontFamily={"Poppins"}
											fontSize={large ? "14px" : medium ? "14px" : "14px"}
											fontWeight={"400"}
											sx={{
												transition: "200ms",
												":hover": {
													color: theme.palette.text.primary,
													transition: "200ms",
													textDecoration: "none",
												},
											}}
										>
											{map.title}
										</Typography>
									</Box>
								</Link>
							))}
						</QuickLinks>
					</Box>

					<Box display={"flex"} flexDirection={"column"} gap={"16px"}>
						<Typography
							fontSize={large ? "28px" : medium ? "24px" : "18px"}
							fontFamily={"Alike"}
						>
							{t("contactus")}{" "}
						</Typography>
						<Typography
							fontFamily={"Poppins"}
							fontSize={large ? "14px" : medium ? "12px" : "10px"}
							fontWeight={"300"}
						>
							{t("followus")}{" "}
						</Typography>
						<Box display={"flex"} gap={"12px"}>
							{socialMedia.map((map, index) => (
								<Link key={index} href={map.link}>
									<Box fontSize={"24px"}>{map.icon}</Box>
								</Link>
							))}
						</Box>
					</Box>
				</FooterRight>
			</FooterContainer>
		</FooterWrapper>
	);
};
