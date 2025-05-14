import { getAllAlumni } from "@/services/getAlumni";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	try {
		const { searchParams } = new URL(req.url);
		const keyword = searchParams.get("keyword") || undefined;
		const gradYear = searchParams.get("gradYear");
		const parsedGradYear = gradYear ? parseInt(gradYear) : undefined;
		const location = searchParams.get("location") || undefined;

		const data = await getAllAlumni(100, 1, keyword, parsedGradYear, location);

		return NextResponse.json(data);
	} catch (err) {
		console.error("❌ Error in alumni route:", err);
		return NextResponse.json([], { status: 500 });
	}
}
