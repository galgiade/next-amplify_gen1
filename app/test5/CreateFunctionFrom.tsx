"use client";
import React, { useState } from "react";
import CreateUserProfileViewDesign from "@/app/componets/elements/CreateUserProfileViewDesign";
import CreateFunctionButton from "./CreateFunctionButton"
import CreateSubmit from "../componets/elements/CreateSubmit";


export interface FormStateProps {
  cognitoIdentityID: string;
  functionName: string;
  lambdaName: string;
  table: string;
};

const CreateFunctionForm = ({ userData }: { userData: string }) => {

  const [formState, setFormState] = useState<FormStateProps>({
    cognitoIdentityID: userData.cognitoIdentityID,
    functionName: "",
    lambdaName: "",
    table: "function",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sections = [
    {
      title: "関数追加",
      data: [{ label: "関数名", name: "functionName" }],
    },
    {
      title: "ラムダ追加",
      data: [{ label: "ラムダ名", name: "lambdaName" }],
    }, // functions配列をもとに関数情報セクションを追加
  ];

  const handleSubmit = () => {
    console.log(formState);
  };

  return (
    <div className="w-96">
      <div>フォームからアカウント情報を登録してください</div>
      <div className="border rounded-md p-4 ">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="mb-2 text-lg">{section.title}</div>
            <div className="rounded-md flex flex-col items-center">
              {section.data.map((item, idx) => (
                <CreateUserProfileViewDesign
                  key={idx}
                  label={item.label}
                  name={item.name}
                  onChange={handleInputChange} // ここに追加
                />
              ))}
            </div>
          </div>
        ))}
        <div className="flex justify-center">
          <button onClick={handleSubmit}>関数追加</button>
        </div>
        <div>グループデータ: {JSON.stringify(formState)}</div>
      </div>
    </div>
  );
}

export default CreateFunctionForm;
