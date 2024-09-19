import { FunctionType } from '@/api/apiType';
import { CreateGroupProps } from '@/app/componets/settingremake/SettingType';
import React, { useState } from 'react';

interface UserCheckboxListProps {
  formState: CreateGroupProps;
  setFormState: React.Dispatch<React.SetStateAction<CreateGroupProps>>;
  functions: FunctionType[];
}

const FunctionCheckboxList: React.FC<UserCheckboxListProps> = ({ formState, setFormState, functions }) => {
  const [showWarning, setShowWarning] = useState(false);
  const handleUserCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {
    const functionId = event.target.value;
    const selectedFunction = functions.find(user => user.functionId === functionId);
    if (!selectedFunction) {
      setShowWarning(true);
      return;
    }

    setShowWarning(false);
    if (event.target.checked) {
      setFormState(prevState => ({
        ...prevState,
        functionId: selectedFunction ? [...prevState.functionId, selectedFunction.functionId].filter((id, index, self) => self.indexOf(id) === index) : prevState.functionId,
        functionName: selectedFunction ? [...prevState.functionName, selectedFunction.functionName].filter((name, index, self) => self.indexOf(name) === index) : prevState.functionName,
        lambdaName: selectedFunction ? [...prevState.lambdaName, selectedFunction.lambdaName].filter((name, index, self) => self.indexOf(name) === index) : prevState.lambdaName
      }));
    } else {
      setFormState(prevState => ({
        ...prevState,
        functionId: prevState.functionId.filter(id => id !== selectedFunction.functionId),
        functionName: prevState.functionName.filter(name => name !== selectedFunction.functionName),
        lambdaName: prevState.lambdaName.filter(name => name !== selectedFunction.lambdaName)
      }));
    }
  };

  const uniqueFunctions = Array.from(new Set(functions.map(user => user.functionName)))
    .map(functionName => functions.find(user => user.functionName === functionName));

  return (
    <div className="border border-gray-300 rounded p-4 h-64 overflow-y-auto">
      {uniqueFunctions.length > 0 ? (
        uniqueFunctions.map((functionData) => {
          if (!functionData) return null;
          const { functionId, functionName } = functionData;
          return (
            <div key={functionId} className="mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  value={functionId}
                  checked={formState.functionId.includes(functionId)}
                  onChange={handleUserCheckbox}
                  className="mr-2"
                />
                {functionName}
              </label>
            </div>
          );
        })
      ) : (
        <p className="text-gray-500">利用できる関数がありません。</p>
      )}
      {showWarning && (
        <p className="text-red-500 mt-2">関数が選択されていません。</p>
      )}
      {JSON.stringify(formState, null, 2)}
    </div>
  );
};

export default FunctionCheckboxList;