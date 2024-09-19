/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getServiceDB = /* GraphQL */ `query GetServiceDB($id: ID!) {
  getServiceDB(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetServiceDBQueryVariables,
  APITypes.GetServiceDBQuery
>;
export const listServiceDBS = /* GraphQL */ `query ListServiceDBS(
  $filter: ModelServiceDBFilterInput
  $limit: Int
  $nextToken: String
) {
  listServiceDBS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListServiceDBSQueryVariables,
  APITypes.ListServiceDBSQuery
>;
export const serviceDBSByTable = /* GraphQL */ `query ServiceDBSByTable(
  $table: String!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceDBFilterInput
  $limit: Int
  $nextToken: String
) {
  serviceDBSByTable(
    table: $table
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServiceDBSByTableQueryVariables,
  APITypes.ServiceDBSByTableQuery
>;
export const serviceDBSByCognitoIdentityID = /* GraphQL */ `query ServiceDBSByCognitoIdentityID(
  $cognitoIdentityID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceDBFilterInput
  $limit: Int
  $nextToken: String
) {
  serviceDBSByCognitoIdentityID(
    cognitoIdentityID: $cognitoIdentityID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServiceDBSByCognitoIdentityIDQueryVariables,
  APITypes.ServiceDBSByCognitoIdentityIDQuery
>;
export const serviceDBSByBillingID = /* GraphQL */ `query ServiceDBSByBillingID(
  $billingID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceDBFilterInput
  $limit: Int
  $nextToken: String
) {
  serviceDBSByBillingID(
    billingID: $billingID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServiceDBSByBillingIDQueryVariables,
  APITypes.ServiceDBSByBillingIDQuery
>;
export const serviceDBSByGroupId = /* GraphQL */ `query ServiceDBSByGroupId(
  $groupId: String!
  $sortDirection: ModelSortDirection
  $filter: ModelServiceDBFilterInput
  $limit: Int
  $nextToken: String
) {
  serviceDBSByGroupId(
    groupId: $groupId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ServiceDBSByGroupIdQueryVariables,
  APITypes.ServiceDBSByGroupIdQuery
>;
