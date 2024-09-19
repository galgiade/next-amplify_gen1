"use client"
import React, { useState } from 'react';
import AccountUserInfo from "./AccountUserInfo/AccountUserInfo";
import EditUserForm from "./editAccount/EditUserForm";
import { UserDataType } from '@/api/queries/get/getUserServer';

export default function AccountFrom({ userData }: { userData: UserDataType }) {
  const [showAccountUserInfo, setShowAccountUserInfo] = useState(true);

  const toggleComponent = () => {
    setShowAccountUserInfo(!showAccountUserInfo);
  };

  return (
    <div>
      {showAccountUserInfo ? (
          <AccountUserInfo
          userId={userData?.cognitoIdentityID}
          userName={userData?.userInfo?.userName}
          billingId={userData?.userInfo?.billingID}
          billingName={userData?.userInfo?.billingName}
          usage={userData?.userInfo?.calculatedDataValue}
          />
          ) : (
              <EditUserForm
              id = {userData.userInfo.id}
              userName = {userData.userInfo.userName}
              billingName = {userData.userInfo.billingName}
              billingPassword = {userData.userInfo.billingPassword}
              />
            )}
        <button onClick={toggleComponent}>編集する</button>
    </div>
  );
}