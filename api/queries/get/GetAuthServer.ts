import { cookies } from "next/headers";
import { getCurrentUser } from "@aws-amplify/auth/server";
import { runWithAmplifyServerContext } from "@/utils/amplifyServerUtils";

export const dynamic = "force-dynamic";

export default async function GetAuthServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (contextSpec) => getCurrentUser(contextSpec),
    });
    return currentUser;
  } catch (error) {
    console.error(error);
    // エラーを呼び出し元にthrowする
    throw error;
  }
}