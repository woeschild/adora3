import { Check } from 'lucide-react';
import Button from '@/features/landing/shared-components/button/Button';

interface PriceCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  highlightColor?: string;
  showTalkToAdora?: boolean;
}

export default function PriceCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  isPopular = false,
  highlightColor = 'bg-white',
  showTalkToAdora = false
}: PriceCardProps) {
  const cardClasses = isPopular
    ? `${highlightColor} text-white relative transform scale-105`
    : 'bg-white text-gray-900';
    
  const buttonClasses = isPopular
    ? 'bg-white text-accent hover:bg-gray-50'
    : 'bg-accent text-white hover:bg-accent/90';

  return (
    <div className={`rounded-2xl p-8 shadow-lg border border-gray-100 ${cardClasses}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent-dark text-white px-4 py-1 rounded-full text-sm font-medium">
            MOST POPULAR
          </span>
        </div>
      )}
      
      {/* Talk to Adora AI Assistant - Only for Custom Plan */}
      {showTalkToAdora && (
        <div className="absolute -top-4 right-4">
          <button className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-accent/90 transition-colors">
            <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </span>
            Talk to Adora AI Assistant
          </button>
        </div>
      )}

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold">{price}</span>
          <span className={`text-lg ${isPopular ? 'text-white/80' : 'text-gray-600'}`}>{period}</span>
        </div>
      </div>

      {/* Title and Description */}
      <div className="mb-8">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className={`text-sm leading-relaxed ${isPopular ? 'text-white/90' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="mb-8">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${isPopular ? 'text-white' : 'text-green-500'}`} />
              <span className={`text-sm leading-relaxed ${isPopular ? 'text-white/90' : 'text-gray-700'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Button */}
      <Button
        variant={!isPopular ? 'primary' : 'secondary'}
        size="lg"
        className={`w-full ${buttonClasses} border-none shadow-sm font-semibold`}
      >
          {buttonText}
      </Button>
    </div>
  );
}