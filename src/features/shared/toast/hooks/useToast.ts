'use client';

import { useContext } from 'react';
import { ToastContext } from '../ToastProvider';
import type { UseToastReturn } from '../types';

export function useToast(): UseToastReturn {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return {
    showToast: (message: string, type: 'success' | 'error') => context.addToast(message, type)
  };
}