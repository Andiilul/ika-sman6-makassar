"use client";

import { Typography, useTheme } from "@mui/material";
import { NavbarWrapper, NavbarMenuList, NavbarContainer } from "./styled";
import menu from "@/constants/menu";
import Link from "next/link";

export const Navbar: React.FC = () => {
	const theme = useTheme();
	//if page ="/" show this one
	return (
		<NavbarWrapper>
			<NavbarContainer>
				<Typography
					fontFamily={"Rokkitt"}
					color={theme.palette.text.primary}
					fontSize={"24px"}
				>
					IKA SMA6 Logo here
				</Typography>
				<NavbarMenuList display={"flex"}>
					{menu.map((nav, index) => (
						<Link key={index} href={nav.link} passHref>
							<Typography
								color={theme.palette.text.primary}
								fontFamily={"Poppins"}
								fontSize={"14px"}
								fontWeight={"300"}
								sx={{
									":hover": {
										color: theme.palette.primary.main,
										transition: "ease-in-out 300ms",
									},
									transition: "300ms",
								}}
							>
								{nav.title}
							</Typography>
						</Link>
					))}
				</NavbarMenuList>
			</NavbarContainer>
		</NavbarWrapper>
	);

	//return null
};
