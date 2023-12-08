import { NextRequest, NextResponse } from "next/server";
import Users from "@/db/users.json";
import { getUserDataResponse, mapToObject } from "@/helpers";
import { TLoginSchema } from "@/schema/login.schema";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();
  const { emailAddress, password } = requestBody as TLoginSchema;
  let loggedInUser = Users.find((user) => user.email === emailAddress);

  if (!loggedInUser) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  if (loggedInUser.password !== password) {
    return NextResponse.json({ error: "Incorrect password. Please try again." }, { status: 400 });
  }

  const userData = getUserDataResponse(loggedInUser);

  const responseData = {
    data: mapToObject(userData),
    message: "You have successfully logged-in.",
  };

  return NextResponse.json(responseData, { status: 200 });
}
