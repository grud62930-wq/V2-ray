import { NextRequest, NextResponse } from "next/server";
import prisma from "@/generated/prisma";

// PUT /api/admin/lessons - Update lesson status (approve/reject)
export async function PUT(request: NextRequest) {
  try {
    const { lessonId, status } = await request.json();

    // Validate required fields
    if (!lessonId || !status) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate status
    if (!["APPROVED", "REJECTED"].includes(status)) {
      return NextResponse.json(
        { error: "Invalid status" },
        { status: 400 }
      );
    }

    // Update lesson status
    const lesson = await prisma.lesson.update({
      where: { id: lessonId },
      data: { status },
    });

    return NextResponse.json(lesson);
  } catch (error) {
    console.error("Error updating lesson status:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET /api/admin/lessons - Get pending lessons for admin review
export async function GET() {
  try {
    const lessons = await prisma.lesson.findMany({
      where: { status: "PENDING" },
      include: {
        teacher: {
          select: { name: true, email: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(lessons);
  } catch (error) {
    console.error("Error fetching pending lessons:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}