'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import adoraLogo from '../../../../public/adora3-logo.png'
import google from '../../../../public/google.webp'
import Link from 'next/link';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  showPasswordToggle?: boolean;
  isPasswordVisible?: boolean;
  onTogglePassword?: () => void;
}

const InputField: React.FC<InputFieldProps> = ({ 
  label, 
  type = "text", 
  placeholder = "",
  showPasswordToggle = false,
  isPasswordVisible = false,
  onTogglePassword
}) => (
  <div className="mb-6">
    <label className="block text-gray-600 mb-2 text-sm">{label}</label>
    <div className="relative">
      <input 
        type={showPasswordToggle ? (isPasswordVisible ? "text" : "password") : type}
        className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        placeholder={placeholder}
      />
      {showPasswordToggle && (
        <button
          type="button"
          onClick={onTogglePassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        >
          {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  onClick,
  className = ""
}) => {
  const baseClasses = "w-full py-4 rounded-lg font-medium transition-colors";
  const variants = {
    primary: "bg-orange-600 hover:bg-orange-700 text-white",
    secondary: "border border-gray-300 hover:bg-gray-50 text-gray-700 flex items-center justify-center gap-2"
  };
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const Logo: React.FC = () => (
  <div className="flex items-center gap-2 mb-12">
    <Image src={adoraLogo} alt="Adora3 Logo" width={100} height={100} />
  </div>
);

const LeftPanel: React.FC = () => (
  <div className="bg-gray-900 p-8 lg:p-12 flex flex-col justify-center">
    <Logo />
    <h1 className="text-white text-4xl lg:text-5xl font-bold mb-4 leading-tight">
      Sign up your business on Adora
    </h1>
    <p className="text-orange-400 text-lg">
      Revolutionize Your Customer's Experience
    </p>
  </div>
);

const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="bg-white p-8 lg:p-12 flex flex-col justify-center">
      <div className="max-w-md mx-auto w-full">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Create An Account</h2>
        
        <form className="space-y-6">
          <InputField label="Full Name" />
          <InputField label="Email Address" type="email" />
          <InputField 
            label="Password" 
            showPasswordToggle={true}
            isPasswordVisible={showPassword}
            onTogglePassword={() => setShowPassword(!showPassword)}
          />
          <InputField 
            label="Confirm Password" 
            showPasswordToggle={true}
            isPasswordVisible={showConfirmPassword}
            onTogglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
          />
          
          <div className="text-sm text-gray-600 mb-6">
            By signing up, You automatically agree with the{' '}
            <span className="text-orange-500 hover:underline cursor-pointer">
              <Link href={'/terms'}>
                terms and condition
              </Link>
            </span>{' '}
            of Adora3.
          </div>
          
          <Link href={'/dashboard'}>
            <Button>Create Account</Button>
          </Link>

          <div className="text-center text-gray-600">
            Already Have An Account?{' '}
            <span className="text-orange-500 hover:underline cursor-pointer font-medium">
              <Link href={'login'}>
                Sign In
              </Link>
            </span>
          </div>
          
          <div className="flex items-center my-6">
            <hr className="flex-1 border-gray-300" />
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <hr className="flex-1 border-gray-300" />
          </div>
          
          <Button variant="secondary">
            <Image src={google} alt="Google" width={20} height={20} />
            Sign Up with Google
          </Button>
        </form>
      </div>
    </div>
  );
};

const SignUpPage: React.FC = () => (
  <div className="min-h-screen">
    <div className="grid lg:grid-cols-2 min-h-screen">
      <LeftPanel />
      <SignUpForm />
    </div>
  </div>
);

export default SignUpPage;