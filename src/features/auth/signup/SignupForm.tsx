'use client';

import React from 'react';
import LogoAndTitle from '@/features/auth/shared-components/LogoAndTitle';
import TextField from '@/features/auth/shared-components/TextField';
import PasswordField from '@/features/auth/shared-components/password-field/PasswordField';
import Button from '@/features/auth/shared-components/Button';
import GoogleButton from '@/features/auth/shared-components/GoogleButton';
import useSignup from './hooks/useSignup';
import useGoogleAuth from '../shared-hooks/useGoogleAuth';
import Link from 'next/link';

export default function SignupForm() {
  const { formData, errors, handleSubmit, handleInputChange, loading } = useSignup();
  const { signInWithGoogle } = useGoogleAuth();

  return (
    <div className="w-full max-w-[20rem] mx-auto space-y-6 p-4 sm:p-6 md:p-8">
      <LogoAndTitle title="Create An Account" />
      <div className="flex flex-col gap-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
          <TextField
            id="fullName"
            label="Full Name"
            value={formData.fullName}
            onChange={handleInputChange('fullName')}
            placeholder="Enter your full name"
            type="text"
            error={errors.fullName}
          />
          <TextField
            id="email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange('email')}
            placeholder="Enter your email address"
            type="text"
            error={errors.email}
          />
          <PasswordField
            id="password"
            label="Password"
            value={formData.password}
            onChange={handleInputChange('password')}
            placeholder="Enter your password"
            error={errors.password}
          />
          <PasswordField
            id="confirmPassword"
            label="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleInputChange('confirmPassword')}
            placeholder="Confirm your password"
            error={errors.confirmPassword}
          />
          <div className="text-muted leading-relaxed mt-2">
            By signing up, You automatically agree with the{' '}
            <Link href="/terms" className="text-accent hover:underline">
              terms and condition
            </Link>{' '}
            of Adora3.
          </div>
          <Button variant="primary" type="submit" className="w-full" loading={loading} loadingText="Creating Account...">
            Create Account
          </Button>
        </form>
        <p className="text-center text-muted">
          Already Have An Account?{' '}
          <Link href="/login" className="text-accent hover:underline font-medium">
            Sign In
          </Link>
        </p>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-light" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-main px-2 text-muted">OR</span>
          </div>
        </div>
        <GoogleButton onClick={signInWithGoogle} text="Sign Up with Google" />
      </div>
    </div>
  );
}