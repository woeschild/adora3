import Link from 'next/link';

interface FooterLinkComponentProps {
  href: string;
  children: React.ReactNode;
}

export default function FooterLinkComponent({ href, children }: FooterLinkComponentProps) {
  return (
    <Link 
      href={href} 
      className="text-gray-300 w-fit hover:text-accent transition-colors duration-200 block py-1"
    >
      {children}
    </Link>
  );
}