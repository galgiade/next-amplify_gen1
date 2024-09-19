import { Amplify } from "aws-amplify";
import awsconfig from "../../aws-exports";
import AuthCurrentUser from "../../api/ServerAuth copy";
import { redirect } from "next/navigation";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";
import amplifyConfig from "@/amplifyconfiguration.json";
import { cookies } from "next/headers";
import { customerInfosByCognitoIdentityID } from "@/graphql/queries";

Amplify.configure({ ...awsconfig });

export const cookieBasedClient = generateServerClientUsingCookies({
  config: amplifyConfig,
  cookies,
});

//設定を読み込み

async function CustomerInfoPage() {
  const CurrentUser = await AuthCurrentUser();
  if (CurrentUser === null) {
    redirect("/login");
  }
  
  const { data, errors } = await cookieBasedClient.graphql({
    query: customerInfosByCognitoIdentityID,
    variables: {
      cognitoIdentityID: CurrentUser.username,
      filter: {
        table: {
          eq: "user",
        },
      },
    },
    authMode: "userPool",
  });
  const todos = data.customerInfosByCognitoIdentityID.items;
  console.log(data);
  return (
    <div className="p-8 flex flex-col justify-center items-center">
      {JSON.stringify(todos, null, 2)}
    </div>
  );
}
export default CustomerInfoPage;
