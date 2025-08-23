'use client'

import type { NextPage } from 'next';
import { CheckCircle2, ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';

// ============================================================================
// Main Page Component
// ============================================================================

const AppointmentPage: NextPage = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep(s => Math.min(s + 1, 2));
  const handleBack = () => setStep(s => Math.max(s - 1, 1));

  const progressWidth = step === 1 ? '50%' : '100%';

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800 flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        <header className="mb-8">
          <h1 className="font-bold text-gray-900">Create your Appointment</h1>
          <div className="flex items-center mt-2">
            <p className="text-xs text-orange-500 font-semibold mr-4 whitespace-nowrap">Step {step} of 2</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-500 ease-in-out" 
                style={{ width: progressWidth }}
              ></div>
            </div>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {step === 1 ? <DownloadTemplate /> : <BookingAppointment />}
          <Instructions step={step} />
        </main>

        <footer className="mt-12 flex justify-between items-center">
            <button 
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center gap-2 bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <ArrowLeft size={18} />
                Previous Step
            </button>
            <button 
                onClick={handleNext}
                disabled={step === 2}
                className="flex items-center gap-2 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next Step
                <ArrowRight size={18} />
            </button>
        </footer>
      </div>
    </div>
  );
};

// ============================================================================
// Step 1: Download Template Component
// ============================================================================

const DownloadTemplate = () => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
      <div className="mb-8">
        <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full">Step 1</span>
        <h2 className="font-bold text-gray-900 mt-3">Set Up Calendar Availability</h2>
        <p className="text-gray-600 mt-1">Fill all necessary process to complete this.</p>
      </div>

      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-lg p-6 text-center">
        <h3 className="text-xl font-semibold text-gray-900">Download Template</h3>
        <p className="text-gray-600 mt-1 mb-6">Get the make.com template her on Adora.</p>
        <div className="flex flex-col justify-center gap-4">
            <button className="w-full sm:w-auto bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 shadow-sm">
                Download
            </button>
            <button className="w-full sm:w-auto bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// Step 2: Booking an Appointment Component
// ============================================================================

const BookingAppointment = () => {
    return (
      <div className="bg-white p-6 sm:p-8 rounded-lg border border-gray-200">
        <div className="mb-8">
          <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full">Step 2</span>
          <h2 className="text-2xl font-bold text-gray-900 mt-3">Booking an Appointment</h2>
          <p className="text-gray-600 mt-1">Fill all necessary process to complete this.</p>
        </div>
  
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <label htmlFor="webhook-url" className="block text-sm font-medium text-gray-700 mb-2">Webhook URL</label>
            <input 
                type="text"
                id="webhook-url"
                placeholder="Paste"
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <div className="flex flex-col sm:flex-row justify-end gap-4 mt-6">
                <button className="w-full sm:w-auto bg-gray-200 text-gray-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
                    Close
                </button>
                <button className="w-full sm:w-auto bg-orange-500 text-white font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 shadow-sm">
                    Submit
                </button>
            </div>
        </div>
      </div>
    );
  };

// ============================================================================
// Instructions Component (Handles both steps)
// ============================================================================

const instructionsDataStep1 = [
    { text: "Go to neetocal.com and sign up. Follow the needed steps to sign up." },
    { text: "Go to the meetings tab and copy the meeting link." },
    { text: "Download the make.com template on Adora and open the JSON file, replace the current URL that looks like this https://adora.neetocal.com/api/external/v1/slots/meeting-with-xxx-yyy with the meeting link you just copied on neetocal.com." },
    { text: "Sign up on make.com and navigate to the Create Scenario section. At the bottom of the page click on the menu icon and click on the import blueprint template." },
    { text: "Upload the updated blueprint that now includes your meeting link." },
    { text: "Click on the webhook icon, click on the add button, and name the automation whatever you want and which webhook URL is generated that looks like this: https://hook.us2.make.com/xxxx. Also, click on the neetocal icon and click on the add icon in the 'Key' section paste your neetocal API key." },
    { text: "Now paste the webhook URL you copied on adora. For the scenario id, you can find it in the URL e.g https://us2.make.com/119295/scenarios/320809/edit scenario id is 320809" }
];

const instructionsDataStep2 = [
    { text: "Download the booking appointment template on Adora and login to make.com" },
    { text: "Create a new scenario and import the template same step for creating calendar availability scenario this time there is no need to edit the template" },
    { text: "Click on the webhook icon, click on the add button, and name the automation whatever you want and which webhook URL is generated that looks like this: https://hook.us2.make.com/xxxx. Also, click on the neetocal icon and click on the add icon in the 'Key' section paste your neetocal API key." },
    { text: "Now paste the webhook URL you copied on adora. For the scenario id, you can find it in the URL e.g https://us2.make.com/119295/scenarios/320809/edit scenario id is 320809" }
];

interface InstructionsProps {
    step: number;
}

const Instructions: React.FC<InstructionsProps> = ({ step }) => {
  const instructions = step === 1 ? instructionsDataStep1 : instructionsDataStep2;
  return (
    <div className="space-y-6 pt-4">
      {instructions.map((item, index) => (
        <InstructionStep key={index} text={item.text} />
      ))}
    </div>
  );
};


// ============================================================================
// Instruction Step Component (Reusable)
// ============================================================================

interface InstructionStepProps {
  text: string;
}

const InstructionStep: React.FC<InstructionStepProps> = ({ text }) => {
  return (
    <div className="flex items-start">
      <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5 mr-4" />
      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
};


export default AppointmentPage;
