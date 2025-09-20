import Container from '@/features/landing/shared-components/container/Container';
import HeadingAndSubHeading from './components/HeadingAndSubHeading';
import StepCard from './components/StepCard';
import ExampleImage from './components/ExampleImage';

const steps = [
  {
    stepNumber: '01',
    title: 'Set up your AI agent',
    description: 'Choose a phone number, voice, language, give it a name to create a custom AI agent that reflects your brand.'
  },
  {
    stepNumber: '02',
    title: 'Upload to knowledge base',
    description: 'Add company information and scripts to empower your AI agent with the tools to handle customer inquiries like a pro.'
  },
  {
    stepNumber: '03',
    title: 'Go Live',
    description: 'Make your assigned phone number available to your customers and watch as incoming calls are resolved instantly with speed and efficiency.'
  },
  {
    stepNumber: '04',
    title: 'Scale With Ease',
    description: 'Handle over 1 million concurrent calls with our Kubernetes-based infrastructure designed for scalability and high availability.'
  }
];

export default function HowAdoraWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-main">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Content - Phone Image */}
          <div className="lg:order-first">
            <ExampleImage />
          </div>
          
          {/* Right Content - Steps */}
          <div className="space-y-8">
            <HeadingAndSubHeading />
            
            {/* Steps List */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <StepCard
                  key={index}
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}