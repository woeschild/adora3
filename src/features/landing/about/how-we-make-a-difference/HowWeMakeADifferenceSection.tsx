import React from 'react';
import Image from 'next/image';
import image from './assets/customer-service-agent.jpg'

interface SectionHeaderProps {
  title: string;
  highlightedWord: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, highlightedWord, description }) => (
  <div className="mb-8 lg:mb-0 w-full flex justify-between max-md:flex-wrap">
    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight">
      {title} <span className="text-accent">{highlightedWord}</span>
    </h2>
    <p className="text-gray-700 text-lg leading-relaxed max-w-md">
      {description}
    </p>
  </div>
);


const HowWeMakeDifferenceSection: React.FC = () => (
  <section className="bg-white py-16 lg:py-24">
    <div className="container mx-auto px-4">
      <div>
        
        {/* Left Content */}
        <div className="w-full mb-4">
          <SectionHeader 
            title="How We Make a"
            highlightedWord="Difference"
            description="At Adora, we specialize in leveraging cutting-edge AI technology to transform customer service."
          />
          
        </div>
        
        {/* Right Image */}
        <div>
          <div className="relative flex justify-between max-md:flex-wrap-reverse gap-8">
             <p className='text-lg flex-1'>
              We provide businesses with innovative solutions that combine the empathy of human 
              agents with the efficiency and scalability of AI. From setting up AI-powered call 
              centers to delivering personalized customer interactions, we're dedicated to 
              redefining the customer service experience for businesses worldwide.
            </p>
            <div className="w-1/2 max-md:w-full">
              <Image 
                src={image}
                alt="Customer service representative wearing headset, speaking animatedly while providing support"
                className="object-cover h-auto w-full rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
);

export default HowWeMakeDifferenceSection;