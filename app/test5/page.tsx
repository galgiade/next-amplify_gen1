
import authAndUserData from "@/utils/authAndUserData";
import CreateFunctionForm from "./CreateFunctionFrom";

export default async function Test5(){
  const { userData } = await authAndUserData();
  return (
    <div>
      <CreateFunctionForm userData={userData}/>
    </div>
  )
}

