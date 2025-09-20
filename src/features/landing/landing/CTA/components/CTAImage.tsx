import Image from 'next/image';
import ctaImage from '../assets/here-to-help-image-with-phone-icon.png';

export default function CTAImage() {
  return (
    <div className="flex justify-center lg:justify-end">
      <div className="relative max-w-md">
        <Image
          src={ctaImage}
          alt="Customer support visualization with phone icon and team avatars showing 'We're Here to Help' message"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}