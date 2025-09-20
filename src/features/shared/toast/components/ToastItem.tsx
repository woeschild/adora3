'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';
import type { Toast } from '../types';

interface ToastItemProps {
  toast: Toast;
  removeToast: (id: number) => void;
}

export default function ToastItem({ toast, removeToast }: ToastItemProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  
  const Icon = toast.type === 'success' ? CheckCircle : AlertTriangle;
  const iconColor = toast.type === 'success' ? 'text-green-500' : 'text-red-500';
  const iconBgColor = toast.type === 'success' ? 'bg-green-500/10' : 'bg-red-500/10';

  // Handle appear animation
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  // Handle dismiss with animation
  const handleDismiss = () => {
    setIsLeaving(true);
    setTimeout(() => {
      removeToast(toast.id);
    }, 200);
  };

  return (
    <div 
      className={`
        bg-surface rounded-lg p-3 sm:p-4 flex items-start gap-2 sm:gap-3 
        w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-96
        transform transition-all duration-300 ease-out
        ${
          isVisible && !isLeaving
            ? 'translate-y-0 opacity-100 scale-100'
            : isLeaving
            ? 'translate-y-2 opacity-0 scale-95'
            : 'translate-y-4 opacity-0 scale-95'
        }
      `}
    >
      <div className={`${iconBgColor} rounded-full p-1.5 sm:p-2 flex-shrink-0`}>
        <Icon className={`w-3 h-3 sm:w-4 sm:h-4 ${iconColor}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm sm:text-md text-primary mb-0.5 sm:mb-1 truncate">
          {toast.type === 'success' ? 'Success!' : 'Error!'}
        </p>
        <p className="text-muted text-xs sm:text-sm leading-relaxed break-words">
          {toast.message}
        </p>
      </div>
      <button
        onClick={handleDismiss}
        className="text-muted hover:text-primary transition-colors p-1 -m-1 flex-shrink-0"
        aria-label="Dismiss notification"
      >
        <X className="w-3 h-3 sm:w-4 sm:h-4" />
      </button>
    </div>
  );
}