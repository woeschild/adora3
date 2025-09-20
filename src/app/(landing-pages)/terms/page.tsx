import TermsHeroSection from '@/features/landing/terms/terms-hero/TermsHeroSection';
import TermsDocumentSection from '@/features/landing/terms/terms-document/TermsDocumentSection';
import CommonCTA from '@/features/landing/shared-components/common-CTA/CommonCTA';

export default function TermsPage() {
  return (
    <>
      <TermsHeroSection />
      <TermsDocumentSection />
      <CommonCTA />
    </>
  );
}