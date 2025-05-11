import { getAllActivity } from "@/services/getActivity";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const keyword = searchParams.get("keyword") || undefined;
	const minDate = searchParams.get("minDate") || undefined;
	const maxDate = searchParams.get("maxDate") || undefined;

	const data = await getAllActivity(100, 1, keyword, minDate, maxDate);
	return NextResponse.json(data);
}