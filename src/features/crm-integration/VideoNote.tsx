// components/VideoNote.tsx
import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

export const VideoNote: React.FC = () => {
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="bg-blue-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
          <Play className="h-4 w-4 text-blue-600" />
          Note:
        </h4>
        <p className="text-sm text-gray-700 mb-3">
          You can also watch the YouTube Video on how to connect Adora to your CRM:
        </p>
        <a 
          href="https://www.youtube.com/watch?v=qjAf02WVB"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          Watch Tutorial Video
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};