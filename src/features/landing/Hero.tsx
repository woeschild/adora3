'use client'

import Image from 'next/image'
import hero from '../../../public/hero.jpg'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-orange-50 to-white overflow-hidden">
      {/* Wave Background */}
      <div className="absolute inset-0 opacity-60">
        <svg
          viewBox="0 0 1200 800"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#fdba74" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#fb923c" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 C200,300 400,500 600,400 C800,300 1000,500 1200,400 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
          />
          <path
            d="M0,500 C300,400 600,600 900,500 C1000,450 1100,550 1200,500 L1200,800 L0,800 Z"
            fill="url(#waveGradient)"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 text-sm font-medium">
              With Adora: Your Customer Service AI Agent
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolutionize Your{' '}
                <span className="text-gray-800">Customer Experience</span>
              </h1>
              <p className="text-lg sm:text-xl text-orange-700 max-w-2xl">
                Enhance your service with AI-powered, real-time, human-like conversations
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={'signup'} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started For Free
              </Link>
              <Link href={'login'} className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200">
                Try Voice Assistant
              </Link>
            </div>
          </div>

          {/* Right Content - Chat Interface */}
          <div className="relative">
            {/* Main Chat Window */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Person Image */}
              <div className="relative h-80 sm:h-96">
                <Image
                  src={hero}
                  alt="Customer service representative"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection