import Container from '@/features/landing/shared-components/container/Container';
import BackgroundWavePattern from './components/BackgroundWavePattern';
import HeroTextAndSubTexts from './components/HeroTextAndSubTexts';
import HeroCTAButtons from './components/HeroCTAButtons';
import HeroImage from './components/HeroImage';

export default function HeroSection() {
  return (
    <section className="relative bg-main flex items-center py-10 sm:py-24">
      {/* Background Wave Pattern */}
      <BackgroundWavePattern />
      
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Content */}
          <div className="space-y-8">
            <HeroTextAndSubTexts />
            <HeroCTAButtons />
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="lg:order-last">
            <HeroImage />
          </div>
        </div>
      </Container>
    </section>
  );
}