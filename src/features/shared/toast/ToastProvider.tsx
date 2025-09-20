'use client';

import React, { createContext, useState, ReactNode } from 'react';
import ToastList from './components/ToastList';
import type { Toast, ToastContextType } from './types';

export const ToastContext = createContext<ToastContextType | undefined>(undefined);

let toastId = 0;

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (message: string, type: 'success' | 'error') => {
    const id = toastId++;
    setToasts((prev) => [...prev, { id, message, type }]);
    
    // Store toast in sessionStorage so it persists across page reloads/navigations
    const storedToasts = JSON.parse(sessionStorage.getItem('toasts') || '[]');
    storedToasts.push({ id, message, type });
    sessionStorage.setItem('toasts', JSON.stringify(storedToasts));
    
    // Auto-remove toast after 5 seconds
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
    
    // Remove toast from sessionStorage
    const storedToasts = JSON.parse(sessionStorage.getItem('toasts') || '[]');
    const updatedToasts = storedToasts.filter((toast: Toast) => toast.id !== id);
    sessionStorage.setItem('toasts', JSON.stringify(updatedToasts));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      <ToastList toasts={toasts} removeToast={removeToast} />
    </ToastContext.Provider>
  );
}