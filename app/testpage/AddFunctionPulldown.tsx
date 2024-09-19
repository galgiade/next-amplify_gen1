import React from "react";


interface FunctionPulldownProps {
  functionList: string[];
  lamdaList: string[];
  selectedValues: string[];
  handleSelectChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onAddButtonClick: () => void;
  displayedFunctions: string[];
}
const AddFunctionPulldown: React.FC<FunctionPulldownProps> = ({
  functionList,
  lamdaList,
  selectedValues,
  handleSelectChange,
  onAddButtonClick,
  displayedFunctions,
}) => {
  return (
    <div>
      <label htmlFor="colors">実行する関数:</label>
      <div className="flex">
        <select
          id="colors"
          value={selectedValues}
          onChange={handleSelectChange}
          multiple
          className="
          block
          w-96
          text-black
          border
          focus:ring-black
          rounded-md
          shadow-sm
          focus:ring-2
          text-lg
          "
        >
          <option value="" disabled hidden>
            選択してください
          </option>
          {functionList
            .filter(
              (func) =>
                !displayedFunctions.includes(
                  lamdaList[functionList.indexOf(func)]
                )
            )
            .map((func: string, index: number) => (
              <option value={lamdaList[index]} key={index}>
                {func}
              </option>
            ))}
        </select>
        <button className="text-lg p-1 ml-4" onClick={onAddButtonClick}>
          追加
        </button>
      </div>
      <div>{selectedValues}</div>
    </div>
  );
};

export default AddFunctionPulldown;
