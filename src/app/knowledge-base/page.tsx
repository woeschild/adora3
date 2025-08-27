'use client';

import React, { useState, FC, DragEvent, ChangeEvent } from 'react';
import { UploadCloud, File, Trash2, Replace } from 'lucide-react';

// ============================================================================
// Helper Function to format file size
// ============================================================================
const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};


// ============================================================================
// UploadBox Component - Handles file selection and drag-and-drop
// ============================================================================
type UploadBoxProps = {
  onFileSelect: (file: File) => void;
};

const UploadBox: FC<UploadBoxProps> = ({ onFileSelect }) => {
  const [isDragging, setIsDragging] = useState(false);

  // Common file handling logic
  const handleFile = (file: File | undefined) => {
    if (file) {
      onFileSelect(file);
    }
  };

  // Drag and drop event handlers
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation(); // Necessary to allow drop
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFile(e.dataTransfer.files[0]);
  };

  // File input change handler
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleFile(e.target.files?.[0]);
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`w-full p-6 mt-4 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${isDragging ? 'border-orange-500 bg-orange-50' : 'border-gray-300 bg-gray-50'}`}
    >
      <input type="file" id="file-upload" className="hidden" onChange={handleFileChange} />
      <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-full cursor-pointer">
        <UploadCloud className="w-10 h-10 mb-3 text-gray-400" />
        <p className="mb-2 text-sm text-gray-500">
          <span className="font-semibold text-orange-600">Click to upload</span> or drag and drop
        </p>
        <p className="text-xs text-gray-500">Any file type up to 50MB</p>
      </label>
    </div>
  );
};


// ============================================================================
// UploadedFile Component - Displays info about the uploaded file
// ============================================================================
type UploadedFileProps = {
  fileName: string;
  fileSize: string;
  fileType: string;
  onSwap: () => void;
  onDelete: () => void;
};

const UploadedFile: FC<UploadedFileProps> = ({ fileName, fileSize, fileType, onSwap, onDelete }) => (
  <div className="w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm">
    <h1 className="text-lg font-semibold mb-4 text-gray-800">Uploaded File</h1>
    <div className="flex items-start p-4 border border-gray-200 rounded-lg">
        <div className="flex-shrink-0 mr-4">
            <File className="w-10 h-10 text-orange-500" />
        </div>
        <div className="flex-grow">
            <p className="font-semibold text-gray-800 truncate">{fileName}</p>
            <p className="text-sm text-gray-500">{fileType.toUpperCase()} • {fileSize}</p>
        </div>
        <div className="flex items-center ml-4 space-x-2">
            <button onClick={onSwap} className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
                <Replace size={20} />
            </button>
            <button onClick={onDelete} className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors">
                <Trash2 size={20} />
            </button>
        </div>
    </div>
  </div>
);


// ============================================================================
// SubmitButton Component
// ============================================================================
type SubmitButtonProps = {
  onClick: () => void;
  disabled: boolean;
};

const SubmitButton: FC<SubmitButtonProps> = ({ onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="w-full mt-6 bg-orange-500 text-white font-semibold py-3 px-4 rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-300 disabled:bg-gray-300 disabled:cursor-not-allowed"
  >
    Submit
  </button>
);


// ============================================================================
// Main Page Component - KnowledgeBasePage
// ============================================================================
export default function KnowledgeBasePage() {
  // State to hold the actual File object selected by the user
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // State to hold the formatted file information for display
  const [uploadedFile, setUploadedFile] = useState<{
    name: string;
    size: string;
    type: string;
  } | null>(null);

  // This function is called by the UploadBox when a file is selected
  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
  };

  // This function processes the selected file and sets it for display
  const handleSubmit = () => {
    if (selectedFile) {
      setUploadedFile({
        name: selectedFile.name,
        size: formatFileSize(selectedFile.size),
        type: selectedFile.type.split('/')[1] || 'File', // Get file extension
      });
    }
  };

  // Resets all state to return to the upload screen
  const resetState = () => {
    setSelectedFile(null);
    setUploadedFile(null);
  };

  // Handler for the 'Swap' button
  const handleSwap = () => {
    resetState();
  };

  // Handler for the 'Delete' button
  const handleDelete = () => {
    resetState();
  };

  return (
    <main className="m-4 md:m-12 font-sans flex justify-center">
      <div className="w-full max-w-xl">
        {!uploadedFile ? (
          <div className="flex items-center flex-col p-6 border border-gray-200 rounded-xl bg-white shadow-md">
            <h1 className="text-xl font-bold mb-2 text-gray-800">Upload Knowledge Base</h1>
            <p className="text-sm text-gray-500 mb-4">Upload a file to get started.</p>
            <UploadBox onFileSelect={handleFileSelect} />
            {selectedFile && (
                <div className="mt-4 text-center text-sm text-green-600">
                    File selected: <span className="font-medium">{selectedFile.name}</span>
                </div>
            )}
            <SubmitButton onClick={handleSubmit} disabled={!selectedFile} />
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
