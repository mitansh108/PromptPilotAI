"use client";

import React from "react";
import { Home, CreditCard, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

function SideNav() {
  const path = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-2xl font-bold text-purple-400 cursor-pointer">
            PromptPilot.AI
          </h1>
        </Link>

        {/* Nav Links - Hidden on mobile */}
        <div className="hidden sm:flex gap-6 text-sm font-medium items-center">
          <NavLink href="/dashboard" icon={<Home size={20} />} active={path === "/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink href="/dashboard/billing" icon={<CreditCard size={20} />} active={path === "/dashboard/billing"}>
            Billing
          </NavLink>
          <NavLink href="/dashboard/settings" icon={<Settings size={20} />} active={path === "/dashboard/settings"}>
            Settings
          </NavLink>
        </div>

        {/* User button - Always visible */}
        <div>
          <UserButton />
        </div>
      </div>
    </nav>
  );
}

type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  active: boolean;
  children: React.ReactNode;
};

function NavLink({ href, icon, active, children }: NavLinkProps) {
  return (
    <Link href={href}>
      <div
        className={`flex items-center gap-2 px-3 py-2 rounded-md transition-all duration-200 ${
          active
            ? "text-purple-400 font-semibold bg-gray-800"
            : "text-gray-300 hover:text-white hover:bg-gray-700"
        }`}
      >
        {icon}
        <span>{children}</span>
      </div>
    </Link>
  );
}

export default SideNav;
