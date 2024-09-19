"use client";
import React, { useState } from "react";
import UpdateUserProfileViewDesign from "@/app/componets/elements/UpdateUserProfileViewDesign"
import EditSubmitButton from "@/app/settings/account/editAccount/EditSubmitButton"


export interface EditFormStateProps {
  id: string;
  userName: string;
  billingName: string;
  billingPassword: string;
};

const EditUserForm = ({ id, userName, billingName, billingPassword }: EditFormStateProps) => {

  const [formState, setFormState] = useState<EditFormStateProps>({
    id: id,
    userName: userName,
    billingName: billingName,
    billingPassword: billingPassword,
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
      data: [{ label: "ユーザーネーム", name: "userName", value: formState.userName}],
    },
    {
      title: "請求情報",
      data: [{ label: "請求名", name: "billingName",  value: formState.billingName}],
    }, // functions配列をもとに関数情報セクションを追加
    {
      title: "請求先パスワード",
      data: [{ label: "パスワード", name: "billingPassword", value: formState.billingPassword}],
    },
  ];
  return (
    <div className="w-96">
      <div className="border rounded-md p-4 ">
        {sections.map((section, index) => (
          <div key={index}>
            <div className="mb-2 text-lg">{section.title}</div>
            <div className="rounded-md flex flex-col items-center">
              {section.data.map((item, idx) => (
                <UpdateUserProfileViewDesign
                  key={idx}
                  label={item.label}
                  name={item.name}
                  value={item.value}
                  onChange={handleInputChange} // ここに追加
                />
              ))}
            </div>
          </div>
        ))}
          <EditSubmitButton formState={formState} />
        <div>グループデータ: {JSON.stringify(formState)}</div>
      </div>
    </div>
  );
}

export default EditUserForm;
