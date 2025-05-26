"use client";

import {
	Box,
	Button,
	Drawer,
	IconButton,
	Popover,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import {
	NavbarWrapper,
	LogoBox,
	NavbarMenuList,
	NavbarContainer,
	NavItem,
	NavActionBox,
	AccordionSummaryStyle,
	AccordionStyle,
	AccordionDetailsStyle,
} from "./styled";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
	Close,
	DarkMode,
	ExpandMore,
	LightMode,
	Menu,
	// PersonAddAlt1,
	PlayArrow,
	Translate,
} from "@mui/icons-material";
import { useThemeContext } from "@/app/provider";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import LanguageSwitcher from "../LangSwitcher/LangSwitcher";

const NavbarContent: React.FC<{
	showSticky: boolean;
	toggleDrawer: () => void;
	isActive: (link: string) => boolean;
}> = ({ showSticky, toggleDrawer, isActive }) => {
	const theme = useTheme();
	const { mode, toggleTheme } = useThemeContext();
	const locale = useLocale();

	const pathname = usePathname();

	const isHome = /^\/([a-z]{2})\/?$/.test(pathname);
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const tmenu = useTranslations("Menu");

	const menu = [
		{ title: tmenu("home"), path: "/" },
		{ title: tmenu("about"), path: "about" },
		{ title: tmenu("activity"), path: "activity" },
		{ title: tmenu("directory"), path: "directory" },
		{ title: tmenu("contact"), path: "contact-us" },
	];

	const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
		null
	);

	const handleOpenLocal = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseLocal = () => {
		setAnchorEl(null);
	};

	useEffect(() => {
		handleCloseLocal();
	}, [large]);

	const open = Boolean(anchorEl);

	return (
		<>
			<Box display={"flex"} gap={large ? "32px" : "12px"} alignItems={"center"}>
				{isHome}
				<LogoBox>
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
					<Typography
						display={medium ? "block" : "none"}
						fontSize={"14px"}
						fontWeight={600}
						lineHeight={1.2}
						color={
							showSticky
								? theme.palette.text.primary
								: isHome
								? "white"
								: theme.palette.text.primary
						}
					>
						IKA SMAN 6 Makassar
					</Typography>
				</LogoBox>

				<NavbarMenuList display={"flex"}>
					{menu.map((nav, index) => (
						<Link key={index} href={nav.path} passHref>
							<NavItem
								display="flex"
								alignItems="center"
								sx={{
									color: isActive(nav.path)
										? theme.palette.primary.main
										: showSticky
										? theme.palette.text.primary
										: isHome
										? "white"
										: theme.palette.text.primary,
									fontWeight: isActive(nav.path) ? 600 : 400,
									transition: "all 0.2s ease-in-out",
								}}
							>
								{isActive(nav.path) && <PlayArrow sx={{ fontSize: "12px" }} />}
								{nav.title}
							</NavItem>
						</Link>
					))}
				</NavbarMenuList>
			</Box>

			<NavActionBox>
				{/* <Button
					color="primary"
					variant="outlined"
					sx={{
						borderWidth: "1px",
						minWidth: "max-content",
						display: "flex",
						gap: "4px",
						height: "max-content",
						padding: "8px",
					}}
				>
					<Typography
						display={large ? "block" : "none"}
						fontFamily={"Poppins"}
						color={"primary"}
						fontSize={"12px"}
						fontWeight={600}
						textTransform={"capitalize"}
					>
						Bergabung
					</Typography>
					<PersonAddAlt1 sx={{ fontSize: "16px" }} />
				</Button> */}
				<Button
					aria-describedby={"localization-btn"}
					sx={{
						display: large || medium ? "flex" : "none",
						gap: "4px",
						alignItems: "center",
					}}
					onClick={handleOpenLocal}
				>
					<Typography fontSize={"16px"}>
						<Translate fontSize="inherit" />
					</Typography>
					{locale === "id" ? "ID" : locale === "en" ? "EN" : ""}{" "}
				</Button>
				<Popover
					id={"localization-btn"}
					open={open}
					anchorEl={anchorEl}
					onClose={handleCloseLocal}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "left",
					}}
				>
					<LanguageSwitcher handleCloseLocal={handleCloseLocal} />
				</Popover>

				<Button
					onClick={toggleTheme}
					color="primary"
					variant="outlined"
					sx={{
						borderWidth: "1px",
						minWidth: "max-content",
						display: "flex",
						gap: "4px",
						height: "max-content",
						padding: "8px",
						textTransform: "none",
					}}
				>
					{mode === "dark" ? (
						<Box display={"flex"} gap={"4px"} alignItems={"center"}>
							<Typography
								fontSize={"12px"}
								fontWeight={600}
								display={medium ? "block" : "none"}
							>
								Light
							</Typography>
							<LightMode sx={{ fontSize: "16px" }} />
						</Box>
					) : (
						<Box display={"flex"} gap={"4px"} alignItems={"center"}>
							<Typography
								fontSize={"12px"}
								fontWeight={600}
								display={medium ? "block" : "none"}
							>
								Dark
							</Typography>
							<DarkMode sx={{ fontSize: "16px" }} />
						</Box>
					)}
				</Button>

				{!large && (
					<Button
						aria-label="open menu"
						onClick={toggleDrawer}
						sx={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							width: "32px",
							height: "32px",
							minWidth: "32px",
							padding: "0",
							border: "1px solid",
							borderColor: theme.palette.primary.main,
						}}
					>
						<Menu sx={{ fontSize: "16px" }} />
					</Button>
				)}
			</NavActionBox>
		</>
	);
};

