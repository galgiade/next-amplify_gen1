// FileUpload.tsx
"use client"
import React, { useState } from 'react';
import { SelectedFormProps } from '../serviceType';

const FileUpload = ({ selectedForm, setSelectedForm }: SelectedFormProps) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    handleFileChange(Array.from(files));
  };

  const handleFileChange = (files: File[]) => {
    setSelectedForm({ ...selectedForm, selectedFiles: files });
  };

  return (
    <div className='w-1/3 '>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`mt-4  h-96 border-2 flex items-center justify-center ${
          isDragging ? "border-black" : "border-gray-300"
        } rounded-md`}
      >
        <input
            type="file"
            className="hidden"
            id="file-upload"
            multiple
            onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer hover:bg-gray-300 text-black py-2 px-4 rounded"
          >
            ファイルを選択
          </label>
      </div>
    </div>
  );
};

export default FileUpload;