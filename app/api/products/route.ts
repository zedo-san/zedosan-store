import { NextResponse } from "next/server";
import products from "@/db/products.json";

export async function GET() {
  const responseData = {
    data: products,
    message: "Products retrieved successfully.",
  };

  return NextResponse.json(responseData, { status: 200 });
}
