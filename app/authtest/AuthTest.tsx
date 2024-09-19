"use client"
import GetAuth from '@/api/queries/get/GetAuth';
import GetAuthServerAttributes from '@/api/FetchAuthUser';
import { fetchAuthSession } from 'aws-amplify/auth';

const AuthTest = () => {
  return (
    <div><button onClick={handleFetchUserAttributes}>fetchUserAttributes</button></div>
  )
}

export default AuthTest