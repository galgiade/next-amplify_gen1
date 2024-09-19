import AuthCurrentUser from "../../api/queries/get/GetAuthServer";
import { redirect } from "next/navigation";
import getData from "../../api/queries/get/getUserServer";
import AccountUserInfo from "./AccountUseInfo/AccountUserInfo";

//設定を読み込み

async function CustomerInfoPage() {
  const CurrentUser = await AuthCurrentUser();
  if (CurrentUser === null) {
    redirect("/login");
  }
  
  const data = await getData(CurrentUser.username);
  if (data === null) {
    redirect("/createuserinfo");
  }
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      {JSON.stringify(data, null, 2)}
      <AccountUserInfo
        userName={data.userInfo.userName}
        billingId={data.userInfo.billingID}
        billingName={data.userInfo.billingName}
        usage={data.userInfo.calculatedDataValue}
        functions={data.functions}
      />
    </div>
  );
}
export default CustomerInfoPage;
