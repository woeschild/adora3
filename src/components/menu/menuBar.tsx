"use client";

import Link from "next/link";
import { MenuItemType } from "./hooks/useMenuItems";

/**
 * Props for the MenuBar component.
 * Extends the MenuItemType so it stays in sync with menu definitions.
 */
type MenuBarProps = MenuItemType;

/**
 * Renders a single navigation menu item.
 *
 * - Applies "active" styling when the item's state is "active"
 * - Applies "dormant" styling when explicitly set
 * - Falls back to default/hover styles otherwise
 *
 * @example
 * <MenuBar icon={<Icon />} name="Dashboard" path="/" state="active" />
 */
export default function MenuBar({ icon, name, path, state, onNavigate }: MenuBarProps) {
  const isActive = state === "active";
  const isDormant = state === "dormant";

  /**
   * Compute the appropriate className for the link.
   * Keeps styling rules organized and easier to tweak.
   */
  const linkClassName = [
    "flex gap-3 items-center capitalize p-3 rounded transition-colors duration-150 ease-in-out cursor-pointer",
    isActive
      ? "text-[var(--accent)] bg-[var(--primary-color)]"
      : isDormant
      ? "pointer-events-none opacity-50"
      : "text-[var(--primary-color)] hover:bg-[var(--accent-light)]",
  ].join(" ");

  return (
    <Link
      onClick={onNavigate}
      href={path}
      className={linkClassName}
      aria-current={isActive ? "page" : undefined} // Accessibility: mark active page
    >
      <div className="text-lg">{icon}</div>
      <div className="flex-1">{name}</div>
    </Link>
  );
}
