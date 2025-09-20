import Container from '@/features/landing/shared-components/container/Container';
import HeadingAndSubHeading from './components/HeadingAndSubHeading';
import TutorialVideoComponent from './components/TutorialVideoComponent';

export default function SetupTutorialVideoSection() {
  return (
    <section className="py-16 md:py-24 bg-main">
      <Container>
        {/* Heading */}
        <HeadingAndSubHeading />
        
        {/* Tutorial Video */}
        <TutorialVideoComponent />
      </Container>
    </section>
  );
}