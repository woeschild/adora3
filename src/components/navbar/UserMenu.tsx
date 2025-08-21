"use client";

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { IoChevronDown } from "react-icons/io5";

interface UserMenuProps {
  name: string;
  email: string;
  avatar: string | StaticImport;
}

export function UserMenu({ name, email, avatar }: UserMenuProps) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 p-2 rounded-xl hover:bg-gray-50 cursor-pointer">
      {/* Avatar */}
      <div className="w-8 h-8 relative shrink-0">
        <Image
          src={avatar}
          alt={`${name} avatar`}
          fill
          className="rounded-full object-cover"
        />
      </div>

      {/* User info – hidden on mobile */}
      <div className="hidden sm:flex flex-col min-w-0">
        <span className="text-sm font-semibold text-gray-900 truncate">
          {name}
        </span>
        <span className="text-xs text-gray-500 truncate">{email}</span>
      </div>

      {/* Dropdown icon (always visible) */}
      <IoChevronDown className="text-gray-600 shrink-0" />
    </div>
  );
}
