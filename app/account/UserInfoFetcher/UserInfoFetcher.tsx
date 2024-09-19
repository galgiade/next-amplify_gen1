"use client";
import React, { useState, useEffect } from "react";
import AccountUserInfo from "../AccountUseInfo/AccountUserInfo";
import getData from "../API";
interface UserName {
  username: string;
}
const UserInfoFetcher = ({ username }: UserName) => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUserData() {
      if (!username) {
        setError("User not authenticated");
        setLoading(false);
        return;
      }

      try {
        const data = await getData(username);
        setUserData(data);
      } catch (err) {
        setError(err.message || "An error occurred.");
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userData) {
    return <div>No username data found.</div>;
  }

  return (
    <div>
      <AccountUserInfo
        userName={userData?.userInfo.userName}
        billingId={userData?.userInfo.billingID}
        billingName={userData?.userInfo.billingName}
        usage={userData?.userInfo.calculatedDataValue}
        functions={userData?.functions}
      />
      {JSON.stringify(userData, null, 2)}
    </div>
  );
};

export default UserInfoFetcher;
