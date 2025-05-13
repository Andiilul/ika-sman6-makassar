"use client";

import {
	Box,
	Button,
	Drawer,
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
} from "./styled";
import menu from "@/constants/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
	DarkMode,
	LightMode,
	Menu,
	PersonAddAlt1,
	PlayArrow,
} from "@mui/icons-material";
import { useThemeContext } from "@/app/provider";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";

const NavbarContent: React.FC<{
	showSticky: boolean;
	toggleDrawer: () => void;
}> = ({ showSticky, toggleDrawer }) => {
	const pathname = usePathname();
	const theme = useTheme();

	const isHome = pathname === "/";
	const { mode, toggleTheme } = useThemeContext();
	const isActive = (link: string) => pathname === link;
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	return (
		<>
			<Box display={"flex"} gap={large ? "32px" : "12px"} alignItems={"center"}>
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
						<Menu
							sx={{
								fontSize: "16px",
							}}
						/>
					</Button>
				)}

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
					/>{" "}
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
						<Link key={index} href={nav.link} passHref>
							<NavItem
								display="flex"
								alignItems="center"
								sx={{
									color: isActive(nav.link)
										? theme.palette.primary.main
										: showSticky
										? theme.palette.text.primary
										: isHome
										? "white"
										: theme.palette.text.primary,
									fontWeight: isActive(nav.link) ? 600 : 400,
									transition: "all 0.2s ease-in-out",
								}}
							>
								{isActive(nav.link) && <PlayArrow sx={{ fontSize: "12px" }} />}
								{nav.title}
							</NavItem>
						</Link>
					))}
				</NavbarMenuList>
			</Box>

			<NavActionBox>
				<Button
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
						Bergabung{" "}
					</Typography>
					<PersonAddAlt1
						sx={{
							fontSize: "16px",
						}}
					/>
				</Button>
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
								Light{" "}
							</Typography>
							<LightMode
								sx={{
									fontSize: "16px",
								}}
							/>
						</Box>
					) : (
						<Box display={"flex"} gap={"4px"} alignItems={"center"}>
							<Typography
								fontSize={"12px"}
								fontWeight={600}
								display={medium ? "block" : "none"}
							>
								Dark{" "}
							</Typography>
							<DarkMode
								sx={{
									fontSize: "16px",
								}}
							/>
						</Box>
					)}
				</Button>
			</NavActionBox>
		</>
	);
};

export const Navbar: React.FC = () => {
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();
	const isHome = pathname === "/";
	const large = useMediaQuery("(min-width:1024px)");
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [showSticky, setShowSticky] = useState(false);

	useEffect(() => {
		if (large) setDrawerOpen(false);
	}, [large]);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!isHome) return;
		const handleScroll = () => setShowSticky(window.scrollY > 150);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [isHome]);

	if (!mounted) return null;

	return (
		<>
			<Drawer
				open={drawerOpen}
				anchor="left"
				onClose={() => setDrawerOpen(false)}
			>
				<Box width={250} p={2}>
					<Typography variant="h6" gutterBottom>
						Menu
					</Typography>
					{menu.map((nav, index) => (
						<Link key={index} href={nav.link} passHref>
							<Button
								fullWidth
								onClick={() => setDrawerOpen(false)}
								sx={{ justifyContent: "flex-start" }}
							>
								{nav.title}
							</Button>
						</Link>
					))}
				</Box>
			</Drawer>

			<NavbarWrapper variant={isHome ? "initial" : "sticky"}>
				<NavbarContainer>
					<NavbarContent
						showSticky={showSticky}
						toggleDrawer={() => setDrawerOpen(true)}
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
							/>
						</NavbarContainer>
					</NavbarWrapper>
				)}
			</AnimatePresence>
		</>
	);
};
