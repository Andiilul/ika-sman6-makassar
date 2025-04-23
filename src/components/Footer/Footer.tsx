import {
	Box,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import {
	FooterContainer,
	FooterLeft,
	FooterMid,
	FooterRight,
	FooterWrapper,
	QuickLinks,
} from "./styled";
import menu from "@/constants/menu";
import { socialMedia } from "@/constants/socialMedia";
import Link from "next/link";

export const Footer: React.FC = () => {
	const theme = useTheme();

	const medium = useMediaQuery("(max-width:1024px)");
	const small = useMediaQuery("(max-width:640px)");

	return (
		<Box display={"flex"} flexDirection={"column"}>
			<FooterWrapper>
				<FooterContainer>
					<FooterLeft>
						<Typography
							fontSize={small ? "18px" : medium ? "24px" : "28px"}
							fontFamily={"Rokkitt"}
						>
							IKA SMAN 6 Makassar
						</Typography>
						<Typography
							fontFamily={"Poppins"}
							fontSize={small ? "10px" : medium ? "12px" : "14px"}
							fontWeight={"300"}
						>
							Your Gateway to Lifelong Connections
						</Typography>

						<Typography
							fontFamily={"Poppins"}
							fontSize={small ? "10px" : medium ? "12px" : "14px"}
							fontWeight={"300"}
						>
							Jl. Andi Tonro, Kota Makassar, Sulawesi Selatan
						</Typography>
						<span>
							<Typography
								fontFamily={"Poppins"}
								fontSize={small ? "10px" : medium ? "12px" : "14px"}
								fontWeight={"400"}
							>
								Email:{" "}
								<Typography
									component={"span"}
									fontFamily={"Poppins"}
									fontSize={small ? "10px" : medium ? "12px" : "14px"}
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
					<FooterMid>
						<Typography	
							fontSize={small ? "18px" : medium ? "24px" : "28px"}
							fontFamily={"Rokkitt"}
						>
							Navigasi
						</Typography>
						<QuickLinks>
							{menu.map((map, index) => (
								<Box
									key={index}
									component={"div"}
									sx={{
										cursor: "pointer",
									}}
								>
									<Typography
										color={theme.palette.primary.main}
										fontFamily={"Poppins"}
										fontSize={small ? "14px" : medium ? "14px" : "14px"}
										fontWeight={"400"}
										sx={{
											transition: "200ms",
											":hover": {
												color: theme.palette.text.primary,
												transition: "200ms",
											},
										}}
									>
										{map.title}
									</Typography>
								</Box>
							))}
						</QuickLinks>
					</FooterMid>
					<FooterMid>
						<Typography
							fontSize={small ? "18px" : medium ? "24px" : "28px"}
							fontFamily={"Rokkitt"}
						>
							Kegiatan
						</Typography>
						{/* <QuickLinks>
							{ExploreBlog.map((map, index) => (
								<Link
									key={index}
									href={map.link}
									sx={{
										textTransform: "none",
										textDecoration: "none",
										transition: "200ms",
										":hover": {
											color: theme.palette.text.primary,
											transition: "200ms",
										},
									}}
								>
									<Box>{map.name}</Box>
								</Link>
							))}
						</QuickLinks> */}
					</FooterMid>
					<FooterRight>
						<Typography
							fontSize={small ? "18px" : medium ? "24px" : "28px"}
							fontFamily={"Rokkitt"}
						>
							Contact Us
						</Typography>
						<Typography
							fontFamily={"Poppins"}
							fontSize={small ? "10px" : medium ? "12px" : "14px"}
							fontWeight={"300"}
						>
							Follow Our Social Media to Find Out the Latest Updates of Our
							Progress
						</Typography>
						<Box display={"flex"} gap={"12px"}>
							{socialMedia.map((map, index) => (
								<Link key={index} href={map.link}>
									<Box>{map.icon}</Box>
								</Link>
							))}
						</Box>
					</FooterRight>
				</FooterContainer>
				{/* <Snackbar
					open={open}
					autoHideDuration={2000}
					onClose={handleClose}
					message="Copied To Clipboard"
					ContentProps={{
						sx: {
							backgroundColor: theme.palette.background.paper,
							color: theme.palette.text.primary,
						},
					}}
				/> */}
			</FooterWrapper>
			<Box
				display={"flex"}
				justifyContent={"center"}
				padding={"8px"}
				bgcolor={theme.palette.background.paper}
			>
				<Typography
					fontSize={"10px"}
					fontFamily={"Poppins"}
					textAlign={"center"}
				>
					&copy; © 2024 Website IKA SMA Negeri 6 Makassar. Created by
				</Typography>
			</Box>
		</Box>
	);
};
