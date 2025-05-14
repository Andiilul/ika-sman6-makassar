import { AlumniDetail } from "@/feature/Directory";
import { Metadata } from "next";
import { use } from "react";

export default function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return <AlumniDetail id={id} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;

  return {
    title: `Alumni - ${id}`,
  };
}
