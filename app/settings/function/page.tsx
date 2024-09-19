import authAndUserData from '@/utils/authAndUserData'
import React from 'react'
import FunctionInfo from './functionInfo/FunctionInfo'

const page = () => {
  const {userData} = authAndUserData()
  return (
    <div className="w-1/2 rounded-md p-4 ">
    <FunctionInfo
    groupId={userData?.userInfo?.billingID}
    groupName={userData?.userInfo?.billingName}
  />
  </div>
  )
}

export default page