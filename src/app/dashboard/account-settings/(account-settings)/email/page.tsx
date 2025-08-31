import EmailAlert from '@/features/account-settings/email/email-alert';
import { Info } from 'lucide-react'; 
import Image from 'next/image';
import googleLogo from '../../../../../../public/google.webp'

/**
 * The main component for the Email page content.
 */
export default function EmailContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Current Email Section */}
      <div className="space-y-4">
        <h2 className="font-semibold text-gray-800">Email</h2>
        <div className="flex flex-col space-y-2">
          <span className="font-medium text-gray-800">Current email</span>
          <span className="text-gray-500">Your current email address is <span className="font-semibold text-gray-700">alex@gmail.com</span></span>
        </div>
        <div className="flex items-center space-x-2 text-gray-600">
          {/* Using a placeholder since Google icon isn't in Lucide */}
          <div className="w-5 h-5">
            <Image alt='google' src={googleLogo} />
            </div> 
          <span>Log In with Google enabled</span>
        </div>
        <EmailAlert
          icon={<Info size={16} />}
          title="Connected account"
          message="Your account is connected to a Google account. Changing the email address here will disconnect your account from the Google account."
        />
      </div>

      {/* Change Email Section */}
      <div className="space-y-4 flex flex-col">
        <span className="font-semibold text-gray-800">New email address</span>
        <input
          type="email"
          placeholder="Enter new email address"
          className="w-full md:w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:border-transparent"
        />
        <button
          className="w-fit px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-200"
        >
          Save changes
        </button>
      </div>

      {/* Email Notifications Section */}
      <div className="space-y-2">
        <h3 className="font-semibold text-gray-800">Email notifications</h3>
        <p className=" text-gray-500">
          To manage marketing emails, visit the{' '}
          <a href="#" className="text-blue-600 hover:underline">
            email preferences center.
          </a>
        </p>
        <p className=" text-gray-500">
          To manage product emails, visit{' '}
          <a href="#" className="text-blue-600 hover:underline">
            product settings.
          </a>
        </p>
      </div>
    </div>
  );
}
