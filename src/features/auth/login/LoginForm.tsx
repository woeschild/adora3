'use client';

import React from 'react';
import LogoAndTitle from '@/features/auth/shared-components/LogoAndTitle';
import TextField from '@/features/auth/shared-components/TextField';
import PasswordField from '@/features/auth/shared-components/password-field/PasswordField';
import Button from '@/features/auth/shared-components/Button';
import GoogleButton from '@/features/auth/shared-components/GoogleButton';
import useLogin from './hooks/useLogin';
import useGoogleAuth from '../shared-hooks/useGoogleAuth';
import Link from 'next/link';

export default function LoginForm() {
  const { formData, errors, handleSubmit, handleInputChange, loading } = useLogin();
  const { signInWithGoogle } = useGoogleAuth();


  return (
    <div className="w-full max-w-[20rem] mx-auto space-y-6 p-4 sm:p-6 md:p-8">
      <LogoAndTitle title="Log in to your account" />
      <div className="flex flex-col gap-2">
      <form onSubmit={handleSubmit} className="flex flex-col gap-2" noValidate>
        <TextField
          id="email"
          label="Email Address"
          value={formData.email}
          onChange={handleInputChange('email')}
          placeholder="Email address"
          type="text"
          error={errors.email}
        />
        <PasswordField
          id="password"
          label="Password"
          value={formData.password}
          onChange={handleInputChange('password')}
          placeholder="Password"
          error={errors.password}
        />
        <div className="flex justify-between items-center">
          <Link href="/forgot-password" className="text-accent hover:underline text-sm">
            Forgot password?
          </Link>
        </div>
        <Button variant="primary" type="submit" className="w-full" loading={loading} loadingText="Logging in...">
          Log in
        </Button>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-gray-light" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-main px-2 text-muted">or</span>
        </div>
      </div>
      <p className="text-center text-muted">
        Don't have an account?{' '}
        <Link href="/signup" className="text-accent hover:underline font-medium">
          Sign up
        </Link>
      </p>
      <GoogleButton onClick={signInWithGoogle} />
      </div>
    </div>
  );
}