import { createDirectus, rest } from "@directus/sdk";
export const directus = createDirectus(
	process.env.NEXT_PUBLIC_DIRECTUS_URL as string
).with(rest());