export const Navbar: React.FC = () => {
	const pathname = usePathname();
	const isHome = /^\/([a-z]{2})\/?$/.test(pathname);

	console.log("Pathname: '", pathname, "'");
	console.log("Equal /id? ", pathname === "/id");
	console.log("Length: ", pathname.length); // Harus 3
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
	const theme = useTheme();
	const locale = useLocale();

	const [drawerOpen, setDrawerOpen] = useState(false);
	const [showSticky, setShowSticky] = useState(false);
	const [mounted, setMounted] = useState(false);

	const isActive = (link: string) => pathname === link;
	const { toggleTheme } = useThemeContext();
	const tmenu = useTranslations("Menu");

	const menu = [
		{ title: tmenu("home"), path: "home" },
		{ title: tmenu("about"), path: "about" },
		{ title: tmenu("activity"), path: "activity" },
		{ title: tmenu("directory"), path: "directory" },
		{ title: tmenu("contact"), path: "contact-us" },
	];

	useEffect(() => {
		if (large) setDrawerOpen(false);
	}, [large]);

	useEffect(() => {
		setMounted(true);
	}, []);

	const [expanded, setExpanded] = useState<boolean>(false);

	useEffect(() => {
		if (!isHome) return;
		const handleScroll = () => setShowSticky(window.scrollY > 150);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHome]);

	useEffect(() => {
		setExpanded(false);
	}, [locale, large, medium, drawerOpen]);

	if (!mounted) return null;

	return (
		<>
			<Drawer
				open={drawerOpen}
				anchor="top"
				onClose={() => setDrawerOpen(false)}
			>
				<Box
					display={"flex"}
					flexDirection={"column"}
					width={"100%"}
					bgcolor={theme.palette.background.paper}
					height={"100%"}
				>
					<Box
						padding={medium ? "16px" : "12px"}
						display={"flex"}
						gap={"8px"}
						alignItems={"center"}
						justifyContent={"space-between"}
						bgcolor={theme.palette.background.default}
					>
						<Box display={"flex"} gap={"8px"} alignItems={"center"}>
							<Box height={medium ? "36px" : "30px"} width="auto">
								<Image
									src="/images/logo.png"
									alt="Logo IKA 6"
									width={0}
									height={0}
									style={{ width: "auto", height: "100%" }}
								/>
							</Box>
							<Typography
								fontSize={"16px"}
								fontWeight={600}
								color={"text.primary"}
							>
								IKA SMAN 6 Makassar
							</Typography>
						</Box>

						<IconButton
							onClick={() => {
								setDrawerOpen(false);
							}}
							aria-label="delete"
						>
							<Close />
						</IconButton>
					</Box>

					<Box
						display="flex"
						flexDirection="column"
						gap={medium ? "16px" : "8px"}
						padding={medium ? "16px" : "12px"}
					>
						{menu.map((nav, index) => (
							<Link key={index} href={nav.path} passHref>
								<Box
									display="flex"
									padding={medium ? "16px 8px" : "12px 6px"}
									alignItems="center"
									sx={{
										color: isActive(nav.path)
											? theme.palette.primary.main
											: theme.palette.text.primary,
										fontWeight: isActive(nav.path) ? 600 : 400,
										transition: "all 0.2s ease-in-out",
										borderRadius: "4px",

										":hover": {
											backgroundColor: theme.palette.background.default,
										},
									}}
								>
									{isActive(nav.path) && (
										<PlayArrow sx={{ fontSize: "12px" }} />
									)}
									{nav.title}
								</Box>
							</Link>
						))}
					</Box>
					<Box
						height={"1px"}
						bgcolor={theme.palette.divider}
						width="100%"
					></Box>
					<AccordionStyle
						expanded={expanded}
						onChange={() => setExpanded(!expanded)}
					>
						<AccordionSummaryStyle
							expandIcon={<ExpandMore />}
							aria-controls="panel1d-content"
							id="panel1d-header"
						>
							<Box display={"flex"} alignItems="center" gap="4px">
								<Translate sx={{ fontSize: "16px", marginRight: "4px" }} />
								<Typography component="span">
									{locale === "id" ? "Bahasa Indonesia" : "English"}
								</Typography>
							</Box>
						</AccordionSummaryStyle>
						<AccordionDetailsStyle>
							<Box paddingLeft={"12px"} paddingRight={"12px"}>
								<LanguageSwitcher handleCloseLocal={() => setExpanded(false)} />
							</Box>
						</AccordionDetailsStyle>
					</AccordionStyle>
					<Box padding={medium ? "16px" : "12px"}>
						<Button
							sx={{
								padding: "0",
								minWidth: "100%",
								display: "flex",
								gap: "4px",
								height: "max-content",
							}}
							onClick={toggleTheme}
						>
							<Box
								display="flex"
								width="100%"
								padding={medium ? "16px 8px" : "12px 6px"}
								alignItems="center"
								sx={{
									color: theme.palette.text.primary,
									fontWeight: 400,
									transition: "all 0.2s ease-in-out",
									borderRadius: "4px",
									display: "flex",
									alignItems: "center",
									textTransform: "none",
									gap: "4px",
									cursor: "pointer",
								}}
							>
								<Typography
									fontFamily={"Poppins"}
									color={theme.palette.primary.dark}
								>
									{theme.palette.mode === "dark" ? "Light" : "Dark"}
								</Typography>
								{theme.palette.mode === "dark" ? (
									<LightMode
										sx={{ fontSize: "16px", color: theme.palette.primary.dark }}
									/>
								) : (
									<DarkMode
										sx={{ fontSize: "16px", color: theme.palette.primary.dark }}
									/>
								)}
							</Box>
						</Button>
					</Box>
				</Box>
			</Drawer>

			<NavbarWrapper variant={isHome ? "initial" : "sticky"}>
				<NavbarContainer>
					<NavbarContent
						showSticky={showSticky}
						toggleDrawer={() => setDrawerOpen(true)}
						isActive={isActive}
					/>
				</NavbarContainer>
			</NavbarWrapper>

			<AnimatePresence>
				{showSticky && (
					<NavbarWrapper
						variant="fixed"
						initial={{ y: -80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -80, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<NavbarContainer>
							<NavbarContent
								showSticky={showSticky}
								toggleDrawer={() => setDrawerOpen(true)}
								isActive={isActive}
							/>
						</NavbarContainer>
					</NavbarWrapper>
				)}
			</AnimatePresence>
		</>
	);
};
