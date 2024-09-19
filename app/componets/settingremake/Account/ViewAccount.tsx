import ViewDesign from "@/app/componets/elements/ViewDesign";
import { UserDataType } from "@/api/apiType";

interface ViewAccountProps {
    userData: UserDataType;
    setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const ViewAccount= ({ userData,setEditMode }:ViewAccountProps) => {
    const sections = [
        {
          title: "アカウント情報",
          data: [
            { label: "ユーザーId", value: userData.userInfo.id },
            { label: "ユーザーネーム", value: userData.userInfo.userName }
          ],
        },
        {
          title: "請求情報",
          data: [
            { label: "請求先ID", value: userData.userInfo.billingID },
            { label: "請求名", value: userData.userInfo.billingName },
          ],
        },
        { title: "今月の使用量", data: [{ label: "使用量", value: `${userData.userInfo.calculatedDataValue}MB` }] },
      ];
  return (
    <>
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
          <button onClick={() => setEditMode(true)}>
            編集
          </button>
    </>
  );
};

export default ViewAccount;