import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <div className="flex items-center w-full sm:w-96 bg-gray-50 border border-gray-300 rounded-md px-3 py-2">
      <Search className="w-5 h-5 text-gray-500 mr-2" />
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        className="w-full bg-transparent outline-none text-sm"
      />
    </div>
  );
};

export default SearchBar;
