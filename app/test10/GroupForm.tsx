"use client"
import { Dispatch, SetStateAction, useState } from 'react'
import GroupInfo from './GroupInfo';
import GroupFunctionForm from './GroupFunctionForm';
import { GroupFormStateProps } from './GroupFormType';


const GroupForm = ({cognitoIdentityID, functionList, lamdaNames}: {cognitoIdentityID: string, functionList: string[],lamdaNames: string[]}) => {
    const [groupData, setGroupData] = useState<GroupFormStateProps>({
        groupName:"",
        cognitoIdentityID: cognitoIdentityID,
        groupPassword:"",
        groupOwner: cognitoIdentityID,
        lamdaNames: [],
        functions: [],
      });

  return (
    <div className='w-96'>
      <GroupInfo setGroupData={setGroupData} />
      <GroupFunctionForm functionList={functionList} groupData={groupData} setGroupData={setGroupData} />
      <div>グループデータ: {JSON.stringify(groupData)}</div>
    </div>
  )
}

export default GroupForm