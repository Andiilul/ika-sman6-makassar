import { getAlumniById } from "@/services/getAlumni";
import { NextResponse, type NextRequest } from "next/server";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;  // ✅ Await params correctly

    const alumni = await getAlumniById(id);

    if (!alumni) {
      return NextResponse.json(
        { message: "Alumni not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(alumni);
  } catch (error) {
    console.error("Failed to fetch alumni detail:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
