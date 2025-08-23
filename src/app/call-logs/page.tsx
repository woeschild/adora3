import { RecentCallLogs } from "@/features/call-logs/RecentCallLogs";
import SearchBar from "@/features/call-logs/SearchBar";
import Tabs from "@/features/call-logs/Tabs";

export default function CallLogsPage () {
    return (
        <div className="m-6">
            <div className="w-full max-w-4xl flex flex-col gap-4">
                <Tabs />
                <SearchBar placeholder="Search by date or agents..." />
            </div>
            <div>
                <RecentCallLogs />
            </div>
        </div>
    )
}