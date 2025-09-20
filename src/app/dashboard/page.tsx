// 'use client'

import { RecentCallLogs } from "@/features/dashboard/call-logs/RecentCallLogs";
import CTA from "./CTA";

export default function HomePage () {
    return (
        <div className="m-4">
      <div className="m-2">
            <CTA />
        </div>
            <RecentCallLogs />
        </div>
    )
}