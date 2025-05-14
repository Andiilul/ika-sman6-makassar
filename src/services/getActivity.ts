import { IActivity } from "./../interfaces/Kegiatan";
import { directus } from "@/lib/directus";
import { readFile, readItems } from "@directus/sdk";

export const getAllActivity = async (
	limit: number,
	page: number,
	keyword?: string,
	minDate?: string, // e.g. "2025-05-01"
	maxDate?: string // e.g. "2025-05-31"
) => {
	try {
		// Filter untuk title (use _icontains for better matching)
		const titleFilter =
			keyword && keyword.trim() !== ""
				? { title: { _icontains: keyword.trim() } }
				: null;

		// Filter untuk rentang tanggal (unchanged)
		const dateFilter =
			minDate || maxDate
				? {
						date: {
							...(minDate ? { _gte: minDate } : {}),
							...(maxDate ? { _lte: maxDate } : {}),
						},
				  }
				: null;

		// Gabungkan filter dengan AND hanya jika diperlukan
		const filters = [];
		if (titleFilter) filters.push(titleFilter);
		if (dateFilter) filters.push(dateFilter);

		const filter = filters.length > 0 ? { _and: filters } : {};

		const result = await directus.request(
			readItems("activity", {
				limit,
				page,
				filter,
			})
		);

		// Fetch image URLs
		for (const i in result) {
			if (result[i].image) {
				const file = await directus.request(readFile(result[i].image));
				result[i].imageURL = file.filename_disk;
			} else {
				result[i].imageURL = null;
			}
		}

		// console.log(result);
		return result;
	} catch (error) {
		console.error("Error fetching activities:", error);
		throw error;
	}
};

import { aggregate } from "@directus/sdk";
export const getActivityCount = async (
	keyword?: string,
	minDate?: string,
	maxDate?: string
): Promise<number> => {
	const titleFilter =
		keyword && keyword.trim() !== "" ? { title: { _contains: keyword } } : {};

	const dateFilter =
		minDate || maxDate
			? {
					date: {
						...(minDate ? { _gte: minDate } : {}),
						...(maxDate ? { _lte: maxDate } : {}),
					},
			  }
			: {};

	const filter =
		Object.keys(titleFilter).length || Object.keys(dateFilter).length
			? { _and: [titleFilter, dateFilter] }
			: {};

	const result = await directus.request(
		aggregate("activity", {
			aggregate: { count: "*" },
			filter,
		})
	);

	// Pastikan nilainya adalah number, default ke 0 jika null
	return Number(result[0].count ?? 0);
};

export const getActivityById = async (
	id: string
): Promise<IActivity | null> => {
	try {
		const result = await directus.request(
			readItems("activity", {
				filter: { id: { _eq: id } },
			})
		);

		return result.length > 0 ? (result[0] as IActivity) : null;
	} catch (error) {
		console.error("Error fetching activity by ID:", error);
		throw error;
	}
};
