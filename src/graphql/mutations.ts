/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createServiceDB = /* GraphQL */ `mutation CreateServiceDB(
  $input: CreateServiceDBInput!
  $condition: ModelServiceDBConditionInput
) {
  createServiceDB(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateServiceDBMutationVariables,
  APITypes.CreateServiceDBMutation
>;
export const updateServiceDB = /* GraphQL */ `mutation UpdateServiceDB(
  $input: UpdateServiceDBInput!
  $condition: ModelServiceDBConditionInput
) {
  updateServiceDB(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateServiceDBMutationVariables,
  APITypes.UpdateServiceDBMutation
>;
export const deleteServiceDB = /* GraphQL */ `mutation DeleteServiceDB(
  $input: DeleteServiceDBInput!
  $condition: ModelServiceDBConditionInput
) {
  deleteServiceDB(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteServiceDBMutationVariables,
  APITypes.DeleteServiceDBMutation
>;
