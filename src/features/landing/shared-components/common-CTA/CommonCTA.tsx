import Container from '@/features/landing/shared-components/container/Container';
import Button from '@/features/landing/shared-components/button/Button';
import Link from 'next/link';

export default function CommonCTA() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-main">
      <Container>
        <div className="bg-accent rounded-xl px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* CTA Text */}
            <div className="text-center lg:text-left max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Let Adora3 Take the Calls,<br />
                While You Take the Lead.
              </h2>
            </div>
            
            {/* CTA Button */}
            <div className="flex-shrink-0">
              <Link href={'/signup'}>
                <Button 
                variant="primary" 
                size="lg"
                className="bg-accent-dark hover:bg-accent-dark/90 text-white border-none shadow-lg px-8 py-4 text-lg font-semibold whitespace-nowrap"
              >
                Get Started For Free Now!
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}