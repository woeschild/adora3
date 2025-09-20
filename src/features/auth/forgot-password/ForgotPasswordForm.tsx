'use client';

import React from 'react';
import LogoAndTitle from '@/features/auth/shared-components/LogoAndTitle';
import TextField from '@/features/auth/shared-components/TextField';
import Button from '@/features/auth/shared-components/Button';
import useForgotPassword from './hooks/useForgotPassword';
import Link from 'next/link';

export default function ForgotPasswordForm() {
  const { formData, errors, handleSubmit, handleInputChange, loading } = useForgotPassword();

  return (
    <div className="w-full max-w-[20rem] mx-auto space-y-6 p-4 sm:p-6 md:p-8">
      <LogoAndTitle title="Reset Your Password" />
      <div className="text-center text-muted leading-relaxed">
        Enter your email address and we'll send you a verification code to reset your password.
      </div>
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
          <TextField
            id="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="Enter your email address"
            type="text"
            error={errors.email}
          />
          <Button variant="primary" type="submit" className="w-full" loading={loading} loadingText="Sending Code...">
            Send Reset Code
          </Button>
        </form>
        <div className="text-center space-y-2">
          <p className="text-muted">
            Remember your password?{' '}
            <Link href="/login" className="text-accent hover:underline font-medium">
              Sign In
            </Link>
          </p>
          <p className="text-muted">
            Don't have an account?{' '}
            <Link href="/signup" className="text-accent hover:underline font-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}