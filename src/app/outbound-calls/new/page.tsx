'use client'

import InputChipGroup from "@/features/outbound-calls/InputChipGroup";
import InputField from "@/features/outbound-calls/InputField";
import SelectField from "@/features/outbound-calls/SelectField";
import UploadBox from "@/features/outbound-calls/UploadBox";

export default function NewOutboundCallPage () {
    return (
        <div className="m-6">
            <InputChipGroup
          label="Name"
          options={["Ola Johnson", "Jane Doe", "John Smith", "Mary James"]}
          required
        />

        <InputChipGroup
          label="Number"
          options={["08011122233", "08012345678", "08098765432"]}
          required
        />

        {/* Time Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <InputField label="Start Time" type="time" required />
          <InputField label="End Time" type="time" required />
        </div>

        {/* Date */}
        <InputField label="Date" type="date" required />

        {/* Call Cycle */}
        <SelectField label="Call Cycle" options={["1", "2", "3", "4"]} required />

        {/* Knowledge Base */}
        <InputField
          label="Knowledge Base"
          placeholder="Type knowledge base or paste URL"
          required
        />

        {/* Upload */}
        <UploadBox />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition"
        >
          Submit
        </button>
        </div>
    )
}