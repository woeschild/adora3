import Container from '@/features/landing/shared-components/container/Container';
import HeadingAndSubHeading from './components/HeadingAndSubHeading';
import FeatureCard from './components/FeatureCard';

// Import feature icons
import fastAndSimpleIcon from './assets/fast-and-simple.png';
import costEfficientIcon from './assets/cost-efficient-automation.png';
import available247Icon from './assets/available247.png';
import quickCrmIcon from './assets/quick-and-easy-crm.png';

const features = [
  {
    icon: fastAndSimpleIcon,
    title: 'Fast & Simple Setup',
    description: 'Get your AI voice assistant running in minutes and seamlessly integrate it with your existing CRM for flawless AI-driven phone interactions.'
  },
  {
    icon: costEfficientIcon,
    title: 'Cost Efficient Automation',
    description: 'Cut down expenses by automating routine calls, allowing your team to focus on high-priority task. Also easily expand your AI-powered call platform to manage more inbound and outbound calls without major costs or upfront commitments.'
  },
  {
    icon: available247Icon,
    title: '24/7 Availability',
    description: 'Ensure round-the-clock customer service with AI voice agents that never sleep, making sure you never miss a call.'
  },
  {
    icon: quickCrmIcon,
    title: 'Quick And Easy CRM Integration',
    description: 'Equip your AI assistant with the knowledge it needs to handle calls like a seasoned agent by uploading company scripts and information.'
  }
];

export default function AdoraFeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <Container>
        {/* Heading */}
        <HeadingAndSubHeading />
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}