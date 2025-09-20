import PasswordField from "@/features/dashboard/account-settings/security/password-field";

/**
 * The main component for the Security page content.
 */
export default function SecurityContent() {
  return (
    <div className="p-6 space-y-8">
      {/* Change Password Section */}
      <div className="space-y-4">
        <h2 className="font-semibold text-gray-800">Change password</h2>
        <p className="text-gray-500">
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
