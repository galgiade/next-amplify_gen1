import { serviceDBSByCognitoIdentityID } from "@/src/graphql/queries";
import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/src/amplifyconfiguration.json";
import type { Redirect,FunctionType,ReservationType,UserInfoType,UserDataType } from "@/api/apiType";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});


export default async function getData(
  userID: string
): Promise<UserDataType | null> {
  try {
    const { data } = await cookieBasedClient.graphql({
      query: serviceDBSByCognitoIdentityID,
      variables: { cognitoIdentityID: userID },
      authMode: "userPool",
    });

    if (!data || !data.serviceDBSByCognitoIdentityID.items || data.serviceDBSByCognitoIdentityID.items.length === 0) {
      return null
    }

    const items = data.serviceDBSByCognitoIdentityID.items;
    const functions: FunctionType[] = [];
    let reservation: ReservationType | null = null;
    let userInfo: UserInfoType = {
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

    // 現在の日付を取得
    const today = new Date();
   // 時間を00:00:00に設定

    items.forEach((item: any) => {
      switch (item.table) {
        case "function":
          functions.push({
            id: item.id,
            lambdaName: item.lambdaName,
            functionId: item.functionId,
            functionName: item.functionName,
            groupName: item.groupName,
            groupId: item.groupId,
            groupPassword: item.groupPassword,
            groupOwner: item.groupOwner,
          });
          break;
        case "reservation":
          // 予約の開始時間が今日以降の場合にのみ追加
          const reservationStartTime = new Date(item.reservationStartTime);
          if (reservationStartTime >= today && !reservation) {
            reservation = {
              id: item.id,
              reservationStartTime: item.reservationStartTime,
              reservationEndTime: item.reservationEndTime,
              inquiryCategory: item.inquiryCategory,
              inquiryDetails: item.inquiryDetails,
            };
          }
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
      return null
    }
    return {
      cognitoIdentityID,
      functions,
      reservation,
      userInfo,
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
}