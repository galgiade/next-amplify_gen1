import React from 'react';
import { SelectedFormProps } from '../serviceType';
import { FaRegTrashCan } from "react-icons/fa6";

const SelectedFilesList: React.FC<SelectedFormProps> = ({ selectedForm, setSelectedForm }) => {
  const handleRemoveFile = (indexToRemove: number) => {
    const updatedFiles = selectedForm.selectedFiles.filter((_, index) => index !== indexToRemove);
    setSelectedForm(currentForm => ({ ...currentForm, selectedFiles: updatedFiles }));
  };

  return (
    <div className="mt-4">
      <div>選択されたファイル:</div>
      <ul className='whitespace-nowrap w-72 h-96 overflow-auto border border-gray-400 rounded-lg'>
        {selectedForm?.selectedFiles?.map((file, index) => (
          <li key={index} className="p-2 flex justify-between items-center border-b border-gray-300 last:border-b-0">
            <span className="flex-1 truncate">{file.name}</span>
            <button 
              className="ml-4 text-red-500 hover:text-red-700  font-bold py-1 px-2 rounded"
              onClick={() => handleRemoveFile(index)}
            >
              <FaRegTrashCan />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedFilesList;