import { NextRequest, NextResponse } from "next/server";
import prisma from "@/generated/prisma";

// POST /api/sales - Create a new sale
export async function POST(request: NextRequest) {
  try {
    const { lessonId, buyerId, amount } = await request.json();

    // Validate required fields
    if (!lessonId || !buyerId || !amount) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify lesson exists and is approved
    const lesson = await prisma.lesson.findUnique({
      where: { id: lessonId },
    });

    if (!lesson) {
      return NextResponse.json(
        { error: "Lesson not found" },
        { status: 404 }
      );
    }

    if (lesson.status !== "APPROVED") {
      return NextResponse.json(
        { error: "Lesson is not available for purchase" },
        { status: 400 }
      );
    }

    // Create sale
    const sale = await prisma.sale.create({
      data: {
        lessonId,
        buyerId,
        amount: parseFloat(amount),
      },
      include: {
        lesson: true,
        buyer: true,
      },
    });

    return NextResponse.json(sale, { status: 201 });
  } catch (error) {
    console.error("Error creating sale:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}