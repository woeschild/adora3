"use client";

import { ReactNode } from "react";
import { BsPeople, BsTelephone, BsTelephoneOutbound } from "react-icons/bs";
import { CgDatabase } from "react-icons/cg";
import { IoSettingsOutline, IoWalletOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";
import { SiCivicrm } from "react-icons/si";
import { useActivePath } from "./useActivePath";

/**
 * A single navigation menu item definition.
 */
export type MenuItemType = {
  icon: ReactNode;
  name: string;
  path: string;
  state: "active" | "inactive" | "dormant";
};

/**
 * Static menu configuration (icon, label, path).
 * State ("active" / "inactive") will be derived dynamically in the hook.
 */
const BASE_MENU_ITEMS = [
  { icon: <LuLayoutDashboard />, name: "Dashboard", path: "/" },
  { icon: <BsTelephone />, name: "Call Logs", path: "/call-logs" },
  { icon: <CgDatabase />, name: "Knowledge Base", path: "/knowledge-base" },
  { icon: <BsTelephoneOutbound />, name: "Outbound Calls", path: "/outbound-calls" },
  { icon: <BsPeople />, name: "Appointments", path: "/appointments" },
  { icon: <IoWalletOutline />, name: "Payment", path: "/payment" },
  { icon: <SiCivicrm />, name: "CRM Integration", path: "/crm-integration" },
  { icon: <IoSettingsOutline />, name: "Settings", path: "/settings" },
] as const;

/**
 * Hook to return menu items with their "active" or "inactive" state
 * based on the current URL pathname.
 *
 * @example
 * const menuItems = useMenuItems();
 * menuItems.forEach(item => console.log(item.name, item.state));
 */
export function useMenuItems(): MenuItemType[] {
  return BASE_MENU_ITEMS.map((item) => ({
    ...item,
    state: useActivePath(item.path),
  }));
}
