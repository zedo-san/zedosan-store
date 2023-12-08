import { NextRequest, NextResponse } from "next/server";
import Users from "@/db/users.json";
import { getUserDataResponse, mapToObject } from "@/helpers";
import { getServerSession } from "next-auth";
import { nextAuthOptions } from "@/config/nextAuthOptions";

interface IGetUserContext {
  params: {
    userId: string;
  };
}

export async function GET(_: NextRequest, { params }: IGetUserContext) {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }
  const userId = params.userId;
  const selectedUser = Users.find((user) => user.id === userId);

  if (!selectedUser) {
    return NextResponse.json({ error: "User not found." }, { status: 404 });
  }

  const userData = getUserDataResponse(selectedUser);
  return NextResponse.json(mapToObject(userData), { status: 200 });
}
