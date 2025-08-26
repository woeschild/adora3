import React from "react";
import { PlayCircle } from "lucide-react";

const AudioButton: React.FC = () => {
  return (
    <button className="flex items-center gap-2 px-3 py-1 border rounded-md text-[var(--accent)] border-[var(--accent-light)] hover:bg-orange-50 mb-4">
      <PlayCircle size={18} /> Audio
    </button>
  );
};

export default AudioButton;
