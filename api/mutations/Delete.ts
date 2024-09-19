import { generateClient } from "aws-amplify/api";
import * as mutations from "@/src/graphql/mutations";

const client = generateClient();

export default async function Delete(ids: string[]): Promise<(string | null)[]> {
  const results: (string | null)[] = [];
  
  for (const id of ids) {
    try {
      const response = await client.graphql({
        query: mutations.deleteServiceDB,
        variables: {
          input: {
            id: id
          },
        },
        authMode: "userPool",
      }) as any;
      console.log(response);
      results.push(response.data.deleteCustomerInfo.id);
    } catch (error) {
      console.error("Error deleting reservation:", error);
      results.push(null);
    }
  }
  
  window.location.reload();
  return results;
}