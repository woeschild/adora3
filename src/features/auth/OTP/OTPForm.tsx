'use client';

import React from 'react';
import LogoAndTitle from '@/features/auth/shared-components/LogoAndTitle';
import Button from '@/features/auth/shared-components/Button';
import useOTP from './hooks/useOTP';
import Link from 'next/link';

export default function OTPForm() {
  const { formData, errors, handleSubmit, handleInputChange, handleResendOTP, loading, resendLoading } = useOTP();

  return (
    <div className="w-full max-w-[20rem] mx-auto space-y-6 p-4 sm:p-6 md:p-8">
      <LogoAndTitle title="Verify Your Account" />
      <div className="text-center text-muted leading-relaxed">
        We've sent a 6-digit verification code to your email address. Please enter it below to verify your account.
      </div>
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
          <div className="space-y-2">
            <label htmlFor="otp" className="text-primary block font-medium">
              <small>Verification Code</small>
            </label>
            <input
              id="otp"
              type="text"
              value={formData.otp}
              onChange={handleInputChange('otp')}
              placeholder="000000"
              maxLength={6}
              className={`w-full px-3 py-3 border border-subtle rounded-md text-center text-2xl font-mono tracking-widest placeholder:text-muted focus:outline-none transition-colors ${
                errors.otp
                  ? 'focus:border-red-500'
                  : 'focus:border-accent'
              }`}
            />
            {errors.otp && (
              <div className="flex items-start gap-2 mt-2 p-2 bg-red-500/5 rounded border-l-2 border-red-500/30">
                <p className="text-sm text-red-600 leading-relaxed">{errors.otp}</p>
              </div>
            )}
          </div>
          <Button variant="primary" type="submit" className="w-full" loading={loading} loadingText="Verifying...">
            Verify Account
          </Button>
        </form>
        <div className="text-center space-y-2">
          <p className="text-muted">
            Didn't receive the code?{' '}
            <button
              type="button"
              onClick={handleResendOTP}
              disabled={resendLoading}
              className="text-accent hover:underline font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resendLoading ? 'Sending...' : 'Resend Code'}
            </button>
          </p>
          <p className="text-muted">
            Want to use a different email?{' '}
            <Link href="/signup" className="text-accent hover:underline font-medium">
              Go Back
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}