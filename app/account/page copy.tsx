"use client";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import awsconfig from "../../aws-exports";
import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui";
import { Authenticator } from "@aws-amplify/ui-react";
import UserInfoFetcher from "./UserInfoFetcher/UserInfoFetcher";

//日本語化
I18n.putVocabularies(translations);
I18n.setLanguage("ja");

//設定を読み込み
Amplify.configure({ ...awsconfig });

function CustomerInfoPage() {
 
  return (
    <div className="min-h-screen">
      <div className="p-8 flex flex-col justify-center items-center">
        {/*認証用コンポーネント */}
        <Authenticator>
          {/*cogitoIdでクエリ */}
          {({ user }) =>
            user && user.username ? (
              <UserInfoFetcher username={user.username} />
            ) : (
              <div>ログインしてください。</div>
            )
          }
        </Authenticator>
      </div>
    </div>
  );
}
export default CustomerInfoPage;
