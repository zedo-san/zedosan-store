import { getServerSession } from "next-auth";
import React from "react";
import { nextAuthOptions } from "../../config/nextAuthOptions";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(nextAuthOptions);
  if (session) {
    redirect("/dashboard");
  }

  return <div className="min-h-screen min-w-full">{children}</div>;
};

export default Layout;
