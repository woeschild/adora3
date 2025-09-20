'use client';

import React from 'react';
import LogoAndTitle from '@/features/auth/shared-components/LogoAndTitle';
import PasswordField from '@/features/auth/shared-components/password-field/PasswordField';
import Button from '@/features/auth/shared-components/Button';
import useResetPassword from './hooks/useResetPassword';
import Link from 'next/link';

export default function ResetPasswordForm() {
  const { formData, errors, handleSubmit, handleInputChange, loading } = useResetPassword();

  return (
    <div className="w-full max-w-[20rem] mx-auto space-y-6 p-4 sm:p-6 md:p-8">
      <LogoAndTitle title="Create New Password" />
      <div className="text-center text-muted leading-relaxed">
        Enter your new password below. Make sure it's at least 6 characters long and secure.
      </div>
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
          <PasswordField
            id="password"
            label="New Password"
            value={formData.password}
            onChange={handleInputChange('password')}
            placeholder="Enter your new password"
            error={errors.password}
          />
          <PasswordField
            id="confirmPassword"
            label="Confirm New Password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            placeholder="Confirm your new password"
            error={errors.confirmPassword}
          />
          <Button variant="primary" type="submit" className="w-full" loading={loading} loadingText="Resetting Password...">
            Reset Password
          </Button>
        </form>
        <div className="text-center">
          <p className="text-muted">
            Remember your password?{' '}
            <Link href="/login" className="text-accent hover:underline font-medium">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}