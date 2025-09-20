"use client";

import { Bell } from "lucide-react";
import Link from "next/link";

export function Notifications() {
  return (
    <Link
      href="/dashboard/notifications"
      aria-label="Notifications"
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <Bell size={16} className=" text-gray-700" />
    </Link>
  );
}
