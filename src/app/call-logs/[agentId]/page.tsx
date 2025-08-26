import AudioButton from "@/features/call-logs/agent-details/AudioButton";
import CallHeader from "@/features/call-logs/agent-details/CallHeader";
import Transcript from "@/features/call-logs/agent-details/Transcript";

export default function AgentDetailsPage () {
    return (
        <div className="m-4 text-xs">
            <div className="w-full max-w-3xl">
                <CallHeader agent="Agent X" time="8:00 am" date="Jan-12-24" />
                <AudioButton />
                <Transcript />
            </div>
        </div>
    )
}