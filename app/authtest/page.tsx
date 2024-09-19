import React from 'react'
import GetAuthServerAttributes from '@/api/FetchAuthUser';
import { redirect } from 'next/navigation';
import { FetchUserAttributesOutput } from 'aws-amplify/auth';


export default async function AuthTestPage() {
    let authDataInfo:FetchUserAttributesOutput | null = null;
    try {
          authDataInfo = await GetAuthServerAttributes();
        } catch (error:any) {
          if (error.name === 'NotAuthorizedException') {
            redirect("/login");
        } else {
            // その他のエラーの場合、エラーページを表示
            console.log(error);
        }
        }
  return (
    <div>
        {JSON.stringify(authDataInfo, null, 2)}
    </div>
  )
}
