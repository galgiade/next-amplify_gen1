import React from "react";
import ViewDesign from "../../../componets/elements/ViewDesign";

export interface UserInfo {
  userId:string;
  userName: string;
  billingId: string;
  billingName: string;
  usage: number; 
}

const AccountUserInfo: React.FC<UserInfo> = ({
  userId,
  userName,
  billingId,
  billingName,
  usage, // 追加
}) => {
  const sections = [
    {
      title: "アカウント情報",
      data: [
        { label: "ユーザーId", value: userId },
        { label: "ユーザーネーム", value: userName }
      ],
    },
    {
      title: "請求情報",
      data: [
        { label: "請求先ID", value: billingId },
        { label: "請求名", value: billingName },
      ],
    },
    { title: "今月の使用量", data: [{ label: "使用量", value: `${usage}MB` }] },
  ];
  return (
    <div className="w-1/2 rounded-md p-4 ">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="mb-2 text-lg">{section.title}</div>
          <div className="rounded-md flex flex-col">
            {section.data.map((item, idx) => (
              <ViewDesign
                key={idx}
                label={item.label}
                value={item.value}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountUserInfo;
