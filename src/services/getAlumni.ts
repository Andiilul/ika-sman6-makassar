import { IAlumni } from "@/interfaces/Alumni";
import { directus } from "@/lib/directus";
import { readFile, readItem, readItems } from "@directus/sdk";

export const getAllAlumni = async (
	limit: number,
	page: number,
	keyword?: string,
	gradYear?: number
) => {
	try {
		// Build filters
		console.log("get alumni data");
		const nameFilter =
			keyword && keyword.trim() !== ""
				? { name: { _icontains: keyword.trim() } }
				: null;

		const gradFilter = gradYear ? { graduation_year: { _eq: gradYear } } : null;

		const filters = [];
		if (nameFilter) filters.push(nameFilter);
		if (gradFilter) filters.push(gradFilter);

		const filter = filters.length > 0 ? { _and: filters } : {};

		console.log("🟨 Directus filter used:", JSON.stringify(filter, null, 2));

		// Fetch alumni
		const result = await directus.request(
			readItems("alumni", {
				limit,
				page,
				filter,
			})
		);

		console.log("get alumni data", result);

		// Fetch image URLs

		for (const i in result) {
			if (result[i].image) {
				try {
					console.log("thiss iss image result", result[i].image);
					const file = await directus.request(readFile(result[i].image));
					result[i].imageURL = file.filename_disk;
					console.log("ini", result[i].imageURL);
				} catch (error) {
					console.warn(
						`⚠️ Failed to read image file for alumni ID ${result[i].id}:`,
						error
					);
				}
			} else {
				result[i].imageURL = null;
			}
		}

		console.log("🟩 Final alumni result:", result);
		return result;
	} catch (error) {
		console.error("❌ Error in getAllAlumni:", error);
		throw error;
	}
};

import { aggregate } from "@directus/sdk";
export const getAlumniCount = async (
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

export const getAlumniById = async (id: string): Promise<IAlumni | null> => {
	try {
		const result = await directus.request(readItem("alumni", id));

		return result.length > 0 ? (result[0] as IAlumni) : null;
	} catch (error) {
		console.error("Error fetching activity by ID:", error);
		throw error;
	}
};
