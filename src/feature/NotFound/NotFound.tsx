"use client";

import { Box, Button, Typography } from "@mui/material";
import { NotFoundContainer, NotFoundWrapper } from "./styled";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface NotFoundProps {
	statusCode?: string;
	customMessage?: string;
}

export const NotFound: React.FC<NotFoundProps> = ({
	statusCode = "404",
	customMessage,
}) => {
	const router = useRouter();

	const NotFoundStatus = [
		{
			status: "404",
			message: "We apologize, we cannot find the page you are looking for.",
		},
		{
			status: "204",
			message: "We apologize, we cannot find the data you are looking for.",
		},
	];

	return (
		<NotFoundWrapper>
			<NotFoundContainer>
				<Box
					display={"flex"}
					flexDirection={"column"}
					gap={"24px"}
					alignItems={"center"}
				>
					<Box
						display={"flex"}
						flexDirection={"column"}
						alignItems={"center"}
						justifyContent={"center"}
					>
						<Typography
							fontWeight={"500"}
							fontFamily={"Rokkitt"}
							fontSize={"128px"}
						>
							{statusCode}
						</Typography>
						<Typography
							fontWeight={"300"}
							fontFamily={"Rokkitt"}
							fontSize={"36px"}
						>
							Oops, Something Went Wrong!
						</Typography>
					</Box>
					<Box>
						<Typography
							textAlign={"center"}
							fontWeight={"300"}
							fontSize={"20px"}
							fontFamily={"Rokkitt"}
						>
							{customMessage
								? customMessage
								: NotFoundStatus.find((item) => item.status === statusCode)
										?.message}
							<br />
							Please contact our Client Services or navigate to another page.
							Thank you...,
						</Typography>
					</Box>
					<Box
						display={"grid"}
						sx={{
							gridTemplateColumns: "repeat(2 , minmax(0,1fr))",
						}}
						gap={"12px"}
					>
						<Link href="/" passHref>
							<Button
								variant="outlined"
								sx={{
									textTransform: "none",
									fontFamily: "Poppins",
									fontWeight: "400",
									width: "100%", // biar ngisi kolom
								}}
							>
								Take Me Home
							</Button>
						</Link>
						<Button
							variant="outlined"
							onClick={() => router.back()}
							sx={{
								textTransform: "none",
								fontFamily: "Poppins",
								fontWeight: "400",
							}}
						>
							Go Back
						</Button>
					</Box>
				</Box>
			</NotFoundContainer>
		</NotFoundWrapper>
	);
};
