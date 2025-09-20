import React from "react";
import TranscriptLine from "./TranscriptLine";
import { Dot } from "lucide-react";

const Transcript: React.FC = () => {
  const lines = [
    { speaker: "Client", text: "Hi there, I’m having trouble placing an order on your website..." },
    { speaker: "AI Assistant", text: "Hello! Thank you for contacting Adora, I’m happy to assist..." },
    { speaker: "Client", text: "Sure, it says 'Payment processing error' but I’ve double-checked..." },
    { speaker: "AI Assistant", text: "I understand. There could be a few reasons for this error..." },
    { speaker: "Client", text: "I haven’t tried a different payment method yet..." },
    { speaker: "AI Assistant", text: "Okay, since you’ve already tried some troubleshooting steps..." },
    { speaker: "Client", text: "Yes, that would be great." },
    { speaker: "AI Assistant", text: "Perfect. I’m transferring you now. You should be connected shortly..." },
  ];

  return (
    <div className="bg-white py-4">
      {lines.map((line, idx) => (
        <TranscriptLine key={idx} speaker={line.speaker as "Client" | "AI Assistant"} text={line.text} />
      ))}
    </div>
  );
};

export default Transcript;
