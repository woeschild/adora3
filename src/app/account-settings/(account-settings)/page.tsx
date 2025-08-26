'use client';

import React from 'react';
import { ChevronDown, Pencil } from 'lucide-react';

/**
 * A reusable component for displaying a key-value pair.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the field.
 * @param {string} props.value - The value of the field.
 */
interface InfoItemProps {
  label: string;
  value: string;
}

function InfoItem({ label, value }: InfoItemProps) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="font-medium text-gray-500">{label}</span>
      <span className="text-gray-800">{value}</span>
    </div>
  );
}

/**
 * A single input field with a label and optional dropdown/icon.
 * @param {object} props - The component props.
 * @param {string} props.label - The label for the input.
 * @param {string} props.type - The type of input ('text' or 'select').
 * @param {React.ReactNode} [props.icon] - Optional icon to display.
 */
interface FormFieldProps {
  label: string;
  type: 'text' | 'select';
  icon?: React.ReactNode;
}

function FormField({ label, type, icon }: FormFieldProps) {
  return (
    <div className="flex flex-col space-y-2">
      <label className="font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type="text"
          className="w-full rounded-md border border-gray-300 p-2 focus:border-[var(--accent)] focus:ring focus:ring-[var(--accent)] focus:ring-opacity-50"
          placeholder={label}
        />
        {type === 'select' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
            <ChevronDown size={20} />
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * The main component for the Account Info page content.
 */
export default function AccountInfoContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Account Info Section */}
      <div className="space-y-6">
        <h2 className="text-sm font-semibold text-gray-800">Account info</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Info */}
          <div className="flex flex-col space-y-2">
            <div className="flex items-center">
              <span className="font-semibold text-gray-800">Alex Meian</span>
              <span className="ml-2 px-2 py-1 bg-orange-800 text-orange-200 rounded-full font-medium">12 days left</span>
            </div>
            <div className="space-y-4 pt-4">
              <InfoItem label="Subscription" value="Pro plan" />
              <InfoItem label="100-300 customer base" value="" /> {/* Value is empty as per image */}
            </div>
          </div>
          
          {/* Dates Info */}
          <div className="flex flex-col space-y-4 pt-4">
            <InfoItem label="Joined account on" value="January, 10 2023" />
            <InfoItem label="Account registration date" value="January, 10 2023" />
          </div>
        </div>
        
        {/* Action Button */}
        <button className="w-fit md:w-auto px-6 py-3 bg-[var(--accent)] text-white font-semibold rounded-lg shadow-md hover:bg-[var(--accent-dark)] transition-colors duration-200">
          Manage Adora
        </button>
      </div>
      
      {/* Form Section */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-6">
        <h3 className="font-semibold text-gray-800">Fill in the AI Agent Information</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField label="Business Province" type="select" />
          <FormField label="Business Phone Number" type="text" />
          <FormField label="AI Voice" type="select" />
          <FormField label="AI Phone Number" type="text" />
          <FormField label="AI Name" type="text" />
        </div>
      </div>
    </div>
  );
}
