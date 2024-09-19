import AuthCurrentUser from "@/api/queries/get/GetAuthServer";
import { redirect } from "next/navigation";
import getData from "@/api/queries/get/getUserServer";
import UserDelete from "./UserDelete";

export default async function Test9(){
  const CurrentUser = await AuthCurrentUser();
  if (CurrentUser === null) {
    return redirect("/login");
  }
  
  const data = await getData(CurrentUser.username);
  if (data === null) {
    return redirect("/createuserinfo");
  }
  return (
    <div>
      {JSON.stringify(data, null, 2)}
      <UserDelete data={data} />
    </div>
  )
}