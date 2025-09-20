import { AdoraCRMSteps } from "@/features/dashboard/crm-integration/AdoraCRMSteps";
import React from "react";

export default function CRMIntegrationPage() {
  return (
    <div className="min-h-screen py-4 px-2">
      <div className="max-w-4xl mx-auto">
        <AdoraCRMSteps />
      </div>
    </div>
  );
}
