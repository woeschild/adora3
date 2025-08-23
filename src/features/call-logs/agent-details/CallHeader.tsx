import React from "react";
import ActionButtons from "./ActionButtons";

interface CallHeaderProps {
  agent: string;
  time: string;
  date: string;
}

const CallHeader: React.FC<CallHeaderProps> = ({ agent, time, date }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
      <div>
        <h2 className="text-lg font-semibold">{agent}</h2>
        <p className="text-sm text-gray-500">{time} | {date}</p>
      </div>
      <ActionButtons />
    </div>
  );
};

export default CallHeader;
