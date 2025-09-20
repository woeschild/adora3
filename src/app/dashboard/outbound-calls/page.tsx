'use client'

import AddCallButton from "@/features/dashboard/outbound-calls/AddCallButton"
import CallTable from "@/features/dashboard/outbound-calls/CallTable"
import SearchBar from "@/features/dashboard/outbound-calls/SearchBar"

export default function OutboundCallsPage () {
    return (
        <div className="w-screen md:w-[80%]">
        <div className="flex flex-col m-6 gap-6">
        
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between gap-3">
            <SearchBar />
            <AddCallButton onClick={() => null} />
            </div>

            {/* Table */}
            <CallTable />
        </div>
        </div>
    )
}