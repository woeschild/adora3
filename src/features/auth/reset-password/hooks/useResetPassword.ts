'use client';

import { useState } from 'react';
import useRedirect from '@/features/auth/shared-hooks/useRedirect';
import { useToast } from '@/features/shared/toast';

interface FormData {
  password: string;
  confirmPassword: string;
}

interface Errors {
  password?: string;
  confirmPassword?: string;
}

export default function useResetPassword() {
  const { showToast } = useToast();
  const { redirectToDashboard } = useRedirect();
  const [formData, setFormData] = useState<FormData>({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    // Mock API call with loading delay
    setTimeout(() => {
      try {
        // Simulate successful password reset
        console.log('Resetting password');
        showToast('Password reset successfully!', 'success');
        redirectToDashboard();
      } catch (error) {
        showToast('Failed to reset password', 'error');
        console.error('Reset password error:', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };
  
  return { formData, errors, handleInputChange, handleSubmit, loading };
}