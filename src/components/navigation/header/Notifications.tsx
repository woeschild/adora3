"use client";

import { Bell } from "lucide-react";

export function Notifications() {
  return (
    <button
      aria-label="Notifications"
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <Bell className="w-6 h-6 text-gray-700" />
    </button>
  );
}
