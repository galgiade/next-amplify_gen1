"use server"
import GetAuthServer from "@/api/queries/get/GetAuthServer";
import CreateUserInfoForm from "./CreateUserInfoForm";

export default async function CreateUserInfo() {
  const currentUser = await GetAuthServer();
  let username = '';
  if ('username' in currentUser) {
    username = currentUser.username
  }
  return (
    <div className="flex justify-center">
      {username &&
        <CreateUserInfoForm username={username} />
      }
    </div>
  );
}
