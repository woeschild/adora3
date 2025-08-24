'use client';

import React from 'react';
import Link from 'next/link';

/**
 * A simple reusable component for a password input field.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.placeholder - The placeholder text for the input field.
 */
interface PasswordFieldProps {
  label: string;
  placeholder: string;
}

function PasswordField({ label, placeholder }: PasswordFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type="password"
        placeholder={placeholder}
        className="w-full rounded-md border border-gray-300 p-3 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50"
      />
    </div>
  );
}

/**
 * The main component for the Security page content.
 */
export default function SecurityContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Change Password Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-800">Change password</h2>
        <p className="text-gray-500 text-sm">
          Forgot or never set up your password?{' '}
          <a href="#" className="text-blue-600 hover:underline">
            Request a new password here
          </a>
        </p>
      </div>

      {/* Password Change Form */}
      <div className="space-y-6">
        <PasswordField
          label="Old password"
          placeholder="Enter old password"
        />
        <PasswordField
          label="New password"
          placeholder="Enter new password"
        />
        <PasswordField
          label="Repeat password"
          placeholder="Enter new password"
        />
        
        <button className="w-fit px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200">
          Change password
        </button>
      </div>
    </div>
  );
}
