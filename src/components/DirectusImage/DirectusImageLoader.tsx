import type { ImageLoaderProps } from "next/image";

const baseURL = process.env.NEXT_PUBLIC_DIRECTUS_URL?.replace(/\/$/, "") || "";

export const directusImageLoader = ({ src }: ImageLoaderProps) => {
	return `${baseURL}/assets/${src}`;
};
