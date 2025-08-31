'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'
import agent1 from '../../../public/agent1.jpg'
import agent2 from '../../../public/agent2.jpg'
import agent3 from '../../../public/agent3.jpg' 
import Link from 'next/link'

const CTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Let Adora3 Take the Calls, While You Take the{' '}
                <span className="text-orange-500">Lead</span>.
              </h2>
              <p className="text-lg sm:text-xl text-orange-600 leading-relaxed">
                Enhance your service with AI-powered, real-time, human-like conversations.
              </p>
            </div>

            <div>
              <Link href={'/signup'} className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                Get Started For Free
              </Link>
            </div>
          </div>

          {/* Right Visual - Phone Icon with Floating Elements */}
          <div className="relative flex justify-center items-center min-h-[500px]">
            {/* Concentric Circles */}
            <div className="absolute inset-0 flex justify-center items-center">
              {/* Outer Circle */}
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] border-2 border-orange-200 rounded-full opacity-30"></div>
              
              {/* Middle Circle */}
              <div className="absolute w-64 h-64 sm:w-80 sm:h-80 lg:w-[320px] lg:h-[320px] border-2 border-orange-300 rounded-full opacity-40"></div>
              
              {/* Inner Circle */}
              <div className="absolute w-48 h-48 sm:w-60 sm:h-60 lg:w-[240px] lg:h-[240px] border-2 border-orange-400 rounded-full opacity-50"></div>
            </div>

            {/* Central Phone Icon */}
            <div className="relative z-10 w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 bg-orange-500 rounded-full flex items-center justify-center shadow-2xl">
              <Phone size={64} className="text-white" />
            </div>

            {/* Floating Profile Images */}
            {/* Top Profile */}
              <Image
                src={agent1}
                alt="Customer service agent"
                className="object-cover absolute top-8 right-1/4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white"
              />

            {/* Right Profile */}
              <Image
                src={agent2}
                alt="Customer service agent"
                className="object-cover absolute right-8 top-1/3 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white"
              />

            {/* Bottom Profile */}
              <Image
                src={agent3}
                alt="Customer service agent"
                className="object-cover absolute bottom-16 left-1/4 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg border-4 border-white"
              />

            {/* Help Message */}
            <div className="absolute bottom-8 right-12 bg-white rounded-2xl px-6 py-3 shadow-xl border border-gray-100 animate-bounce">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-800 font-medium text-sm sm:text-base">
                  We're Here to Help
                </span>
              </div>
              {/* Speech bubble tail */}
              <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
            </div>

            {/* Floating Dots */}
            <div className="absolute top-20 left-8 w-3 h-3 bg-orange-300 rounded-full opacity-60 animate-ping"></div>
            <div className="absolute bottom-32 right-20 w-2 h-2 bg-orange-400 rounded-full opacity-70 animate-ping delay-700"></div>
            <div className="absolute top-32 right-32 w-4 h-4 bg-orange-200 rounded-full opacity-50 animate-ping delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection