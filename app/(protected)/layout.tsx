import { User, getServerSession } from "next-auth";
import React from "react";
import { nextAuthOptions } from "../../config/nextAuthOptions";
import { redirect } from "next/navigation";
import Sidebar from "./_components/Sidebar/Sidebar";
import Profile from "./_components/Profile/Profile";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(nextAuthOptions);
  if (!session) {
    const queryParams = "?callbackUrl=/dashboard";
    redirect(`/${queryParams}`);
  }
  return (
    <div className="flex min-h-screen">
      <div className="h-auto hidden lg:block">
        <Sidebar />
      </div>

      <div className="flex-1 border-l">
        <div className="border-b flex justify-between lg:justify-end h-14 p-6 items-center">
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger>
                <HamburgerMenuIcon />
              </SheetTrigger>
              <SheetContent side="left">
                <Sidebar />
              </SheetContent>
            </Sheet>
          </div>
          <Profile user={session.user as User} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Layout;
