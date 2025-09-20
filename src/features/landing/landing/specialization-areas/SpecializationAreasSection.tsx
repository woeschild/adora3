import Container from '@/features/landing/shared-components/container/Container';
import HeadingAndSubHeading from './components/HeadingAndSubHeading';
import SpecializationCard from './components/SpecializationCard';

// Import icon
import doubleSquareIcon from './assets/double-square.png';

const specializations = [
  {
    icon: doubleSquareIcon,
    title: 'Inquiries and FAQs',
    description: 'Adora Responds to product, service, or policy-related questions like warranties, return policies, or how to use a product.'
  },
  {
    icon: doubleSquareIcon,
    title: 'Customer Account Management',
    description: 'Adora Manages customer accounts, including updating customer profile subscriptions, and service upgrades or downgrades.'
  },
  {
    icon: doubleSquareIcon,
    title: 'Appointment Scheduling',
    description: 'Books appointments during calls in real time, ensuring no opportunity is missed.'
  },
  {
    icon: doubleSquareIcon,
    title: 'Technical Support',
    description: 'Assists customers with troubleshooting products or service-related technical issues like resolving software malfunctions or configuration issues.'
  },
  {
    icon: doubleSquareIcon,
    title: 'Returns, Refunds, and Complaints',
    description: 'Processes product returns, handles refund requests, and manages customer dissatisfaction like addressing complaints about defective products or delayed deliveries.'
  },
  {
    icon: doubleSquareIcon,
    title: 'Customer Retention and Loyalty',
    description: 'Handles subscription cancellation calls and offering incentives or loyalty rewards and discounts to retain customers considering cancelling a service'
  },
  {
    icon: doubleSquareIcon,
    title: 'Automated Ticket Handling',
    description: 'Automatically create or update tickets in your CRM, route the case to the appropriate team (collections, service team, billing, or finance), Triggers automatic follow-up emails or texts after call interaction. Sends reminders to agents for unresolved tickets or pending customer inquiries.'
  }
];

export default function SpecializationAreasSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <Container>
        {/* Heading */}
        <HeadingAndSubHeading />
        
        {/* Specializations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {specializations.map((specialization, index) => (
            <SpecializationCard
              key={index}
              icon={specialization.icon}
              title={specialization.title}
              description={specialization.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}