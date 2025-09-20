'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/features/shared/toast';

interface FormData {
  otp: string;
}

interface Errors {
  otp?: string;
}

export default function useOTP() {
  const { showToast } = useToast();
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ otp: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  const handleInputChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Errors = {};

    if (!formData.otp.trim()) {
      newErrors.otp = 'OTP is required';
    } else if (formData.otp.length !== 6) {
      newErrors.otp = 'OTP must be 6 digits';
    } else if (!/^\d{6}$/.test(formData.otp)) {
      newErrors.otp = 'OTP must contain only numbers';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    
    // Mock API call with loading delay
    setTimeout(() => {
      try {
        // Simulate successful OTP verification
        console.log('Verifying OTP:', formData.otp);
        
        // Check if coming from forgot password flow or signup flow
        // In a real app, you'd track this in context or URL params
        const isFromForgotPassword = window.location.search.includes('forgot=true') || 
                                   document.referrer.includes('/forgot-password');
        
        if (isFromForgotPassword) {
          showToast('Code verified! Create your new password.', 'success');
          router.push('/reset-password');
        } else {
          showToast('Account verified successfully!', 'success');
          router.push('/dashboard');
        }
      } catch (error) {
        showToast('Invalid verification code', 'error');
        console.error('OTP verification error:', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  const handleResendOTP = () => {
    setResendLoading(true);
    
    // Mock resend OTP API call
    setTimeout(() => {
      try {
        console.log('Resending OTP');
        showToast('Verification code sent successfully!', 'success');
      } catch (error) {
        showToast('Failed to resend verification code', 'error');
        console.error('Resend OTP error:', error);
      } finally {
        setResendLoading(false);
      }
    }, 1000);
  };
  
  return { formData, errors, handleInputChange, handleSubmit, handleResendOTP, loading, resendLoading };
}