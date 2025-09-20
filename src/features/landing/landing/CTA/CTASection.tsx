import Container from '@/features/landing/shared-components/container/Container';
import CTATextAndSubTexts from './components/CTATextAndSubTexts';
import CTAImage from './components/CTAImage';

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text and CTA */}
          <div>
            <CTATextAndSubTexts />
          </div>
          
          {/* Right Content - Image */}
          <div className="lg:order-last">
            <CTAImage />
          </div>
        </div>
      </Container>
    </section>
  );
}