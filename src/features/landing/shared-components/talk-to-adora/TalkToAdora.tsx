import { Phone } from 'lucide-react';

export default function TalkToAdora() {
  return (
    <button className="fixed bottom-6 right-6 z-50 bg-accent hover:bg-accent-dark text-white rounded-full px-4 py-3 shadow-lg transition-all duration-200 flex items-center space-x-2 text-base font-medium">
      <Phone className="h-5 w-5" />
      <span>Talk to Adora AI Assistant</span>
    </button>
  );
}