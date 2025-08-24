'use client';

import React from 'react';
import { Info } from 'lucide-react'; 

/**
 * A reusable alert component for warnings or information.
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.icon - The icon for the alert.
 * @param {string} props.title - The title of the alert.
 * @param {string} props.message - The main message of the alert.
 */
interface AlertProps {
  icon: React.ReactNode;
  title: string;
  message: string;
}

function Alert({ icon, title, message }: AlertProps) {
  return (
    <div className="flex p-4 rounded-lg bg-orange-100 border border-orange-200">
      <div className="flex-shrink-0 text-orange-500">
        {icon}
      </div>
      <div className="ml-3">
        <h4 className="text-sm font-semibold text-orange-800">{title}</h4>
        <p className="mt-1 text-sm text-orange-700">{message}</p>
      </div>
    </div>
  );
}

/**
 * The main component for the Email page content.
 */
export default function EmailContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Current Email Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Email</h2>
        <div className="flex flex-col space-y-2">
          <span className="text-lg font-medium text-gray-800">Current email</span>
          <span className="text-gray-500">Your current email address is <span className="font-semibold text-gray-700">alex@gmail.com</span></span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          {/* Using a placeholder since Google icon isn't in Lucide */}
          <div className="w-5 h-5">
            {/* google icon */}
            </div> 
          <span>Log In with Google enabled</span>
        </div>
        <Alert
          icon={<Info size={20} />}
          title="Connected account"
          message="Your account is connected to a Google account. Changing the email address here will disconnect your account from the Google account."
        />
      </div>

      {/* Change Email Section */}
      <div className="space-y-4 flex flex-col">
        <span className="text-lg font-medium text-gray-800">New email address</span>
        <input
          type="email"
          placeholder="Enter new email address"
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
        />
        <button
          className="w-fit px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
        >
          Save changes
        </button>
      </div>

      {/* Email Notifications Section */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium text-gray-800">Email notifications</h3>
        <p className="text-sm text-gray-500">
          To manage marketing emails, visit the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            email preferences center.
          </a>
        </p>
        <p className="text-sm text-gray-500">
          To manage product emails, visit{' '}
          <a href="#" className="text-blue-600 hover:underline">
            product settings.
          </a>
        </p>
      </div>
    </div>
  );
}
