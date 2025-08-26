'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import avatar from '../../../public/profile.png'

/**
 * A reusable component for a writable input field.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the input.
 * @param {string} props.initialValue - The initial value of the input field.
 */
interface WritableInputFieldProps {
  label: string;
  initialValue: string;
}

function WritableInputField({ label, initialValue }: WritableInputFieldProps) {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium text-gray-700">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-md bg-gray-100 p-3 text-gray-800 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50"
      />
    </div>
  );
}

/**
 * A reusable component for a writable select field.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the select field.
 * @param {string} props.initialValue - The initial selected value.
 * @param {string[]} props.options - The array of available options.
 */
interface WritableSelectFieldProps {
  label: string;
  initialValue: string;
  options: string[];
}

function WritableSelectField({ label, initialValue, options }: WritableSelectFieldProps) {
  const [value, setValue] = useState(initialValue);
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium text-gray-700">{label}</label>
      <div className="relative">
        <select
          className="w-full rounded-md bg-gray-100 p-3 pr-10 text-gray-800 appearance-none focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
          <ChevronDown size={16} />
        </div>
      </div>
    </div>
  );
}

/**
 * A component for the business number input with a country code dropdown.
 */
function WritableBusinessNumberField() {
  const [countryCode, setCountryCode] = useState('+1');
  const [number, setNumber] = useState('23456789');

  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium text-gray-700">Business Number</label>
      <div className="flex gap-2 overflow-hidden">
        <select
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
          className="p-3 text-gray-800 rounded-md appearance-none bg-gray-100"
        >
          <option>+1</option>
          <option>+44</option>
          <option>+91</option>
        </select>
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="flex-1 p-3 rounded-md bg-gray-100 text-gray-800 focus:outline-none"
        />
      </div>
    </div>
  );
}

/**
 * The main component for the Profile page content.
 */
export default function ProfileContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Profile Header */}
      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-200">
           <Image
                    src={avatar}
                    alt={`avatar`}
                    className="rounded-full object-cover"
                  />
        </div>
        <div>
          <h2 className="font-semibold text-gray-800">Alex Meian</h2>
          <p className="text-gray-500">alex@gmail.com</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
        <WritableInputField label="First name" initialValue="Alex" />
        <WritableInputField label="Last name" initialValue="Meian" />
        <WritableInputField label="Business name" initialValue="Alex Restaurant" />
        <WritableSelectField label="Country of residence" initialValue="Canada" options={['Nigeria', 'Canada', 'UK']} />
        <WritableInputField label="Region" initialValue="Canada" />
        <WritableBusinessNumberField />
        <WritableInputField label="Agent Name" initialValue="AI Agent" />
        <WritableSelectField label="Agent Gender" initialValue="Female" options={['Female', 'Male', 'Other']} />
      </div>

      {/* Save Button */}
      <button className="w-fit md:w-auto px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-dark)] transition-colors duration-200">
        Save changes
      </button>
    </div>
  );
}
