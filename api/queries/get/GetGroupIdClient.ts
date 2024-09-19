import { serviceDBSByGroupId } from "@/src/graphql/queries";
import { generateClient } from "aws-amplify/api";

const client = generateClient();

export async function getGroupId(groupId: string): Promise<any> {
  try {
    const response = await client.graphql({
      query: serviceDBSByGroupId,
      variables: {
        groupId: groupId,
      },
      authMode: "userPool",
    });
    console.log(response.data.serviceDBSByGroupId.items);
    // データ取得に成功した場合、responseオブジェクトからデータを取り出して返す
    return response.data.serviceDBSByGroupId.items;
    
  } catch (err) {
    console.error("データの取得中にエラー:", err);
    
    // エラーが発生した場合はnullなどの適切な値を返す
    return null; 
  }
}