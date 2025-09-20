import HeroSection from '@/features/landing/landing/hero/HeroSection';
import AdoraFeaturesSection from '@/features/landing/landing/adora-features/AdoraFeaturesSection';
import HowAdoraWorksSection from '@/features/landing/landing/how-adora-works/HowAdoraWorksSection';
import SpecializationAreasSection from '@/features/landing/landing/specialization-areas/SpecializationAreasSection';
import CTASection from '@/features/landing/landing/CTA/CTASection';
import SetupTutorialVideoSection from '@/features/landing/landing/setup-tutorial-video/SetupTutorialVideoSection';

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <AdoraFeaturesSection />
      <HowAdoraWorksSection />
      <SpecializationAreasSection />
      <CTASection />
      <SetupTutorialVideoSection />
    </>
  );
}