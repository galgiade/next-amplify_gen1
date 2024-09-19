// FunctionItem.tsx
"use client"
import { GroupFormStateProps } from './GroupFormType';
import { GroupData } from './GroupFunctionForm';
import { FaDeleteLeft } from "react-icons/fa6";

interface FunctionItemProps {
    func: string;
    setGroupData: React.Dispatch<React.SetStateAction<GroupData>>;
  }
  
  const DeleteListItemButton: React.FC<FunctionItemProps> = ({ func, setGroupData }) => {
    const removeFunction = (funcToRemove: string) => {
      setGroupData((prevGroupData: GroupFormStateProps) => ({
        ...prevGroupData,
        functions: prevGroupData.functions.filter((func: string) => func !== funcToRemove),
      }));
    };
  
    return (
      <div className="mt-2 border p-2 flex justify-between items-center w-96">
        <span>{func}</span>
        <button
          onClick={() => removeFunction(func)}
          className="bg-white hover:bg-gray-500 text-red font-bold py-2 px-4 rounded"
        >
          <FaDeleteLeft size="1.5rem"/>
        </button>
      </div>
    );
  };
  
  export default DeleteListItemButton;