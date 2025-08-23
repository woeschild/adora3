import CTA from "@/components/CTA";
import { RecentCallLogs } from "@/features/call-logs/RecentCallLogs";

export default function HomePage () {
    return (
        <div className="m-6">
            <div className="m-6">
            <CTA />
        </div>
        <div>
            <RecentCallLogs />
        </div>
        </div>
    )
}