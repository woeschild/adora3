'use client';

import { ArrowUp } from 'lucide-react';
import useBackToTop from './hooks/useBackToTop';

export default function BackToTopComponent() {
  const { isVisible, scrollToTop } = useBackToTop();

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="bg-accent text-white h-fit p-3 rounded-full"
      aria-label="Back to top"
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}