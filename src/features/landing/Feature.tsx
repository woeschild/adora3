'use client'

import { Zap, DollarSign, Clock, Database } from 'lucide-react'

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Fast & Simple Setup",
      description: "Get your AI voice assistant running in minutes and seamlessly integrate it with your existing CRM for flawless AI-driven phone interactions.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: DollarSign,
      title: "Cost Efficient Automation",
      description: "Cut down expenses by automating routine calls, allowing your team to focus on high-priority task. Also easily expand your AI-powered call platform to manage more inbound and outbound calls without major costs or upfront commitments.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Ensure round-the-clock customer service with AI voice agents that never sleep, making sure you never miss a call.",
      bgColor: "bg-orange-100",
      iconColor: "text-orange-600"
    },
    {
      icon: Database,
      title: "Quick And Easy CRM Integration",
      description: "Equip your AI assistant with the knowledge it needs to handle calls like a seasoned agent by uploading company scripts and information.",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Discover What Makes Adora Special
          </h2>
          <p className="text-lg sm:text-xl text-orange-600 max-w-3xl mx-auto">
            An AI intelligent assistant for exceptional customer experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index}
                className="group hover:shadow-lg transition-shadow duration-300 p-6 rounded-xl"
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 ${feature.bgColor} rounded-full mb-6`}>
                  <IconComponent 
                    size={28} 
                    className={`${feature.iconColor}`}
                  />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection