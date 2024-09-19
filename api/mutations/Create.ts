import { generateClient } from "aws-amplify/api";
import * as mutations from "@/src/graphql/mutations";
import { uuidv7 } from "@kripod/uuidv7";
import { CreateProps } from "../apiType";

const client = generateClient();

export default async function Create(
    formData: CreateProps, reload: boolean = true): Promise<CreateProps | null> {
  try {
    const response = (await client.graphql({
      query: mutations.createServiceDB,
      variables: {
        input: {
          id:uuidv7(),
          ...formData
        },
      },
      authMode: "userPool",
    })) as any;
    
    if (reload) {
      window.location.reload();
    }
    console.log(response);
    return response.data.createCustomerInfo;
  } catch (error) {
    console.error("Error creating reservation:", error);
    return null;
  }
}
