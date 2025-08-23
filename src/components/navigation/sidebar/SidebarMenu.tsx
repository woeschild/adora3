// app/components/sidebar/SidebarMenu.tsx
import {
  LayoutDashboard,
  Phone,
  BookOpen,
  Calendar,
  CreditCard,
  Share2,
  Settings,
  PhoneOutgoing
} from "lucide-react";
import SidebarItem from "./SidebarItem";

interface SidebarMenuProps {
  closeSidebar: () => void;
}

export default function SidebarMenu({ closeSidebar }: SidebarMenuProps) {
  return (
    <nav className="flex-1 space-y-1 px-2 py-4">
      <SidebarItem href="/" icon={LayoutDashboard} label="Dashboard" closeSidebar={closeSidebar} />
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
