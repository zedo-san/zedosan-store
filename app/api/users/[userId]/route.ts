import { NextRequest, NextResponse } from "next/server";
import Users from "@/db/users.json";
import { getUserDataResponse, mapToObject } from "@/helpers";

interface IGetUserContext {
  params: {
    userId: string;
  };
}

export async function GET(_: NextRequest, { params }: IGetUserContext) {
  const userId = params.userId;
  const selectedUser = Users.find((user) => user.id === userId);

  if (!selectedUser) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const userData = getUserDataResponse(selectedUser);
  return NextResponse.json(mapToObject(userData), { status: 200 });
}
