'use client';

import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  User,
  Mail,
  Shield,
  Settings,
  CreditCard,
} from 'lucide-react';

/**
 * Renders a single tab for the navigation.
 * @param {object} props - The component props.
 * @param {string} props.href - The URL to navigate to.
 * @param {string} props.label - The text label for the tab.
 * @param {React.ReactNode} props.icon - The icon component for the tab.
 * @param {boolean} props.isActive - Whether the tab is currently active.
 */
interface TabProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
}

function Tab({ href, label, icon, isActive }: TabProps) {
  const activeClasses = isActive
    ? 'border-b-2 border-orange-500 text-orange-500 font-medium'
    : 'text-gray-600 hover:text-orange-500 hover:border-b-2 hover:border-orange-500/50';

  return (
    <Link
      href={href}
      className={`flex-1 flex items-center justify-center py-4 px-2 sm:px-4 transition-all duration-200 whitespace-nowrap ${activeClasses}`}
    >
      <div className="sm:hidden">{icon}</div>
      <span className="hidden sm:block">{label}</span>
    </Link>
  );
}

/**
 * The main component for the tab header.
 * @param {object} props - The component props.
 * @param {string} props.activePath - The currently active path.
 */
interface TabHeaderProps {
  activePath: string;
}

function TabHeader({ activePath }: TabHeaderProps) {
  const tabs = [
    { href: '/account-settings', label: 'Account info', icon: <User size={20} /> },
    { href: '/account-settings/email', label: 'Email', icon: <Mail size={20} /> },
    { href: '/account-settings/security', label: 'Security', icon: <Shield size={20} /> },
    { href: '/account-settings/account-preference', label: 'Preference', icon: <Settings size={20} /> },
    { href: '/account-settings/subscription', label: 'Subscription', icon: <CreditCard size={20} /> },
  ];

  return (
    <div className="flex w-full overflow-x-auto border-b border-gray-200">
      {tabs.map((tab) => (
        <Tab
          key={tab.href}
          href={tab.href}
          label={tab.label}
          icon={tab.icon}
          isActive={activePath === tab.href}
        />
      ))}
    </div>
  );
}

/**
 * The main layout component for the application.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to render inside the layout.
 */
interface AccountLayoutProps {
  children: React.ReactNode;
}

export default function AccountLayout({
  children,
}: AccountLayoutProps) {
  const pathname = usePathname();

  // In a real application, you might use a more robust state management or context for the active tab.
  // For this example, we'll derive it from the pathname.
  const activePath = pathname || '/account/info';

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden">
        <TabHeader activePath={activePath} />
        <main>{children}</main>
      </div>
    </div>
  );
}
