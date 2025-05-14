import type { ImageLoaderProps } from "next/image";

export const directusImageLoader = ({ src }: ImageLoaderProps) => {
  return `/directus/assets/${src}`; // via proxy path agar aman mixed content
};
