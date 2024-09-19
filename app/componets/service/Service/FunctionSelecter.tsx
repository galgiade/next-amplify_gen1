import { useState } from 'react';
import { FunctionSelecterProps, SelectedFormStateProps } from "../serviceType";

const FunctionSelecter = ({
  functions,
  setSelectedForm
}: FunctionSelecterProps) => {
  const [selectedFunction, setSelectedFunction] = useState<string | null>(null);
  const functionList = functions.map((item) => item.functionName);
  const lambdaList = functions.map((item) => item.lambdaName);

  const handleFunctionChange = (newSelect: string) => {
    setSelectedFunction(newSelect);
    setSelectedForm((prevState: SelectedFormStateProps) => ({
      ...prevState,
      selectedFunctionName: newSelect,
      selectedLambdaName: lambdaList[functionList.indexOf(newSelect)]
    }));
  };

  return (
    <div className="w-72">
      <label htmlFor="functions">実行する関数:</label>
      <div className="overflow-auto h-96 border rounded-md">
        <ul className="whitespace-nowrap">
          {functionList.map((func: string, index: number) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer ${func === selectedFunction ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              onClick={() => handleFunctionChange(func)}
            >
              {func}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default FunctionSelecter;