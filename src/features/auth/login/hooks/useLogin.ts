'use client';

import { useState } from 'react';
import useRedirect from '@/features/auth/shared-hooks/useRedirect';
import { useToast } from '@/features/shared/toast';

interface FormData {
  email: string;
  password: string;
}

interface Errors {
  email?: string;
  password?: string;
}

export default function useLogin() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});
  const { redirectToDashboard } = useRedirect();

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    // Mock API call with loading delay
    setTimeout(() => {
      // Mock API call with loading delay
      setTimeout(() => {
        try {
          // Simulate successful login
          console.log('Logging in with:', formData);
          // Show toast notification
          showToast('You have successfully logged in!', 'success');
          redirectToDashboard();
        } catch (error) {
          // Show error toast notification
          showToast('Failed to log in', 'error');
          console.error('Login error:', error);
        } finally {
          setLoading(false);
        }
      }, 1500);
    }, 1500);
  };
  
  return { formData, errors, handleInputChange, handleSubmit, loading };
}