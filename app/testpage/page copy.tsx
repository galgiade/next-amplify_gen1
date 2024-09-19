"use client";
import { useState } from "react";
import AddUserInputField from "./AddUserInputField";
import AddGroupInputField from "./AddGroupInputField";
import AddFunctionPulldown from "./AddFunctionPulldown";

const functionList = ["function1", "function2"];
const lamdaList = ["lamdaList1", "lamdaList2"];

export default function TestPage() {
  const [groupName, setGroupName] = useState<string>("");
  const [userID, setUserID] = useState<string>("");
  const [displayedUserIDs, setDisplayedUserIDs] = useState<string[]>([]);
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);
  const [displayedFunction, setDisplayedFunction] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedOptions = Array.from(event.target.selectedOptions).map(
    (option) => option.value
  );
  setSelectedFunctions(selectedOptions);
};


  const handleAddUserID = () => {
     if (!displayedUserIDs.includes(userID)) {
       setDisplayedUserIDs([...displayedUserIDs, userID]);
       setUserID(""); // 入力をクリアする
     } else {
       console.log("このユーザーIDはすでに追加されています。");
     }
  };
  const handleAddFunction = () => {
    const newFunctions = selectedFunctions.filter(
      (func) => !displayedFunction.includes(func)
    );

    if (newFunctions.length > 0) {
      setDisplayedFunction([...displayedFunction, ...newFunctions]);
      setSelectedFunctions([]); // 選択をクリアする
    } else {
      console.log("選択された関数はすでに追加されています。");
    }
  };
  return (
    <div className="border rounded-md p-4 w-1/3 min-h-screen">
      <div className="text-lg m-1">グループの作成</div>
      <AddGroupInputField
        label="グループ名"
        placeHolderValue="グループ名を入力"
        content={groupName}
        onContentChange={setGroupName}
      />
      <AddUserInputField
        label="追加するユーザーIDを入力"
        placeHolderValue="5700f348-442c-ecc1-41f2-c46aadd153ad"
        content={userID}
        onContentChange={setUserID}
        onAddButtonClick={handleAddUserID}
      />
      <div className="mt-4">
        <span>ユーザーID:</span>
        <ul>
          {displayedUserIDs.map((id, index) => (
            <li key={index}>{id}</li>
          ))}
        </ul>
      </div>
      <AddFunctionPulldown
        functionList={functionList}
        lamdaList={lamdaList}
        selectedValues={selectedFunctions}
        handleSelectChange={handleSelectChange}
        onAddButtonClick={handleAddFunction}
        displayedFunctions={displayedFunction}
      />
      <div className="mt-4">
        <span>実行関数:</span>
        <ul>
          {displayedFunction.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
