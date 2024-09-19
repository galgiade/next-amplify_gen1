import GetAuthServer from '@/api/queries/get/GetAuthServer';
import { Redirect, UserDataType } from '@/api/apiType';
import getData from '@/api/queries/get/getUserServer';
import type { AuthUser } from 'aws-amplify/auth';
import { redirect } from 'next/navigation';

export default async function authAndUserData() {
  let username = '';
  let userData: UserDataType | Redirect = {
    cognitoIdentityID: "",
    userInfo: {
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
    functions: [
      {
        id: "",
        lambdaName: "",
        functionName: "",
        groupName: "",
        groupId: "",
        groupPassword: "",
        groupOwner: "",
      },
    ],
    reservation: {
      id:"",
      reservationStartTime:"",
      reservationEndTime:"",
      inquiryCategory:"",
      inquiryDetails:""
    }
  };
  let shouldRedirect = false;
  let redirectDestination = '';
  let authData: AuthUser | Redirect | undefined;
  try {
    authData = await GetAuthServer();
    console.log(authData);
    //
    if ('username' in authData) {
      username = authData.username;
      userData = await getData(username);
      if ('userInfo' in userData) {
        console.log(userData);
      }
    } else {
      shouldRedirect = true;
      redirectDestination = authData.redirect.destination;
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
    authData,
    userData
  }

}

