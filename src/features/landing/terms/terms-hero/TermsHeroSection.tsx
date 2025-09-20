import GridBackground from '@/features/landing/shared-components/grid-background/GridBackground';
import Container from '../../shared-components/container/Container';

export default function TermsHeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <GridBackground />
  
      <div className="container relative z-10">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-accent">
            These Terms of Use govern your access and use of our Services. By using Adora, you agree to comply with these Terms.
          </p>
        </div>
        </Container>
      </div>
    </section>
  );
}