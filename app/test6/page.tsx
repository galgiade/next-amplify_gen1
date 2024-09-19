"use client";
import React, { useEffect, useState } from "react";
import { Amplify } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui";
import { Authenticator } from "@aws-amplify/ui-react";
import type { UserDataType } from "@/api/queries/get/getUserServer";
import getData from "@/api/getUserClient";
import AccountUserInfo from "./AccountUserInfo/AccountUserInfo";
import AccountCreateUserInfo from "../createuserinfo/page";
import config from "@/src/amplifyconfiguration.json";

Amplify.configure(config);

// 日本語化
I18n.putVocabularies(translations);
I18n.setLanguage("ja");

// 設定を読み込み
Amplify.configure(config);

function Test6() {
  const [userData, setUserData] = useState<UserDataType | null>(null);
  const [error, setError] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

    const fetchData = async (username: string) => {
    try {
      const data = await getData(username);
      if (data===null || 'redirect' in data) {
        setUserData(null);
      } else {
        setUserData(data);
        console.log(data);
      }
    } catch (err) {
      setError(true);
    }
  };
  useEffect(() => {
    console.log("fetch")
    if (username) {
      fetchData(username);
    }
  }, [username]);

  if (error) {
    return <div>err</div>;
  }

  return (
    <div className="min-h-screen">
      <div className="p-8 flex flex-col justify-center items-center">
        <Authenticator>
          {({ user }) => {
            if (user && user.username && user.username !== username) {
              setUsername(user.username);
            }
            return userData ? (
              <div>
                {JSON.stringify(userData, null, 2)}
                <AccountUserInfo
                  userId={userData.cognitoIdentityID}
                  userName={userData?.userInfo.userName}
                  billingId={userData?.userInfo.billingID}
                  billingName={userData?.userInfo.billingName}
                  usage={userData?.userInfo.calculatedDataValue}
                  functions={userData?.functions}
                />
              </div>
            ) : (
              <div>
                <AccountCreateUserInfo />
              </div>
            );
          }}
        </Authenticator>
      </div>
    </div>
  );
}

export default Test6;
