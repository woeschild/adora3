'use client';

import { useState } from 'react';
import { useToast } from '@/features/shared/toast';

export default function useGoogleAuth() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = () => {
    setLoading(true);
    
    // Mock Google sign-in process
    setTimeout(() => {
      try {
        // Simulate successful Google sign-in
        console.log('Successfully signed in with Google');
        // Show toast notification
        showToast('You have successfully signed in with Google!', 'success');
      } catch (error) {
        // Show error toast notification
        showToast('Failed to sign in with Google', 'error');
        console.error('Google sign-in error:', error);
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return { signInWithGoogle, loading };
}