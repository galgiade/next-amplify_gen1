import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import { serviceDBSByBillingID } from "@/src/graphql/queries";
import { cookies } from "next/headers";
import amplifyConfig from "@/src/amplifyconfiguration.json";
import { UserList } from "../../apiType";

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

export async function getBillingId(billingID: string): Promise<any> {
  //現在時刻(ISO8601)を取得
  try {
    //APIからデータを取得
    const response = await cookieBasedClient.graphql({
      query: serviceDBSByBillingID,
      variables: {
        billingID: billingID,
      },
      authMode: "userPool",
    });
    const users = response.data.serviceDBSByBillingID.items.map((item: UserList) => ({
      id: item.id,
      userName: item.userName ?? '',
      cognitoIdentityID: item.cognitoIdentityID ?? '',
    }));
    
    return users;
  } catch (err) {
    console.error("データの取得中にエラー:", err);
    return [];
  }
}
