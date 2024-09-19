import { cookies } from "next/headers";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";
import { fetchUserAttributes } from "@aws-amplify/auth/server";
import type { FetchUserAttributesOutput } from "@aws-amplify/auth";

export const dynamic = "force-dynamic";


export default async function FetchAuthUser(): Promise<FetchUserAttributesOutput> {
  try {
    const authUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => fetchUserAttributes(contextSpec),
    });
    return authUser;
  } catch (error) {
    console.error(error);
    throw error;
  }
}