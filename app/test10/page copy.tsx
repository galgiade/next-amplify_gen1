"use client"
import React, { useState, FC, useEffect } from 'react'
import GetAuthClient from '@/api/GetAuthClient';
import GroupFunctionForm from './GroupFunctionForm';
import GroupInfo from './GroupInfo';

const functionList = ["function1", "function2"];

export type FormStateProps = {
  cognitoIdentityID: string;
  groupName: string;
  groupPassword: string;
  groupOwner: string;
  lamdaNames: string[];
  functions: string[];
  // 他のフィールドも同様に
};

const Test10: FC = () => {
  const [groupData, setGroupData] = useState<FormStateProps>({
    groupName:"",
    groupPassword:"",
    cognitoIdentityID: "",
    groupOwner: "",
    lamdaNames: [],
    functions: [],
  });
  useEffect(() => {
    checkUser();
  }, []);

  async function checkUser() {
    try {
      const user = await GetAuthClient();
      if ('username' in user) {
        setGroupData(prevState => ({
          ...prevState,
          cognitoIdentityID: user.username,
          groupOwner: user.username
        }));
      };
    } catch (error) {
      console.log('error checking authenticated user', error);
    }
  }

  return (
    <div className='w-96'>
      <GroupInfo setFormState={setGroupData} />
      <GroupFunctionForm functionList={functionList} groupData={groupData} setGroupData={setGroupData} />
      <div>グループデータ: {JSON.stringify(groupData)}</div>
    </div>
  );
}

export default Test10;