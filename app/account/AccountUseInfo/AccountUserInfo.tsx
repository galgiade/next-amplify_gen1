import React from "react";
import UserProfileViewDesign from "./UserProfileViewDesign";

export interface UserInfo {
  userName: string;
  billingId: string;
  billingName: string;
  usage: number;
  functions: { groupName: string }[]; // 追加
}

const AccountUserInfo: React.FC<UserInfo> = ({
  userName,
  billingId,
  billingName,
  usage,
  functions = [], // 追加
}) => {
  const sections = [
    {
      title: "アカウント情報",
      data: [{ label: "ユーザーネーム", value: userName }],
    },
    {
      title: "請求情報",
      data: [
        { label: "請求先ID", value: billingId },
        { label: "請求名", value: billingName },
      ],
    },
    { title: "今月の使用量", data: [{ label: "使用量", value: `${usage}MB` }] },
    {
      title: "関数情報",
      data: functions.map((func) => ({
        label: "グループ名",
        value: func.groupName,
      })),
    }, // functions配列をもとに関数情報セクションを追加
  ];
  return (
    <div className="w-1/2 border rounded-md p-4 ">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="mb-2 text-lg">{section.title}</div>
          <div className="rounded-md flex flex-col items-center">
            {section.data.map((item, idx) => (
              <UserProfileViewDesign
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
