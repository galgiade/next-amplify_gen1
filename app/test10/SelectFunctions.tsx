// SelectFunctions.tsx
import React from 'react';
import type { GroupData } from './GroupFunctionForm';

interface SelectFunctionsProps {
  functionList: string[];
  groupData: GroupData;
  setGroupData: React.Dispatch<React.SetStateAction<GroupData>>;
}

export const SelectFunctions: React.FC<SelectFunctionsProps> = ({
  functionList,
  groupData,
  setGroupData,
}) => {
  // 利用可能な関数をフィルタリング
  const availableFunctions = functionList.filter(func => !groupData.functions.includes(func));

  // select要素で選択された関数をグループに追加するハンドラ
  const handleFunctionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedFunction = event.target.value;
    if (selectedFunction) {
      const updatedFunctions = Array.from(new Set([...groupData.functions, selectedFunction]));
      setGroupData({ ...groupData, functions: updatedFunctions });
    }
  };

  return (
    <div>
      <select
        multiple
        value={[]}
        onChange={handleFunctionChange}
        className="block w-full text-black border rounded-md shadow-sm focus:ring-2 focus:ring-black"
      >
        {availableFunctions.map((func, index) => (
          <option key={index} value={func}>
            {func}
          </option>
        ))}
      </select>
    </div>
  );
};