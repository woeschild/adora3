'use client';

import React from 'react';
import ToastItem from './ToastItem';
import type { Toast } from '../types';

interface ToastListProps {
  toasts: Toast[];
  removeToast: (id: number) => void;
}

export default function ToastList({ toasts, removeToast }: ToastListProps) {
  return (
    <div className="fixed bottom-2 sm:bottom-4 left-0 right-0 sm:left-auto sm:right-4 space-y-2 z-50 flex flex-col items-center sm:items-end pointer-events-none px-4 sm:px-0">
      {toasts.map((toast, index) => (
        <div 
          key={toast.id} 
          className="pointer-events-auto w-full sm:w-auto flex justify-center sm:justify-end"
          style={{
            animationDelay: `${index * 100}ms`
          }}
        >
          <ToastItem toast={toast} removeToast={removeToast} />
        </div>
      ))}
    </div>
  );
}