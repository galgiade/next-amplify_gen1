import { serviceDBSByCognitoIdentityID } from "@/src/graphql/queries";
import { generateClient } from "aws-amplify/api";

const client = generateClient();
export type Redirect = {
  redirect: {
    destination: string;
    permanent: boolean;
  };
};

type FunctionType = {
  id: string;
  lambdaName: string;
  functionName: string;
  groupName: string;
  groupId: string;
  groupPassword: string;
  groupOwner: string;
};

type Reservation = {
  id: string;
  reservationStartTime: string;
  reservationEndTime: string;
  inquiryCategory: string;
  inquiryDetails: string;
};

type UserInfo = {
  id: string;
  userName: string;
  calculatedDataValue: number;
  userActive: boolean;
  billingID: string;
  billingName: string;
  billingActive: boolean;
  billingOwner: string;
  billingPassword: string;
};

export type  UserDataType = {
  cognitoIdentityID: string;
  userInfo: UserInfo;
  functions: FunctionType[];
  reservations: Reservation[];
};

export default async function getData(
  userID: string
): Promise< UserDataType| Redirect> {
  try {
    const { data } = await client.graphql({
      query: serviceDBSByCognitoIdentityID,
      variables: { cognitoIdentityID: userID },
      authMode: "userPool",
    });

    if (!data || !data.serviceDBSByCognitoIdentityID.items || data.serviceDBSByCognitoIdentityID.items.length === 0) {
      return {
        redirect: {
          destination: '/createuserinfo',
          permanent: false,
        },
      };
    }

    const items = data.serviceDBSByCognitoIdentityID.items;
    const functions: FunctionType[] = [];
    const reservations: Reservation[] = [];
    let userInfo: UserInfo = {
      id: "",
      userName: "",
      calculatedDataValue: 0,
      userActive: false,
      billingID: "",
      billingName: "",
      billingActive: false,
      billingOwner: "",
      billingPassword: "",
    };

    items.forEach((item: any) => {
      switch (item.table) {
        case "function":
          functions.push({
            id: item.id,
            lambdaName: item.lambdaName,
            functionName: item.functionName,
            groupName: item.groupName,
            groupId: item.groupId,
            groupPassword: item.groupPassword,
            groupOwner: item.groupOwner,
          });
          break;
        case "reservation":
          reservations.push({
            id: item.id,
            reservationStartTime: item.reservationStartTime,
            reservationEndTime: item.reservationEndTime,
            inquiryCategory: item.inquiryCategory,
            inquiryDetails: item.inquiryDetails,
          });
          break;
        case "user":
          userInfo = {
            id: item.id,
            userName: item.userName,
            calculatedDataValue: item.calculatedDataValue,
            userActive: item.userActive,
            billingID: item.billingID,
            billingName: item.billingName,
            billingActive: item.billingActive,
            billingOwner: item.billingOwner,
            billingPassword: item.billingPassword,
          };
          break;
      }
    });

    const cognitoIdentityID = items[0]?.cognitoIdentityID;
    if (!cognitoIdentityID) {
      return {
        redirect: {
          destination: '/createuserinfo',
          permanent: false,
        },
      };
    }

    return {
      cognitoIdentityID,
      functions,
      reservations,
      userInfo,
    };
  } catch (error) {
    console.error(error);
    return {
      redirect: {
        destination: '/error',
        permanent: false,
      },
    };
  }
}