import Link from 'next/link';
import Image from 'next/image';
import adoraLogo from '../assets/adora-logo.png';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200">
      <Image 
        src={adoraLogo} 
        alt="Adora3 Logo" 
        className="w-24"
      />
    </Link>
  );
}