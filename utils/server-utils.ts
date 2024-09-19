import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";

import config from "@/src/aws-exports";

export const serverClient = generateServerClientUsingCookies({
  config,
  cookies,
});