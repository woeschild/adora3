import Link from 'next/link';
import Button from '@/features/landing/shared-components/button/Button';

export default function HeroCTAButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Link href="/signup">
        <Button variant="primary" size="lg" className="w-full sm:w-auto">
          Get Started For Free
        </Button>
      </Link>
      <Link href="#voice-assistant">
        <Button variant="secondary" size="lg" className="w-full sm:w-auto">
          Try Voice Assistant
        </Button>
      </Link>
    </div>
  );
}