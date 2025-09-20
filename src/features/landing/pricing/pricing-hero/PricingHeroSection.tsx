import GridBackground from '@/features/landing/shared-components/grid-background/GridBackground';
import Container from '../../shared-components/container/Container';

export default function PricingHeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <GridBackground />
  
      <div className="container relative z-10">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Choose The Perfect<br />
            Plan For Your Business
          </h1>
          <p className="text-xl text-accent">
            Simple, Transparent Pricing for Smarter Customer Support
          </p>
        </div>
        </Container>
      </div>
    </section>
  );
}