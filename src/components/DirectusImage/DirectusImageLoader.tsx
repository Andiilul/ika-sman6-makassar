import type { ImageLoaderProps } from "next/image";
const baseURL =
  process.env.NEXT_PUBLIC_DIRECTUS_URL?.replace(/\/$/, "") ||
  "https://your-fallback-directus-domain.com";

export const directusImageLoader = ({ src }: ImageLoaderProps) => {
  return `${baseURL}/assets/${src}`;
};
