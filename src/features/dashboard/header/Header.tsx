"use client";

import { usePathname } from "next/navigation";
import { Breadcrumbs } from "./Breadcrumbs";
import { AgentInfo } from "./AgentInfo";
import { Notifications } from "./Notifications";
import { UserMenu } from "./UserMenu";
import avatar from "../../../../public/profile.png";
import { AccountCard } from "./AccountCard";
import { useState, useRef, useEffect } from "react";

type Crumb = { label: string; href?: string };

const LABEL_MAP: Record<string, string> = {
  menu: "Menu",
  dashboard: "Dashboard",
  "call-logs": "Call Logs",
  "account-settings": "Account Settings",
  profile: "Profile",
};

function prettify(segment: string) {
  const decoded = decodeURIComponent(segment);
  if (LABEL_MAP[decoded]) return LABEL_MAP[decoded];
  return decoded
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function Header() {
  const [show, setShow] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || "/";
  const segments = pathname.split("/").filter(Boolean);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        userMenuRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setShow(false);
      }
    }

    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  // Always produce exactly two crumbs
  let visibleSegments: string[];
  if (segments.length >= 2) {
    // Use last two if nested
    visibleSegments = segments.slice(-2);
  } else if (segments.length === 1) {
    // Prepend "menu" if only one segment
    visibleSegments = ["menu", segments[0]];
  } else {
    // Root fallback → Menu + Dashboard
    visibleSegments = ["menu", "dashboard"];
  }

  const items: Crumb[] = visibleSegments.map((seg, idx) => {
    const href = "/" + visibleSegments.slice(0, idx + 1).join("/");
    const isLast = idx === visibleSegments.length - 1;
    return { label: prettify(seg), href: isLast ? undefined : href };
  });

  return (
    <header className="w-full sm:shadow-xs shadow-none text-xs px-4 py-1 flex items-center justify-between">
      {/* Left: Breadcrumbs (flex-1 ensures it grows, min-w-0 allows truncation) */}
      <div className="min-w-0">
        <Breadcrumbs items={items} />
      </div>

      {/* Middle: Agent Info (only visible on md+) */}
      <div className="hidden md:block">
        <AgentInfo agentNumber="012-333-444" />
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-4 shrink-0">
        <Notifications />
        <div ref={userMenuRef}>
          <UserMenu 
            name="Company A" 
            email="companyA@gmail.com" 
            avatar={avatar} 
            onClick={() => { setShow(!show) }} 
          />
        </div>
      </div>
      
      {/* Dropdown with smooth slide animation */}
      <div
        ref={dropdownRef}
        className={`fixed top-16 right-4 z-50 transform transition-all duration-300 ease-in-out origin-top ${
          show 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <AccountCard onLinkClick={()=> setShow(false)} />
      </div>
    </header>
  );
}