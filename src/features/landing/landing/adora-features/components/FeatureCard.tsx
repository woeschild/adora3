import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface FeatureCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-left space-y-3">
      {/* Icon */}
      <div className="flex justify-start mb-4">
          <Image
            src={icon}
            alt={title}
            width={32}
            height={32}
            className="w-8 h-8"
          />
      </div>
      
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-primary leading-tight">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-base md:text-md text-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}