'use client'
import InfoItem from "@/features/dashboard/account-settings/subscription/info-item";
import { useState } from "react";

export default function SubscriptionContent() {

  const [show, setShow] = useState(false);

  const toggle =()=> {
    setShow(!show)
  };

  return (
    <>
      <div className="p-6 space-y-8">
      {/* Subscription Header */}
      <div className="flex items-center space-x-2">
        <h2 className="font-semibold text-gray-800">Subscription</h2>
        <span className="px-2 py-1 bg-orange-800 text-orange-200 hidden sm:flex rounded-full font-medium">12 days left</span>
      </div>

      {/* Subscription Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col space-y-4">
          <InfoItem label="Pro Plan" value="100 out of 300 customer base available." isBoldValue={true} />
        </div>
        <div className="flex flex-col space-y-4">
          <InfoItem label="Days Left" value="Expires on 25th May, 2024" isBoldValue={true} />
        </div>
      </div>
      
      {/* Action and Info Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <p className="text-gray-500">
          Have questions about your plan?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Learn about plans and pricing
          </a>
        </p>
        <button onClick={toggle} className="w-full md:w-auto px-6 py-3 bg-white text-[var(--accent)] font-semibold rounded-lg shadow-md border border-[var(--accent)] hover:bg-gray-100 transition-colors duration-200">
          Choose a plan to purchase
        </button>
      </div>

      {/* Main Action Button */}
      <button onClick={toggle} className="w-fit px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-dark)] transition-colors duration-200">
        Upgrade Plan
      </button>
    </div>
    </>
  );
}
