import Container from '@/features/landing/shared-components/container/Container';
import PriceCard from './components/PriceCard';

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-main">
      <Container>
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-full p-1">
            <button className="px-6 py-2 bg-accent text-white rounded-full font-medium transition-all">
              MONTHLY
            </button>
            <button className="px-6 py-2 text-gray-600 rounded-full font-medium transition-all hover:text-gray-900">
              YEARLY
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PriceCard
            title="Basic Plan"
            price="$99"
            period="/month"
            description="For small businesses taking their first steps towards AI-powered customer support."
            features={[
              "1 AI Voice agent",
              "Handle up to 125 calls/month",
              "Access to 5 languages and accents.",
              "Basic knowledge base setup.",
              "Get dedicated phone number for your customer service."
            ]}
            buttonText="Choose plan"
            isPopular={false}
          />
          
          <PriceCard
            title="Standard Plan"
            price="$199"
            period="/month"
            description="Ideal for business looking for more flexibility & functionality."
            features={[
              "2 AI Voice agent",
              "Handle up to 750 calls/month",
              "Access to 20 languages and accents.",
              "Customizable Knowledge base",
              "Integration with up to 5 platform",
              "Real-time call analytics.",
              "24/7 customer support.",
              "CRM integration (limited to 2 platform).",
              "Get dedicated phone number for customer service."
            ]}
            buttonText="Choose plan"
            isPopular={false}
          />
          
          <PriceCard
            title="Standard Plan"
            price="$399"
            period="/month"
            description="Ideal for business looking for more flexibility & functionality."
            features={[
              "Unlimited AI agents",
              "Handle up to 10,000 calls/month concurrent calls.",
              "Access to 300+ languages and accents.",
              "Integration with 3,000+ platforms.",
              "Dedicated Account manager",
              "Advance Function calling (e.g. bookings, escalations, transfers).",
              "SLA-backed 24/7 premium support.",
              "Get dedicated phone number for customer service."
            ]}
            buttonText="Choose plan"
            isPopular={true}
            highlightColor="bg-accent"
          />
          
          <PriceCard
            title="Custom"
            price="Custom"
            period="/month"
            description=""
            features={[
              "Unlimited AI agents",
              "Handle up to 10,000 calls/month (Scalable to M+ concurrent calls.",
              "Access to 300+ languages and accents.",
              "Integration with 3,000+ platforms.",
              "Dedicated Account manager",
              "Advance Function calling (e.g. bookings, escalations, transfers).",
              "SLA-backed 24/7 premium support.",
              "Get dedicated phone number for customer service."
            ]}
            buttonText="Choose plan"
            isPopular={false}
            showTalkToAdora={true}
          />
        </div>
      </Container>
    </section>
  );
}