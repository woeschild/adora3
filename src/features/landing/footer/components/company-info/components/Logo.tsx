import Image from 'next/image';
import adoraLogo from '../../../assets/adora-logo.png';

export default function Logo() {
  return (
    <div className="flex items-center space-x-3 mb-8">
      <Image
        src={adoraLogo}
        alt="Adora3 Logo"
        className="w-20"
      />
    </div>
  );
}