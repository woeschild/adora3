'use client'

import {
  LayoutDashboard,
  Phone,
  BookOpen,
  Calendar,
  CreditCard,
  Share2,
  Settings,
  PhoneOutgoing,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarMenuProps {
  closeSidebar: () => void;
}

export default function SidebarMenu({ closeSidebar }: SidebarMenuProps) {

  const pathname = usePathname();

  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      <Link
      href='/'
      onClick={closeSidebar}
      className={`flex items-center gap-2 px-3 py-3 rounded-lg transition 
         ${
          pathname === '' || pathname === '/' || pathname.includes('profile') || pathname.includes('notifications') ? "bg-[var(--primary)] text-[var(--accent)]" : "text-[var(--primary)] hover:bg-[var(--accent-dark)]"
        }`}
    >
      <LayoutDashboard size={16} />
      <span className="text-xs">Dashboard</span>
    </Link>
      <SidebarItem href="/call-logs" icon={Phone} label="Call Logs" closeSidebar={closeSidebar} />
      <SidebarItem href="/knowledge-base" icon={BookOpen} label="Knowledge Base" closeSidebar={closeSidebar} />
      <SidebarItem href="/outbound-calls" icon={PhoneOutgoing} label="Outbound Calls" closeSidebar={closeSidebar} />
      <SidebarItem href="/appointments" icon={Calendar} label="Appointments" closeSidebar={closeSidebar} />
      <SidebarItem href="/payment" icon={CreditCard} label="Payment" closeSidebar={closeSidebar} />
      <SidebarItem href="/crm-integration" icon={Share2} label="CRM Integration" closeSidebar={closeSidebar} />
      <SidebarItem href="/account-settings" icon={Settings} label="Settings" closeSidebar={closeSidebar} />
    </nav>
  );
}
