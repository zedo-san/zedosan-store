import { NextResponse } from "next/server";
import products from "@/db/products.json";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/config/nextAuthOptions";

export async function GET() {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const responseData = {
    data: products,
    message: "Products retrieved successfully.",
  };

  return NextResponse.json(responseData, { status: 200 });
}
