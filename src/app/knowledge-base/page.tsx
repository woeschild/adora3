'use client';

import SubmitButton from "@/features/knowledge-base/SubmitButton";
import UploadBox from "@/features/knowledge-base/UploadBox";
import UploadedFile from "@/features/knowledge-base/UploadedFile";
import React, { useState } from "react";

export default function KnowledgeBasePage() {
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    type: string;
  } | null>(null);

  const handleSubmit = () => {
    // Dummy file data for demo (replace with actual file metadata)
    setUploadedFile({
      name: "Knowledge based for the company",
      size: "4.3MB",
      type: "JPG",
    });
  };

  const handleSwap = () => {
    setUploadedFile(null); // reset to upload screen
  };

  const handleDelete = () => {
    setUploadedFile(null); // reset to upload screen
  };

  return (
    <main className="m-12">
      <div className="w-full max-w-xl">
        {!uploadedFile ? (
          <div className="flex items-center flex-col">
            <h1 className="text-lg font-semibold mb-4">Upload Knowledge Base</h1>
            <UploadBox />
            <SubmitButton onClick={handleSubmit} />
          </div>
        ) : (
          <UploadedFile
            fileName={uploadedFile.name}
            fileSize={uploadedFile.size}
            fileType={uploadedFile.type}
            onSwap={handleSwap}
            onDelete={handleDelete}
          />
        )}
      </div>
    </main>
  );
}
