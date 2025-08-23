"use client";

import { useState } from "react";
import { CallLogRow } from "./CallLogRow";

// Dummy call logs data
const dummyLogs = [
  {
    id: 1,
    agent: "Agent X",
    date: "Jan-12-24",
    time: "8:00 am",
    transcription:
      "Client: Hi there, I'm having trouble placing an order on your website. Every time I get to the checkout ...",
    audioAvailable: true,
  },
  {
    id: 2,
    agent: "Agent X",
    date: "Jan-12-24",
    time: "8:00 am",
    transcription:
      "Client: Hi there, I'm having trouble placing an order on your website. Every time I get to the checkout ...",
    audioAvailable: true,
  },
  {
    id: 3,
    agent: "Agent X",
    date: "Jan-12-24",
    time: "8:00 am",
    transcription:
      "Client: Hi there, I'm having trouble placing an order on your website. Every time I get to the checkout ...",
    audioAvailable: false,
  },
];

export function RecentCallLogs() {
  const [logs] = useState(dummyLogs);

  return (
    <div className="w-full bg-white rounded-2xl p-4 md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Call Logs</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">
          see all
        </button>
      </div>

      {/* Table header (hidden on small screens) */}
      <div className="hidden md:grid grid-cols-5 shadow-xs gap-4 text-sm text-[var(--accent)] pb-2 mb-2">
        <span>Agents</span>
        <span>Date</span>
        <span>Time</span>
        <span>Conversation Transcription</span>
        <span>Conversation Audio</span>
      </div>

      {/* Table rows */}
      <div className="flex flex-col">
        {logs.map((log, idx) => (
          <CallLogRow key={log.id} log={log} />
        ))}
      </div>
    </div>
  );
}
