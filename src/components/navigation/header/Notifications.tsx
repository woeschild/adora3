"use client";

import { Bell } from "lucide-react";
import Link from "next/link";

export function Notifications() {
  return (
    <Link
      href="/notifications"
      aria-label="Notifications"
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <Bell className="w-6 h-6 text-gray-700" />
    </Link>
  );
}
