"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import adoraLogo from "../../../public/adora3-logo.png";
import { IoIosPower } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import MenuBar from "./menuBar";
import { useMenuItems } from "./hooks/useMenuItems";

/**
 * Sidebar navigation menu with responsive behavior:
 * - Desktop: Persistent sidebar
 * - Mobile: Hamburger button, slide-in sidebar
 */
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menus = useMenuItems();

  const handleClose = () => setIsOpen(false);

  return (
    <>
      {/* Mobile header: just hamburger */}
      <div className="sm:hidden fixed h-14 bg-[var(--primary-color)] flex items-center justify-end px-4">
        <button
          aria-label="Open menu"
          className="text-[var(--accent)] text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <IoMenu />
        </button>
      </div>

      {/* Sidebar (desktop + mobile overlay) */}
      <aside
        className={`sm:static sm:translate-x-0
              fixed top-0 left-0 h-screen w-60
              bg-[var(--accent)] text-[var(--primary-color)] flex flex-col
              transform transition-transform duration-300 z-50
              ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-label="Sidebar navigation"
      >
        {/* Logo + Close button (close only on mobile) */}
        <div className="h-16 w-full bg-[var(--primary-color)] flex items-center justify-between px-4">
          <Link href="/" aria-label="Go to home" onClick={handleClose}>
            <Image
              src={adoraLogo}
              alt="Adora3 logo"
              width={100}
              height={100}
              priority
            />
          </Link>
          <button
            aria-label="Close menu"
            className="sm:hidden text-[var(--accent)] text-2xl"
            onClick={handleClose}
          >
            <IoClose />
          </button>
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
                  onNavigate={handleClose} // 👈 close on click
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
            onNavigate={handleClose} // 👈 close on click
          />
        </div>
      </aside>

      {/* Mobile overlay backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 sm:hidden z-40"
          onClick={handleClose}
          aria-hidden="true"
        />
      )}
    </>
  );
}
