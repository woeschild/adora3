"use client";

import { IoNotificationsOutline } from "react-icons/io5";

export function Notifications() {
  return (
    <button
      aria-label="Notifications"
      className="p-2 rounded-full hover:bg-gray-100 transition"
    >
      <IoNotificationsOutline className="w-6 h-6 text-gray-700" />
    </button>
  );
}
