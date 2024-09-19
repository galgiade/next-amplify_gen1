"use client";
import React, { useState } from "react";
import AddUserInputField from "./AddUserInputField";
import AddGroupInputField from "./AddGroupInputField";
import AddFunctionPulldown from "./AddFunctionPulldown";

const functionList = ["function1", "function2"];
const lamdaList = ["lamdaList1", "lamdaList2"];

export default function TestPage() {
  const [groupData, setGroupData] = useState<{
    groupName: string;
    userID: string;
    displayedUserIDs: string[];
    selectedFunctions: string[];
    displayedFunction: string[];
  }>({
    groupName: "",
    userID: "",
    displayedUserIDs: [],
    selectedFunctions: [],
    displayedFunction: [],
  });
  const [selectedFunctions, setSelectedFunctions] = useState<string[]>([]);

  const handleInputChange = (name: string, value: string) => {
    setGroupData({
      ...groupData,
      [name]: value,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedFunctions(selectedOptions); // 選択値を更新
  };


  const handleAddUserID = () => {
    const { userID, displayedUserIDs } = groupData;
    if (!displayedUserIDs.includes(userID)) {
      setGroupData({
        ...groupData,
        displayedUserIDs: [...displayedUserIDs, userID],
        userID: "", // 入力をクリアする
      });
    }
  };

  const handleAddFunction = () => {
    const { selectedFunctions, displayedFunction } = groupData;
    const newFunctions = selectedFunctions.filter(
      (func) => !displayedFunction.includes(func)
    );
      console.log(selectedFunctions)
      setGroupData((prevGroupData) => ({
        ...prevGroupData,
        displayedFunction: [...prevGroupData.displayedFunction, ...newFunctions],
        selectedFunctions: [], // 選択をクリアする
      }));
  };
  

  return (
    <div className="border rounded-md p-4 w-1/3 min-h-screen">
      <div className="text-lg m-1">グループの作成</div>
      <AddGroupInputField
        label="グループ名"
        placeHolderValue="グループ名を入力"
        content={groupData.groupName}
        onContentChange={(value) => handleInputChange("groupName", value)}
      />
      <AddUserInputField
        label="追加するユーザーIDを入力"
        placeHolderValue="5700f348-442c-ecc1-41f2-c46aadd153ad"
        content={groupData.userID}
        onContentChange={(value) => handleInputChange("userID", value)}
        onAddButtonClick={handleAddUserID}
      />
      <div className="mt-4">
        <span>ユーザーID:</span>
        <ul>
          {groupData.displayedUserIDs.map((id, index) => (
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
        displayedFunctions={groupData.displayedFunction}
      />
      <div className="mt-4">
        <span>実行関数:</span>
        <ul>
          {groupData.displayedFunction.map((func, index) => (
            <li key={index}>{func}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
