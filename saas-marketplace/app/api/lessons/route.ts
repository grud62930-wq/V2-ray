import { NextRequest, NextResponse } from "next/server";
import prisma from "@/generated/prisma";

// GET /api/lessons - List lessons (for buyers)
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const subject = searchParams.get("subject");
    const grade = searchParams.get("grade");

    const where: any = { status: "APPROVED" };
    if (subject) where.subject = subject;
    if (grade) where.grade = parseInt(grade);

    const lessons = await prisma.lesson.findMany({
      where,
      include: {
        teacher: {
          select: { name: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(lessons);
  } catch (error) {
    console.error("Error fetching lessons:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// POST /api/lessons - Create new lesson (for teachers)
export async function POST(request: NextRequest) {
  try {
    const { title, subject, grade, description, price, teacherId } = await request.json();

    // Validate required fields
    if (!title || !subject || !grade || !description || !price || !teacherId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create new lesson
    const lesson = await prisma.lesson.create({
      data: {
        title,
        subject,
        grade: parseInt(grade),
        description,
        price: parseFloat(price),
        teacherId,
        fileUrl: "", // Will be updated when file upload is implemented
      },
    });

    return NextResponse.json(lesson, { status: 201 });
  } catch (error) {
    console.error("Error creating lesson:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}