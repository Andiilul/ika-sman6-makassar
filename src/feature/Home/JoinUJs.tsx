"use client";

import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { JoinUsWrapper } from "./styled";

export const JoinUs: React.FC = () => {
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");
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
					Jadi Bagian dari Keluarga Alumni
				</Typography>
				<Typography
					textAlign={"center"}
					fontSize={large ? "16px" : "14px"}
					fontWeight={200}
				>
					Bangun kembali koneksi, kenangan, dan kolaborasi lintas generasi
					bersama keluarga besar SMA 6 Makassar.
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
						Daftar sebagai Alumni
					</Typography>
				</Button>
			</Box>
		</JoinUsWrapper>
	);
};
