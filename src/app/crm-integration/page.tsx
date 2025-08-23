import { AdoraCRMSteps } from "@/features/crm-integration/AdoraCRMSteps";
import React from "react";

export default function CRMIntegrationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <AdoraCRMSteps />
      </div>
    </div>
  );
}
