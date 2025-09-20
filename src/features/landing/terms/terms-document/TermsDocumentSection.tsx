import Container from '@/features/landing/shared-components/container/Container';
import IntroductionSection from './components/IntroductionSection';
import DefinitionSection from './components/DefinitionSection';
import UseOfServicesSection from './components/UseOfServicesSection';
import SubscriptionBillingSection from './components/SubscriptionBillingSection';
import LegalSection from './components/LegalSection';

export default function TermsDocumentSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-main">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 md:space-y-12">
            <IntroductionSection />
            <DefinitionSection />
            <UseOfServicesSection />
            <SubscriptionBillingSection />
            <LegalSection />
          </div>
        </div>
      </Container>
    </section>
  );
}