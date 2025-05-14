"use client";

import { useEffect, useState } from "react";
import { IAlumni } from "@/interfaces/Alumni";
import Image from "next/image";
import { Box, Typography, CircularProgress } from "@mui/material";
import { PageLayout } from "@/components/Page";
import { NotFound } from "../NotFound";
import { AlumniDetailWrapper, AlumniDetailContainer, AlumniImageContainer } from "./styled";
import { directusImageLoader } from "@/components/DirectusImage/DirectusImageLoader";

interface AlumniDetailProps {
  id: string;
}

export const AlumniDetail: React.FC<AlumniDetailProps> = ({ id }) => {

  const [alumni, setAlumni] = useState<IAlumni | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
      <Box display="flex" justifyContent="center" alignItems="center" height="300px">
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
        {alumni.imageURL && (
          <AlumniImageContainer>
            <Image
              src={alumni.imageURL}
              alt={alumni.name}
              fill
              loader={directusImageLoader}
              style={{ objectFit: "cover" }}
            />
          </AlumniImageContainer>
        )}

        <AlumniDetailContainer>
          <Typography variant="h5" fontWeight={600}>
            {alumni.name}
          </Typography>

          <Typography variant="body2">
            <strong>NISN:</strong> {alumni.nisn}
          </Typography>

          <Typography variant="body2">
            <strong>Jenis Kelamin:</strong> {alumni.gender === "male" ? "Laki-laki" : "Perempuan"}
          </Typography>

          <Typography variant="body2">
            <strong>Tahun Lulus:</strong> {alumni.graduation_year}
          </Typography>

          <Typography variant="body2">
            <strong>Domisili:</strong> {alumni.domicile}
          </Typography>

          <Typography variant="body2">
            <strong>Alamat KTP:</strong> {alumni.address}
          </Typography>

          <Typography variant="body2">
            <strong>Profesi:</strong> {alumni.profession} ({alumni.position})
          </Typography>

          <Typography variant="body2">
            <strong>Lokasi Tugas:</strong> {alumni.location === "makassar" ? "Makassar" : "Luar Makassar"}
          </Typography>

          <Typography variant="body2">
            <strong>Suku:</strong> {alumni.ethnicity}
          </Typography>

          <Typography variant="body2">
            <strong>Hobi:</strong> {alumni.hobby}
          </Typography>

          <Typography variant="body2">
            <strong>Kontak:</strong> {alumni.contact_number}
          </Typography>
        </AlumniDetailContainer>
      </AlumniDetailWrapper>
    </PageLayout>
  );
};
