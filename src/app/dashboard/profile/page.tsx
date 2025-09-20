'use client';

import Image from 'next/image';
import avatar from '../../../../public/profile.png'
import WritableInputField from '@/features/dashboard/profile/writable-input-field';
import WritableBusinessNumberField from '@/features/dashboard/profile/writable-business-number-field';
import WritableSelectField from '@/features/dashboard/profile/writable-select-field';
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