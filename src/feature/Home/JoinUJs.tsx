"use client";

import { Box, Button, Typography } from "@mui/material";
import { JoinUsWrapper } from "./styled";

export const JoinUs: React.FC = () => {
	return (
		<JoinUsWrapper>
			<Box
				display={"flex"}
				flexDirection={"column"}
				gap={"24px"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<Typography fontSize={"36px"} fontWeight={600}>Jadi Bagian dari Keluarga Alumni</Typography>
				<Typography fontSize={"16px"} fontWeight={200}>
					Bangun kembali koneksi, kenangan, dan kolaborasi lintas generasi
					bersama keluarga besar SMA 6 Makassar.
				</Typography>
				<Button
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
						}}
					>
						Daftar sebagai Alumni
					</Typography>
				</Button>
			</Box>
		</JoinUsWrapper>
	);
};
