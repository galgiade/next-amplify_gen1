import authAndUserData from "@/utils/authAndUserData";
import Service from "../componets/service/Service";
import { redirect } from "next/navigation";

export default async function Test4() {
  const { authData,userData } = await authAndUserData();
  if (!authData) {
    return redirect(`/login?redirect=${encodeURIComponent('/contact')}`)
  }
  if (!userData) {
    return redirect(`/createuserinfo?redirect=${encodeURIComponent('/contact')}`)
  }

  return (
    <div>
      <Service functions = {userData?.functions || []}/>
    </div>
  );
}