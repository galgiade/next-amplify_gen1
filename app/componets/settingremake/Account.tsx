"use client"
import { UserDataType } from "@/api/apiType";
import EditAccount from "./Account/EditAccount";
import ViewAccount from "./Account/ViewAccount";
import { useState } from "react";


interface AccountUserInfoProps {
  userData: UserDataType;
}

const AccountUserInfo = ({
  userData
}:AccountUserInfoProps) => {
  const [editMode,setEditMode] =  useState(false);
  return (
    <div className="w-1/2 rounded-md p-4 ">
      {editMode ? <EditAccount userData={userData} setEditMode = {setEditMode} /> : <ViewAccount userData={userData} setEditMode = {setEditMode}/>}
    </div>
  );
};

export default AccountUserInfo;
