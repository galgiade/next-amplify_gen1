"use client";
import { UserDataProps, UserList } from '@/api/apiType'
import CreateUserProfileViewDesign from "@/app/componets/elements/CreateUserProfileViewDesign";
import { useState } from 'react';
import CreateSubmit from '../../componets/elements/CreateSubmit';
import { uuidv7 } from '@kripod/uuidv7';
import UserCheckboxList from './CreateGroup/UserCheckboxList';
import FunctionCheckboxList from './CreateGroup/FunctionCheckboxList';
import Create from '@/api/mutations/Create';
import { CreateGroupProps } from '@/app/componets/settingremake/SettingType';



const CreateGroup = ({
  userData,
  setViewMode,
  users
}: UserDataProps & { users: UserList[], setViewMode: (mode: string) => void }) => {

  const [formState, setFormState] = useState<CreateGroupProps>({
    cognitoIdentityID: userData.cognitoIdentityID,
    table: "function",
    functionId: [],
    functionName: [],
    groupId: uuidv7(),
    groupName: "",
    groupOwner: userData.cognitoIdentityID,
    groupPassword: "",
    lambdaName: [],
    userList:[]
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prevState => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async () => {
    const createData = formState.userList.flatMap(userId =>
      formState.functionId.map((functionId, index) => ({
        lambdaName: formState.lambdaName[index],
        functionId: functionId,
        functionName: formState.functionName[index],
        groupName: formState.groupName,
        groupId: formState.groupId,
        groupPassword: formState.groupPassword,
        groupOwner: formState.groupOwner,
        cognitoIdentityID: userId,
        table: formState.table,
      }))
    );
  
    for (const data of createData) {
      await Create(data,false)
    }
  };
  return (
    <div>
      <CreateUserProfileViewDesign
      label="グループ名"
      name="groupName"
      onChange={handleInputChange}
    />
    <CreateUserProfileViewDesign
      label="グループパスワード"
      name="groupPassword"
      onChange={handleInputChange}
    />
      <UserCheckboxList formState = {formState} setFormState = {setFormState} users = {users} />
      <FunctionCheckboxList formState = {formState} setFormState = {setFormState} functions = {userData.functions} />
      <button className="py-2 px-4 rounded text-lg" onClick={handleSubmit}>
        登録
      </button>
      <button className="py-2 px-4 rounded text-lg" onClick={() => setViewMode('view')}>
        戻る
      </button>
      {JSON.stringify(userData.functions, null, 2)}
    </div>
  );
}

export default CreateGroup