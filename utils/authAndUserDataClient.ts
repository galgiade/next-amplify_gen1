import getData from '@/api/getUserClient';
import type { AuthUser } from 'aws-amplify/auth';
import type { UserDataType } from "@/api/getUserClient"
import type { Redirect } from '@/api/getUserClient';
import { redirect } from 'next/navigation';
import GetAuthClient from '@/api/GetAuthClient';

export default async function authAndUserDataClient() {
  let username = '';
  let userData: UserDataType | Redirect  = {
    cognitoIdentityID: "",
    userInfo:  {
      id: "",
      userName: "",
      calculatedDataValue: 0,
      userActive: true,
      billingID: "",
      billingName: "",
      billingActive: true,
      billingOwner: "",
      billingPassword: "",
    },
    functions: [],
    reservations: []
  };
  let shouldRedirect = false;
  let redirectDestination = '';
  try {
    const data: AuthUser | Redirect = await GetAuthClient();
    console.log(data);
    //
    if ('username' in data) {
      username = data.username;
      userData = await getData(username);
      if ('userInfo' in userData) {
        console.log(userData);
      }
    } else {
      shouldRedirect = true;
      redirectDestination = data.redirect.destination;
    }
  } catch (error) {
    console.log("error");
    
  }
  if ('redirect' in userData) {
    shouldRedirect = true;
    redirectDestination = userData.redirect.destination;
  }

  if (shouldRedirect) {
    redirect(redirectDestination);
  }
  return {
    username,
    userData
  }
  
}

