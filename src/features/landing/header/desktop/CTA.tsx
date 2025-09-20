import Link from 'next/link';
import Button from '@/features/landing/shared-components/button/Button';

export default function CTA() {
  return (
    <div className="hidden lg:flex items-center space-x-4">
      <Link
        href="/login"
        className="text-primary hover:text-accent transition-colors duration-200 font-medium text-base px-4 py-2"
      >
        Log In
      </Link>
      <Link href="/signup">
        <Button variant="primary" size="md">
          Sign Up For Free
        </Button>
      </Link>
    </div>
  );
}