'use client';

import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * A simple reusable component for a select input field.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the input field.
 * @param {string} props.value - The currently selected value.
 * @param {Array<string>} props.options - An array of options for the select dropdown.
 */
interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
}

function SelectField({ label, value, options }: SelectFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          className="w-full rounded-md border border-gray-300 p-3 pr-10 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 appearance-none"
          value={value}
          onChange={() => {}} // Add a real onChange handler in a full application
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <ChevronDown size={20} />
        </div>
      </div>
    </div>
  );
}

/**
 * The main component for the Account Preferences page content.
 */
export default function PreferencesContent() {
  const languageOptions = ["English (US)", "Spanish (ES)", "French (FR)"];
  const timezoneOptions = ["(UTC-08:00) Pacific Time (US & Canada)", "(UTC-05:00) Eastern Time (US & Canada)", "(UTC) Coordinated Universal Time"];

  return (
    <div className="p-6 space-y-8">
      {/* Account Preferences Header */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold text-gray-800">Account preferences</h2>
        <p className="text-gray-500 text-sm">Control settings related to your account.</p>
      </div>
      
      {/* Language & Region Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Language & Region</h3>
        <p className="text-gray-500 text-sm">Update your language and timezone</p>
        <div className="flex flex-col gap-4">
          <SelectField label="Language" value="English (US)" options={languageOptions} />
          <SelectField label="Time zone" value="(UTC-08:00) Pacific Time (US & Canada)" options={timezoneOptions} />
        </div>
      </div>

      {/* Delete Account Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">Delete your account</h3>
        <p className="text-gray-500 text-sm">
          When you delete your account, you lose access to Adora account services, and we permanently delete your personal data. You can cancel the deletion within 14 days.
        </p>
        <button className="w-fit px-6 py-3 bg-white text-red-500 font-semibold rounded-lg shadow-md border border-red-500 hover:bg-red-50 transition-colors duration-200">
          Delete account
        </button>
      </div>
    </div>
  );
}
