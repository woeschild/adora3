import React from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

interface AddCallButtonProps {
  onClick?: () => void;
}

const AddCallButton: React.FC<AddCallButtonProps> = ({ onClick }) => {
  return (
    <Link href={'/outbound-calls/new'}
      onClick={onClick}
      className="flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-orange-500 text-white font-medium hover:bg-orange-600 transition w-full sm:w-auto"
    >
      <Plus size={16} /> Add New Outbound Call
    </Link>
  );
};

export default AddCallButton;
