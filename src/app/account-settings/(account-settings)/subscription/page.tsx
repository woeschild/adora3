'use client';

import React from 'react';
import Link from 'next/link';

/**
 * A reusable component for displaying a key-value pair.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The value of the field.
 * @param {boolean} [props.isBoldValue=false] - Optional prop to make the value bold.
 */
interface InfoItemProps {
  label: string;
  value: string;
  isBoldValue?: boolean;
}

function InfoItem({ label, value, isBoldValue = false }: InfoItemProps) {
  return (
    <div className="flex flex-col space-y-1">
      <span className={`text-gray-800 ${isBoldValue ? 'font-semibold' : ''}`}>{label}</span>
      <span className="text-sm font-medium text-gray-500">{value}</span>
    </div>
  );
}

/**
 * The main component for the Subscription page content.
 */
export default function SubscriptionContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Subscription Header */}
      <div className="flex items-center space-x-2">
        <h2 className="text-2xl font-semibold text-gray-800">Subscription</h2>
        <span className="px-2 py-1 bg-orange-800 text-orange-200 text-xs hidden sm:flex rounded-full font-medium">12 days left</span>
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
        <p className="text-sm text-gray-500">
          Have questions about your plan?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Learn about plans and pricing
          </a>
        </p>
        <button className="w-full md:w-auto px-6 py-3 bg-white text-orange-500 font-semibold rounded-lg shadow-md border border-orange-500 hover:bg-gray-100 transition-colors duration-200">
          Choose a plan to purchase
        </button>
      </div>

      {/* Main Action Button */}
      <button className="w-fit px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition-colors duration-200">
        Upgrade Plan
      </button>
    </div>
  );
}
