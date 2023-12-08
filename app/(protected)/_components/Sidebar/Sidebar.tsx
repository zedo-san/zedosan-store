"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { link: "/dashboard", text: "Dashboard" },
    { link: "/inventory", text: "Inventory" },
  ];
  return (
    <div className="w-64 p-4">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-xl font-semibold tracking-tight">Zedosan Store</h2>
        <div className="space-y-2 mt-6">
          {navItems.map((navItem) => (
            <Link key={navItem.link} href={navItem.link} className="block w-full">
              <Button variant={pathname === navItem.link ? "secondary" : "ghost"} className="block w-full text-left">
                {navItem.text}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
