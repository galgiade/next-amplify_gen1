/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateServiceDB = /* GraphQL */ `subscription OnCreateServiceDB(
  $filter: ModelSubscriptionServiceDBFilterInput
  $owner: String
) {
  onCreateServiceDB(filter: $filter, owner: $owner) {
    id
    table
    cognitoIdentityID
    userName
    calculatedDataValue
    userActive
    billingID
    billingName
    billingActive
    billingOwner
    billingPassword
    lambdaName
    functionId
    functionName
    groupName
    groupId
    groupPassword
    groupOwner
    reservationStartTime
    reservationEndTime
    inquiryCategory
    inquiryDetails
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateServiceDBSubscriptionVariables,
  APITypes.OnCreateServiceDBSubscription
>;
export const onUpdateServiceDB = /* GraphQL */ `subscription OnUpdateServiceDB(
  $filter: ModelSubscriptionServiceDBFilterInput
  $owner: String
) {
  onUpdateServiceDB(filter: $filter, owner: $owner) {
    id
    table
    cognitoIdentityID
    userName
    calculatedDataValue
    userActive
    billingID
    billingName
    billingActive
    billingOwner
    billingPassword
    lambdaName
    functionId
    functionName
    groupName
    groupId
    groupPassword
    groupOwner
    reservationStartTime
    reservationEndTime
    inquiryCategory
    inquiryDetails
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateServiceDBSubscriptionVariables,
  APITypes.OnUpdateServiceDBSubscription
>;
export const onDeleteServiceDB = /* GraphQL */ `subscription OnDeleteServiceDB(
  $filter: ModelSubscriptionServiceDBFilterInput
  $owner: String
) {
  onDeleteServiceDB(filter: $filter, owner: $owner) {
    id
    table
    cognitoIdentityID
    userName
    calculatedDataValue
    userActive
    billingID
    billingName
    billingActive
    billingOwner
    billingPassword
    lambdaName
    functionId
    functionName
    groupName
    groupId
    groupPassword
    groupOwner
    reservationStartTime
    reservationEndTime
    inquiryCategory
    inquiryDetails
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteServiceDBSubscriptionVariables,
  APITypes.OnDeleteServiceDBSubscription
>;
