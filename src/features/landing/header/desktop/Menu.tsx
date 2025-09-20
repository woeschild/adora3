import Link from 'next/link';

const navItems = [
  { href: '/terms', label: 'Terms' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About us' },
  { href: '/contact', label: 'Contact Us' }
];

export default function Menu() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-primary hover:text-accent transition-colors duration-200 font-medium text-base"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}