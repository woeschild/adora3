import CTA from "@/components/CTA";
import { RecentCallLogs } from "@/features/call-logs/RecentCallLogs";

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