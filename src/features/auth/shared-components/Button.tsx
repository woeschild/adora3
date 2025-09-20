'use client';

import React, { MouseEventHandler } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  loading?: boolean;
  loadingText?: string;
}

export default function Button({
  children,
  variant = 'primary',
  type = 'button',
  onClick,
  disabled = false,
  className = '',
  loading,
  loadingText,
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed';
  const loadingClasses = 'opacity-75';

  let variantClasses = '';
  if (variant === 'primary') {
    variantClasses = 'btn-primary';
  } else if (variant === 'secondary') {
    variantClasses = 'btn-secondary';
  } else if (variant === 'ghost') {
    variantClasses = 'btn-ghost';
  }

  return (
    <button
      type={type}
      onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses} ${className} ${loading ? loadingClasses : ''}`}
      {...props}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {loadingText || 'Loading...'}
        </>
      ) : (
        children
      )}
    </button>
  );
}