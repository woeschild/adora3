interface StepCardProps {
  stepNumber: string;
  title: string;
  description: string;
}

export default function StepCard({ stepNumber, title, description }: StepCardProps) {
  return (
    <div className="space-y-3">
      {/* Step Number and Title */}
      <div className="flex items-center space-x-3">
        <span className="text-accent font-bold text-2xl md:text-3xl">
          {stepNumber}
        </span>
        <h3 className="text-xl md:text-2xl font-bold text-accent leading-tight">
          {title}
        </h3>
      </div>
      
      {/* Description */}
      <p className="text-base md:text-md text-muted leading-relaxed ml-12">
        {description}
      </p>
    </div>
  );
}