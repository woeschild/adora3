import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface SpecializationCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function SpecializationCard({ icon, title, description }: SpecializationCardProps) {
  return (
    <div className="text-left space-y-4">
      {/* Icon */}
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1">
          <Image
            src={icon}
            alt={title}
            width={20}
            height={20}
            className="w-5 h-5"
          />
        </div>
        
        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-base md:text-md text-gray-300 leading-relaxed">
        {description}
      </p>
    </div>
  );
}