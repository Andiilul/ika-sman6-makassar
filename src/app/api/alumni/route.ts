import { getAllAlumni } from "@/services/getAlumni";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	console.log("API route hit: /api/alumni");

	try {
		const { searchParams } = new URL(req.url);
		const keyword = searchParams.get("keyword") || undefined;
		const gradYear = searchParams.get("gradYear");
		const parsedGradYear = gradYear ? parseInt(gradYear) : undefined;

		console.log("🔍 Query params:", { keyword, parsedGradYear });

		const data = await getAllAlumni(100, 1, keyword, parsedGradYear);

		console.log("📦 Data returned to client:", data.length);

		return NextResponse.json(data);
	} catch (err) {
		console.error("❌ Error in alumni route:", err);
		return NextResponse.json([], { status: 500 });
	}
}
