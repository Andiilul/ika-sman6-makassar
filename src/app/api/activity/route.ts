import { getAllActivity } from "@/services/getActivity";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const keyword = searchParams.get("keyword") || undefined;
	const minDate = searchParams.get("minDate") || undefined;
	const maxDate = searchParams.get("maxDate") || undefined;
	const limit = searchParams.get("limit") ?? undefined;
	const parsedLimit = limit ? parseInt(limit) : undefined;
	const page = searchParams.get("page") ?? undefined;
	const parsedPage = page ? parseInt(page) : 1;

	const data = await getAllActivity(
		parsedLimit as number,
		parsedPage,
		keyword,
		minDate,
		maxDate
	);
	return NextResponse.json(data);
}
