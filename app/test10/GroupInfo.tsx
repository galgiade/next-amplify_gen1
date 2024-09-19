"use client";
import CreateUserProfileViewDesign from "@/app/componets/elements/CreateUserProfileViewDesign";
import { GroupDataStateProps, GroupFormStateProps } from "./GroupFormType";

const GroupInfo = ({ setGroupData }: GroupDataStateProps) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGroupData((prevState: GroupFormStateProps) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const sections = [
    {
      data: [{ label: "グループ名", name: "groupName" }],
    },
    {
      data: [{ label: "グループパスワード", name: "groupPassword" }],
    },
  ];
  return (
    <div>
      <div>フォームからグループ情報を登録してください</div>
      <div className="border rounded-md p-4 ">
        {sections.map((section, index) => (
          <div key={index}>
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
      </div>
    </div>
  );
}

export default GroupInfo;
