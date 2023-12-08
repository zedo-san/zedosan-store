"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { User } from "next-auth";
import { signOut } from "next-auth/react";

interface IProfileProps {
  user: User;
}
const Profile = ({ user }: IProfileProps) => {
  const firstLetterOfName = user.name?.slice(0, 1).toUpperCase() ?? "A";
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={user.image as string} alt="profile image" />
            <AvatarFallback>{firstLetterOfName}</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-80">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">{user.name}</h4>
              <p className="text-sm text-muted-foreground">{user.email}</p>
            </div>
            <div className="grid gap-2">
              <Button variant="secondary" onClick={() => signOut({ callbackUrl: "/", redirect: true })}>
                Logout
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Profile;
