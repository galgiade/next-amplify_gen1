import React from "react";
import UserProfileViewDesign from "@/app/componets/elements/ViewDesign";

export interface FunctionInfo {
  groupId:string;
  groupName: string;
}

const FunctionInfo: React.FC<FunctionInfo> = ({
  groupId,
  groupName,
}) => {
  const sections = [
    {
      title: "グループ情報",
      data: [
        { label: "グループID", value: groupId },
        { label: "グループ名", value: groupName },
      ],
    },
  ];
  return (
    <div className="w-1/2 rounded-md p-4 ">
      {sections.map((section, index) => (
        <div key={index}>
          <div className="mb-2 text-lg">{section.title}</div>
          <div className="rounded-md flex flex-col">
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

export default FunctionInfo;
