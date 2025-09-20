import FAQsSection from '@/features/landing/pricing/FAQs/FAQsSection';
import PricingHeroSection from '@/features/landing/pricing/pricing-hero/PricingHeroSection';
import PricingSection from '@/features/landing/pricing/pricing-section/PricingSection';
import CommonCTA from '@/features/landing/shared-components/common-CTA/CommonCTA';

export default function PricingPage() {
  return (
    <>
      <PricingHeroSection />
      <PricingSection />
      <FAQsSection />
      <CommonCTA/>
    </>
  );
}