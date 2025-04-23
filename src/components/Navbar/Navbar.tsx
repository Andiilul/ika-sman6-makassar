"use client";

import {
	Box,
	Button,
	FormControlLabel,
	Typography,
	useTheme,
} from "@mui/material";
import {
	NavbarWrapper,
	NavbarMenuList,
	NavbarContainer,
	NavItem,
	ThemeSwitcher,
} from "./styled";
import menu from "@/constants/menu";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { PlayArrow } from "@mui/icons-material";
import { useThemeContext } from "@/app/provider";
import { AnimatePresence } from "framer-motion";

export const Navbar: React.FC = () => {
	const [mounted, setMounted] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		setMounted(true);
	}, []);

	const { mode, toggleTheme } = useThemeContext();

	//if page ="/" show this one

	const theme = useTheme();
	const [showSticky, setShowSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShowSticky(window.scrollY > 150);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	if (!mounted) return null;

	return (
		<>
			<NavbarWrapper variant="initial">
				<NavbarContainer>
					<Box display={"flex"} gap={"32px"} alignItems={"center"}>
						<Box height={"60px"} display={"flex"} alignItems={"center"}>
							<Typography
								fontFamily={"Rokkitt"}
								color={theme.palette.primary.main}
								fontSize={"24px"}
							>
								Logo here
							</Typography>
						</Box>
						<NavbarMenuList display={"flex"}>
							{menu.map((nav, index) => {
								const isActive = pathname === nav.link;

								return (
									<Link key={index} href={nav.link} passHref>
										<NavItem
											display="flex"
											alignItems="center"
											sx={{
												color: isActive
													? theme.palette.primary.main
													: showSticky
													? theme.palette.text.primary
													: "white",
												fontWeight: isActive ? 600 : 400,
												transition: "all 0.2s ease-in-out",
											}}
										>
											{isActive && (
												<PlayArrow
													sx={{
														fontSize: "12px",
													}}
												/>
											)}

											{nav.title}
										</NavItem>
									</Link>
								);
							})}
						</NavbarMenuList>
					</Box>
					<Box display={"flex"} gap={"32px"} alignItems={"center"}>
						<Button
							color="primary"
							variant="outlined"
							sx={{ borderRadius: "50px", borderWidth: "2px", height:"max-content" }}
						>
							<Typography
								fontFamily={"Poppins"}
								color={"primary"}
								fontSize={"14px"}
								fontWeight={200}
								textTransform={"capitalize"}
							>
								Bergabung +
							</Typography>
						</Button>
						<FormControlLabel
							control={
								<ThemeSwitcher
									sx={{ m: 1 }}
									checked={mode === "dark"}
									onChange={() => {
										toggleTheme();
									}}
								/>
							}
							label=""
						/>
					</Box>
				</NavbarContainer>
			</NavbarWrapper>

			<AnimatePresence>
				{showSticky && (
					<NavbarWrapper
						variant="sticky"
						initial={{ y: -80, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -80, opacity: 0 }}
						transition={{ duration: 0.3, ease: "easeInOut" }}
					>
						<NavbarContainer>
							<Box display={"flex"} gap={"32px"} alignItems={"center"}>
								<Box height={"60px"} display={"flex"} alignItems={"center"}>
									<Typography
										fontFamily={"Rokkitt"}
										color={theme.palette.primary.main}
										fontSize={"24px"}
									>
										Logo here
									</Typography>
								</Box>
								<NavbarMenuList display={"flex"}>
									{menu.map((nav, index) => {
										const isActive = pathname === nav.link;

										return (
											<Link key={index} href={nav.link} passHref>
												<NavItem
													display="flex"
													alignItems="center"
													sx={{
														color: isActive
															? theme.palette.primary.main
															: showSticky
															? theme.palette.text.primary
															: "white",
														fontWeight: isActive ? 600 : 400,
														transition: "all 0.2s ease-in-out",
													}}
												>
													{isActive && (
														<PlayArrow
															sx={{
																fontSize: "12px",
															}}
														/>
													)}

													{nav.title}
												</NavItem>
											</Link>
										);
									})}
								</NavbarMenuList>
							</Box>
							<Box display={"flex"} gap={"32px"} alignItems={"center"}>
								<Button
									color="primary"
									variant="outlined"
									sx={{ borderRadius: "50px", borderWidth: "2px", height:"max-content" }}
								>
									<Typography
										fontFamily={"Poppins"}
										color={"primary"}
										fontSize={"14px"}
										fontWeight={200}
										textTransform={"capitalize"}
									>
										Bergabung +
									</Typography>
								</Button>
								<FormControlLabel
									control={
										<ThemeSwitcher
											sx={{ m: 1 }}
											checked={mode === "dark"}
											onChange={() => {
												toggleTheme();
											}}
										/>
									}
									label=""
								/>
							</Box>
						</NavbarContainer>
					</NavbarWrapper>
				)}
			</AnimatePresence>
		</>
	);

	//return null
};
