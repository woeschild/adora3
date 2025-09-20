"use client";

import { useState } from 'react';
import Logo from './desktop/Logo';
import Menu from './desktop/Menu';
import CTA from './desktop/CTA';
import HamburgerIcon from './mobile/HamburgerIcon';
import MobileMenu from './mobile/MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-surface border-b border-subtle sticky top-0 z-50">
      {/* Main header bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Menu */}
          <Menu />
          
          {/* Desktop CTA */}
          <CTA />
          
          {/* Mobile Hamburger */}
          <HamburgerIcon 
            isOpen={isMobileMenuOpen} 
            onClick={toggleMobileMenu} 
          />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
      />
    </header>
  );
}