import CTA from "@/features/dashboard/components/CTA"
import { RecentCallLogs } from "@/features/dashboard/components/RecentCallLogs"

const Dashboard =()=> {
    return <div className="w-full">
        <div className="m-6">
            <CTA />
        </div>
        <div>
            <RecentCallLogs/>
        </div>
    </div>
}

export default Dashboard