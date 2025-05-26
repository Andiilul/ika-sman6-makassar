import { getAllAlumni } from "@/services/getAlumni";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);

		const keyword = searchParams.get("keyword") ?? undefined;

		const gradYear = searchParams.get("gradYear") ?? undefined;
		const limit = searchParams.get("limit") ?? undefined;
		const parsedGradYear = gradYear ? parseInt(gradYear) : undefined;
		const parsedLimit = limit ? parseInt(limit) : undefined;
		
		const locationParam = searchParams.get("location") ?? undefined;
		const validLocations = ["makassar", "non-makassar"];
		const location = validLocations.includes(locationParam ?? "")
			? locationParam
			: undefined;

		const page = searchParams.get("page") ?? undefined;
		const parsedPage = page ? parseInt(page) : 1;

		const data = await getAllAlumni(
			parsedLimit as number,
			parsedPage,
			keyword,
			parsedGradYear,
			location
		);

		return NextResponse.json(data);
	} catch (err) {
		console.error("❌ Error in alumni route:", err);
		return NextResponse.json([]);

	}
}
