import { generateClient } from 'aws-amplify/api';
import * as mutations from "@/src/graphql/mutations";
import type { UpdateItem } from "@/api/apiType";

const client = generateClient();


export default async function Update(item: Partial<UpdateItem>): Promise<UpdateItem | null> {
    if (!item.id) {
        console.error("ID is required");
        return null;
      }
  try {
    const response = await client.graphql({
      query: mutations.updateServiceDB,
      variables: {
        input: item as UpdateItem,
      },
      authMode: "userPool",
    }) as any;
    window.location.reload()
    return response.data.updateCustomerInfo;
  } catch (error) {
    console.error("Error updating account:", error);
    return null;
  }
}