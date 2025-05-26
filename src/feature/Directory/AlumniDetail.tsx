"use client";

import { useEffect, useState } from "react";
import { IAlumni } from "@/interfaces/Alumni";
import Image from "next/image";
import {
	Box,
	Typography,
	CircularProgress,
	useMediaQuery,
} from "@mui/material";
import { PageLayout } from "@/components/Page";
import { NotFound } from "../NotFound";
import { AlumniDetailWrapper, AlumniDetailContainer } from "./styled";
import { directusImageLoader } from "@/components/DirectusImage/DirectusImageLoader";

interface AlumniDetailProps {
	id: string;
}

export const AlumniDetail: React.FC<AlumniDetailProps> = ({ id }) => {
	const [alumni, setAlumni] = useState<IAlumni | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const large = useMediaQuery("(min-width:1024px)");
	const medium = useMediaQuery("(min-width:768px)");

	useEffect(() => {
		const fetchAlumni = async () => {
			try {
				const res = await fetch(`/api/alumni/${id}`);
				if (!res.ok) throw new Error("Failed to fetch");
				const data = await res.json();
				setAlumni(data);
			} catch (err) {
				console.error("Failed to fetch alumni:", err);
				setError(true);
			} finally {
				setLoading(false);
			}
		};

		fetchAlumni();
	}, [id]);

	if (loading) {
		return (
			<Box
				display="flex"
				justifyContent="center"
				alignItems="center"
				height="300px"
			>
				<CircularProgress />
			</Box>
		);
	}

	if (error || !alumni) {
		return <NotFound statusCode="404" />;
	}

	return (
		<PageLayout>
			<AlumniDetailWrapper>
				<AlumniDetailContainer>
					<Box
						display={"flex"}
						flexDirection={large ? "row" : "column"}
						gap={large ? "128px" : medium ? "64px" : "32px"}
						width="100%"
					>
						<Box
							position="relative"
							height="360px"
							display="flex"
							sx={{
								aspectRatio: "1/1",
							}}
						>
							<Image
								src={alumni.imageURL || ""}
								alt={alumni.name}
								fill
								loader={directusImageLoader}
								style={{ objectFit: "cover" }}
							/>
						</Box>
						<Box display={"flex"} flexDirection={"column"} gap="8px">
							<Typography
								fontSize={large ? "32px" : medium ? "24px" : "16px"}
								fontWeight={400}
							>
								{alumni.name}
							</Typography>
							<Typography
								color="primary"
								fontSize={large ? "16px" : medium ? "14px" : "12px"}
								fontWeight={400}
							>
								{alumni.position}
							</Typography>
							<Typography
								color="primary"
								fontSize={large ? "16px" : medium ? "14px" : "12px"}
								fontWeight={400}
							>
								{alumni.location === "makassar" ? "Makassar" : "Luar Makassar"}
							</Typography>
							<Typography
								color="primary"
								fontSize={large ? "16px" : medium ? "14px" : "12px"}
								fontWeight={400}
							>
								Domisili : {alumni.domicile}
							</Typography>
							<Typography
								color="primary"
								fontSize={large ? "16px" : medium ? "14px" : "12px"}
								fontWeight={400}
							>
								NISN : {alumni.nisn}
							</Typography>
						</Box>
					</Box>
          <Box>
            adasd
          </Box>
				</AlumniDetailContainer>
			</AlumniDetailWrapper>
		</PageLayout>
	);
};