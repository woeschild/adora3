import Link from 'next/link';
import Button from '@/features/landing/shared-components/button/Button';

const navItems = [
  { href: '/terms', label: 'Terms' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact Us' }
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden bg-surface border-t border-subtle">
      <div className="px-4 py-4 space-y-4">
        {/* Navigation Links */}
        <div className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-2 text-primary hover:text-accent transition-colors duration-200 font-medium text-base"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* CTA Buttons */}
        <div className="pt-4 border-t border-subtle space-y-3">
          <Link
            href="/login"
            className="block py-2 text-primary hover:text-accent transition-colors duration-200 font-medium text-base"
            onClick={onClose}
          >
            Log In
          </Link>
          <Link href="/signup" onClick={onClose}>
            <Button variant="primary" size="md" className="w-full">
              Sign Up For Free
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}