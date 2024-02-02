import { NextRequest, NextResponse } from "next/server";
import getPrismaInstance from "@/models/getPrismaInstance";

const prisma = getPrismaInstance();
export async function GET() {
  try {
    const data = await prisma.room.findMany();
    return NextResponse.json({ data: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { roomNumber, availability, cleaningStatus, price, bedType } =
      reqBody;
    await prisma.room.create({
      data: {
        roomNumber: roomNumber,
        availability: availability,
        cleaningStatus: cleaningStatus,
        price: price,
        bedType: bedType,
      },
    });
    return NextResponse.json({ message: "success" }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "something went wrong" },
      { status: 400 }
    );
  }
}
