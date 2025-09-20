import Link from 'next/link';
import Button from '@/features/landing/shared-components/button/Button';

export default function CTATextAndSubTexts() {
  return (
    <div className="space-y-6">
      {/* Main Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
        Let Adora3 Take the Calls, While <br />
        You Take the <span className="text-accent">Lead</span>.
      </h2>
      
      {/* Subtext */}
      <p className="text-lg md:text-xl text-accent leading-relaxed max-w-lg">
        Enhance your service with AI-powered, real-time, human-like conversations.
      </p>
      
      {/* CTA Button */}
      <div className="pt-4">
        <Link href="/signup">
          <Button variant="primary" size="lg">
            Get Started For Free
          </Button>
        </Link>
      </div>
    </div>
  );
}