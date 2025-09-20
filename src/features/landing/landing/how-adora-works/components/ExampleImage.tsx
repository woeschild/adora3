import Image from 'next/image';
import phoneMockup from '../assets/phone-with-mockup-example.png';

export default function ExampleImage() {
  return (
    <div className="flex justify-center lg:justify-start">
      <div className="relative max-w-sm">
        <Image
          src={phoneMockup}
          alt="Adora mobile app signup interface showing account creation form"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}