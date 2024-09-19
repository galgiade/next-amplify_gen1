import React, { useState } from "react";
import { UserDataProps, UserList } from "@/api/apiType";
import GroupSelecter from "./functionInfo/GroupSelecter";
import CreateGroup from "./functionInfo/CreateGroup";
import UpdateGroup from "./functionInfo/UpdateGroup";
import JoinGroup from "./JoinGroup";

const FunctionInfo = ({
  userData,
  users
}: UserDataProps & {users: UserList[]}) => {
  const [viewMode, setViewMode] = useState("view");

  const renderComponent = () => {
    switch (viewMode) {
      case "create":
        return <CreateGroup userData={userData} setViewMode={setViewMode} users={users} />;
      case "edit":
        return <UpdateGroup userData={userData} setViewMode={setViewMode} users={users}/>;
      case "join":
        return <JoinGroup userData={userData} setViewMode={setViewMode} users={users}/>;
      default:
        return <GroupSelecter userData={userData} setViewMode={setViewMode} />;
    }
  };

  return (
    <div className="w-1/2 rounded-md p-4 ">
      {renderComponent()}
    </div>
  );
};

export default FunctionInfo;
