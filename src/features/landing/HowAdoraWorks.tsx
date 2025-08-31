'use client'

import Image from 'next/image'
import phone from '../../../public/iPhone 14 Pro.png'

const HowAdoraWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Set up your AI agent",
      description: "Choose a phone number, voice, language, give it a name and create a custom AI agent that reflects your brand."
    },
    {
      number: "02",
      title: "Upload to knowledge base",
      description: "Add company information and scripts to empower your AI agent with the tools to handle customer inquiries like a pro."
    },
    {
      number: "03",
      title: "Go Live",
      description: "Make your assigned phone number available to your customers and watch as incoming calls are resolved instantly with speed and efficiency."
    },
    {
      number: "04",
      title: "Scale With Ease",
      description: "Handle over 1 million concurrent calls with our Kubernetes-based infrastructure designed for scalability and high availability."
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mobile Phone Mockup */}
          <Image
          alt='Mobile Phone Mockup'
          src={phone}
          />

          {/* Steps Content */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
                How Adora Works
              </h2>
              <p className="text-lg text-orange-600">
                An AI intelligent assistant for exceptional customer experiences.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl font-bold text-orange-600">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowAdoraWorks