// 'use client'

import CTA from "@/components/CTA";
// import ApiInputModal from "@/components/toasts/api-input";
// import DeleteConfirmationModal from "@/components/toasts/delete-confirmation";
// import SuccessToast from "@/components/toasts/success-toast";
// import UpgradePlanModal from "@/components/toasts/upgrade-plan";
import { RecentCallLogs } from "@/features/call-logs/RecentCallLogs";

export default function HomePage () {
    return (
        <div className="m-4">
            {/* testing toasts and modals (one at a time, obviously 🙄) */}
            {/* <DeleteConfirmationModal onConfirm={()=>{}} onCancel={()=>{}} /> */}
            {/* <UpgradePlanModal onConfirm={()=>{}} onCancel={()=>{}} /> */}
            {/* <ApiInputModal onSubmit={()=>{}} onCancel={()=>{}} /> */}
            {/* <SuccessToast title="Successful" message="whatever" onClose={()=>{}} /> */}
        <div className="m-2">
            <CTA />
        </div>
            <RecentCallLogs />
        </div>
    )
}