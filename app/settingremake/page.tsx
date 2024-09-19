import React from 'react'
import Setting from './Setting';
import { redirect } from 'next/navigation';
import authAndUserData from '@/utils/authAndUserData';

async function SettingRemake() {
  /* const { authData,userData } = await authAndUserData()
if (!authData) {
  return redirect(`/login?redirect=${encodeURIComponent('/contact')}`)
}
if (!userData) {
  return redirect(`/createuserinfo?redirect=${encodeURIComponent('/contact')}`)
} */
  const userDataDemmy = {
    "cognitoIdentityID": "87e58239-27da-4c40-90b5-2f6e0a4d7549",
    "functions": [
      {
        "id": "018db5bd-4b43-7000-94e9-00f7f3ba29e8", "lambdaName": "lambda1", "functionId": "4818e10a-9381-c14c-50cb-a083e6c6e825", "functionName": "function1", "groupName": "group1", "groupId": "", "groupPassword": "", "groupOwner": ""
      },
      {
        "id": "018dbb35-bdf8-7000-b6c0-25d2c8feba2d", "lambdaName": "lambda1", "functionId": "4818e10a-9381-c14c-50cb-a083e6c6e825", "functionName": "function1", "groupName": "group2", "groupId": "", "groupPassword": "", "groupOwner": ""
      },
      {
        "id": "018dbb35-bdf8-7000-b6c0-25d2c8feba3d", "lambdaName": "lambda2", "functionId": "e33010d9-f424-74f1-6ad8-075df9f23c45", "functionName": "function2", "groupName": "group2", "groupId": "", "groupPassword": "", "groupOwner": ""
      }
    ],
    "reservation": null,
    "userInfo": {
      "id": "018d9c43-cab1-7000-b09e-ee82f14eff8d", "userName": "galgiade", "calculatedDataValue": 0, "userActive": true, "billingID": "018d9c43-cab1-7001-aa81-76d4c0ef153f", "billingName": "株式会社コネクトテック", "billingActive": true, "billingOwner": "87e58239-27da-4c40-90b5-2f6e0a4d7549", "billingPassword": "981817721a"
    }
  };
  const users = [
    {
      "id":"018d9c43-cab1-7000-b09e-ee82f14eff8d",
      "cognitoIdentityID": "b7f40ac8-4011-7018-94e6-d0ed206fd9c5",
      "userName": "galgiade",
    },
  ];
  return (
    <Setting userData={userDataDemmy} users={users}/>
  )
}

export default SettingRemake;