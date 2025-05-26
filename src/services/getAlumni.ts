import { IAlumni } from "@/interfaces/Alumni";
import { directus } from "@/lib/directus";
import { readFile, readItems } from "@directus/sdk";
import { aggregate } from "@directus/sdk";

export const getAllAlumni = async (
	limit: number,
	page: number,
	keyword?: string,
	gradYear?: number,
	location?: string
) => {
	try {
		// Build filters as before
		const nameFilter =
			keyword && keyword.trim() !== ""
				? { name: { _icontains: keyword.trim() } }
				: null;

		const gradFilter = gradYear ? { graduation_year: { _eq: gradYear } } : null;
		const locationFilter =
			location === "makassar"
				? { location: { _icontains: "makassar" } }
				: location === "non-makassar"
				? {
						_and: [
							{ location: { _ncontains: "makassar" } },
							{ location: { _nnull: true } },
						],
				  }
				: null;

		const filters = [];
		if (nameFilter) filters.push(nameFilter);
		if (gradFilter) filters.push(gradFilter);
		if (locationFilter) filters.push(locationFilter);

		const filter = filters.length > 0 ? { _and: filters } : {};

		// Fetch alumni data (pagination + filter)
		const result = await directus.request(
			// Assuming readItems is your helper for GET items
			readItems("alumni", {
				limit,
				page,
				filter,
			})
		);

		// Fetch total count using aggregate with the SAME filter
		const totalCountResult = await directus.request(
			aggregate("alumni", {
				aggregate: { count: "*" },
				filter,
			})
		);

		const total = totalCountResult[0]?.count ?? 0;

		// Add image URLs as you do
		for (const item of result) {
			if (item.image) {
				try {
					const file = await directus.request(readFile(item.image));
					item.imageURL = file.filename_disk;
				} catch {
					item.imageURL = null;
				}
			} else {
				item.imageURL = null;
			}
		}

		return {
			data: result,
			total,
		};
	} catch (error) {
		console.error("❌ Error in getAllAlumni:", error);
		throw error;
	}
};

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
		const result = await directus.request(
			readItems("alumni", {
				filter: { id: { _eq: id } },
				limit: 1,
			})
		);

		if (result.length === 0) return null;

		const alumni = result[0] as IAlumni;

		// Fetch image file URL if available
		if (alumni.image) {
			try {
				const file = await directus.request(readFile(alumni.image));
				alumni.imageURL = file.filename_disk;
			} catch (err) {
				console.warn(`Failed to read image for alumni ID ${id}:`, err);
				alumni.imageURL = null;
			}
		} else {
			alumni.imageURL = null;
		}

		return alumni;
	} catch (error) {
		console.error("Error fetching alumni by ID:", error);
		throw error;
	}
};
