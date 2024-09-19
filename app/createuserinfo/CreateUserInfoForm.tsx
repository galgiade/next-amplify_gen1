"use client";
import React, { useState } from "react";
import CreateUserProfileViewDesign from "@/app/componets/elements/CreateUserProfileViewDesign";
import CreateUserInfoButton from "./CreateUserInfoButton"
import CreateSubmit from "../componets/elements/CreateSubmit";


export interface FormStateProps {
  cognitoIdentityID: string;
  userName: string;
  userActive: boolean;
  calculatedDataValue: number;
  billingName: string;
  billingOwner: string;
  billingPassword: string;
  billingActive: boolean;
  table: string;
};

const CreateUserInfoForm = ({ username }: { username: string }) => {

  const [formState, setFormState] = useState<FormStateProps>({
    cognitoIdentityID: username,
    userName: "",
    userActive:true,
    calculatedDataValue:0,
    billingName: "",
    billingOwner: username,
    billingPassword: "",
    billingActive:true,
    table:"user",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sections = [
    {
      title: "アカウント情報",
      data: [{ label: "ユーザーネーム", name: "userName" }],
    },
    {
      title: "請求情報",
      data: [{ label: "請求名", name: "billingName" }],
    }, // functions配列をもとに関数情報セクションを追加
    {
      title: "請求先パスワード",
      data: [{ label: "パスワード", name: "billingPassword" }],
    },
  ];
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
        <CreateSubmit label="予約" formProps={formState} />
        </div>
        <div>グループデータ: {JSON.stringify(formState)}</div>
      </div>
    </div>
  );
}

export default CreateUserInfoForm;
