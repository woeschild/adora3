'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/features/shared/toast';

interface FormData {
  email: string;
}

interface Errors {
  email?: string;
}

export default function useForgotPassword() {
  const { showToast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: '' });
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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    // Mock API call with loading delay
    setTimeout(() => {
      try {
        // Simulate successful password reset request
        console.log('Sending password reset to:', formData.email);
        showToast('Password reset code sent to your email!', 'success');
        router.push('/otp?forgot=true');
      } catch (error) {
        showToast('Failed to send password reset code', 'error');
        console.error('Forgot password error:', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };
  
  return { formData, errors, handleInputChange, handleSubmit, loading };
}