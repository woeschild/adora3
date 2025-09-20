import Image from 'next/image';
import heroImage from '../assets/hero-image.jpg';

export default function HeroImage() {
  return (
    <div className="relative">
      {/* Main Hero Image */}
      <div className="relative rounded-lg overflow-hidden">
        <Image
          src={heroImage}
          alt="Customer service representative using Adora AI Assistant"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}