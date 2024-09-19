import { customerInfosByCognitoIdentityID } from "../../graphql/queries";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

type FunctionType = {
  lamdaName: string;
  functionName: string;
  groupName: string;
  groupId: string;
  groupPassword: string;
  groupOwner: string;
};

type Reservation = {
  reservationStartTime: string;
  reservationEndTime: string;
  inquiryCategory: string;
  inquiryDetails: string;
};

type UserInfo = {
  // User から UserInfo に名称を変更
  userName: string;
  calculatedDataValue: number;
  userActive: boolean;
  billingID: string;
  billingName: string;
  billingActive: boolean;
  billingOwner: string;
  billingPassword: string;
};

export type UserData  = {
  cognitoIdentityID: string;
  userInfo: UserInfo; // user から userInfo に変更
  functions: FunctionType[];
  reservations: Reservation[];
};

export default async function getData(
  userID: string
): Promise<UserData | null> {
  try {
    const useInfoData: any = await client.graphql({
      query:
        customerInfosByCognitoIdentityID,
      variables: { cognitoIdentityID: userID },
      authMode: "userPool",
    });

    if (useInfoData && useInfoData.data) {
      const items =
        useInfoData.data
          .customerInfosByCognitoIdentityID
          .items;
      if (items.length === 0) {
        console.log("Nodata");
        return null;
      } else {
        const functions: FunctionType[] = [];
        const reservations: Reservation[] = [];
        let userInfo: UserInfo = {
          // user から userInfo に変更
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
                lamdaName: item.lamdaName,
                functionName: item.functionName,
                groupName: item.groupName,
                groupId: item.groupId,
                groupPassword: item.groupPassword,
                groupOwner: item.groupOwner,
              });
              break;
            case "reservation":
              reservations.push({
                reservationStartTime: item.reservationStartTime,
                reservationEndTime: item.reservationEndTime,
                inquiryCategory: item.inquiryCategory,
                inquiryDetails: item.inquiryDetails,
              });
              break;
            case "userInfo": // user から userInfo に変更
              userInfo = {
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
        return {
          cognitoIdentityID: items[0]?.cognitoIdentityID,
          functions,
          reservations,
          userInfo, // user から userInfo に変更
        };
      }
    }
    return null;
  } catch (err) {
    console.log("Error fetching data:", err);
    throw err; // エラーを再スロー
  }
}
