"use client";
import React from "react";
import { uuidv7 } from "@kripod/uuidv7";
import { Authenticator } from "@aws-amplify/ui-react";
import config from "../../amplifyconfiguration.json";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import * as mutations from "../../graphql/mutations";

Amplify.configure(config);

const client = generateClient();

function apitest() {
  const reservationData = {
    id: uuidv7(), // 適切なIDを生成または指定する
    cognitoIdentityID: "a34da519-a9e2-4e07-b14b-9a012cdca458", // Cognito IDを指定する
    reservationStartTime: "2023-12-18T09:00:00.000Z",
    reservationEndTime: "2023-12-18T09:50:00.000Z",
    inquiryCategory: "NewProject",
    inquiryDetails: "Test",
    table: "reservation",
    billingActive: null,
    billingID: null,
    billingName: null,
    billingOwner: null,
    billingPassword: null,
    calculatedDataValue: null,
    functionId: null,
    functionName: null,
    groupId: null,
    groupName: null,
    groupOwner: null,
    groupPassword: null,
    lamdaName: null,
    userActive: null,
    userName: null,
  };
  const handleCreateReservation = async () => {
    try {
      const response = (await client.graphql({
        query: mutations.createCustomerInfo,
        variables: { input: reservationData },
        authMode:"userPool"
      })) as any;

      if (response.data && response.data.createCustomerInfo) {
        return response.data.createCustomerInfo;
      } else {
        console.error("No data returned from GraphQL mutation");
        return null;
      }
    } catch (error) {
      console.error("Error creating reservation:", error);
    }
  };
  return (
    <Authenticator>
      <button onClick={handleCreateReservation}>Create Reservation</button>
    </Authenticator>
  );
}

export default apitest;
