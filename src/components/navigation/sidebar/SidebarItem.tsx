// app/components/sidebar/SidebarItem.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  href: string;
  icon: LucideIcon;
  label: string;
  closeSidebar: () => void;
}

export default function SidebarItem({
  href,
  icon: Icon,
  label,
  closeSidebar,
}: SidebarItemProps) {
  const pathname = usePathname();

  const handleClick = () => {
    // Only close if on mobile
    if (window.innerWidth < 768) {
      closeSidebar();
    }
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`flex items-center gap-3 px-6 py-3 rounded-lg transition 
         ${
          pathname === href ? "bg-[var(--primary)] text-[var(--accent)]" : "text-[var(--primary)] hover:bg-[var(--accent-light)]"
        }`}
    >
      <Icon className="h-5 w-5" />
      <span className="text-sm">{label}</span>
    </Link>
  );
}
