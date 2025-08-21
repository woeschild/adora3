"use client";

import Image from "next/image";
import Link from "next/link";
import adoraLogo from "../../../public/adora3-logo.png";
import { IoIosPower } from "react-icons/io";
import MenuBar from "./menuBar";
import { useMenuItems } from "./hooks/useMenuItems";

/**
 * Sidebar navigation menu for the application.
 *
 * - Displays the company logo at the top
 * - Renders all primary navigation items dynamically from `useMenuItems`
 * - Provides a persistent logout action at the bottom
 */
export default function Menu() {
  const menus = useMenuItems();

  return (
    <aside
      className="bg-[var(--accent)] text-[var(--primary-color)] 
                 w-60 h-screen sticky top-0 flex flex-col"
      aria-label="Sidebar navigation"
    >
      {/* Logo / Branding */}
      <div className="h-16 w-full bg-[var(--primary-color)] flex justify-center items-center">
        <Link href="/" aria-label="Go to home">
          <Image
            src={adoraLogo}
            alt="Adora3 logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      {/* Main navigation */}
      <nav className="flex-1 overflow-y-auto px-4 mt-6">
        <ul className="flex flex-col gap-3">
          {menus.map((menu) => (
            <li key={menu.path}>
              <MenuBar
                name={menu.name}
                icon={menu.icon}
                path={menu.path}
                state={menu.state}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Logout action */}
      <div className="w-full pb-3 bg-[var(--accent-dark)]">
        <MenuBar
          key="logout"
          name="Logout"
          icon={<IoIosPower />}
          path="/logout"
          state="dormant"
        />
      </div>
    </aside>
  );
}
