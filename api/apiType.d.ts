export type DBDataType = {
    billingActive: boolean;
    billingID: string;
    billingName: string;
    billingOwner: string;
    billingPassword: string;
    calculatedDataValue: number;
    cognitoIdentityID: string;
    functionId: string;
    functionName: string;
    groupId: string;
    groupName: string;
    groupOwner: string;
    groupPassword: string;
    id: string;
    reservationStartTime: string;
    reservationEndTime: string;
    inquiryCategory: string;
    inquiryDetails: string;
    lamdaName: string;
    table: string;
    userActive: boolean;
    userName: string;
  };

  export type Redirect = {
    redirect: {
      destination: string;
    };
  };
  
  export type FunctionType = {
    id: string;
    lambdaName: string;
    functionId: string;
    functionName: string;
    groupName: string;
    groupId: string | null;
    groupPassword: string | null;
    groupOwner: string | null;
  };
  
  export type ReservationType = {
    id: string;
    reservationStartTime: string;
    reservationEndTime: string;
    inquiryCategory: string;
    inquiryDetails: string;
  };
  
  export type UserInfoType = {
    id: string;
    userName: string;
    userActive: boolean;
    billingID: string;
    billingName: string;
    billingOwner: string;
    billingPassword: string;
    billingActive: boolean;
    calculatedDataValue: number;
  };
  
  export type UserDataType = {
    cognitoIdentityID: string;
    userInfo: UserInfoType;
    functions: FunctionType[];
    reservation: ReservationType | null;
  };

  export interface ReservationProps {
    startTime: string;
    endTime: string;
  }
  
  export type UpdateItem = {
    id: string;
    billingActive?: boolean;
    billingID?: string;
    billingName?: string;
    billingOwner?: string;
    billingPassword?: string;
    calculatedDataValue?: number;
    cognitoIdentityID: string;
    functionId?: string;
    functionName?: string;
    groupId?: string;
    groupName?: string;
    groupOwner?: string;
    groupPassword?: string;
    reservationStartTime?: string;
    reservationEndTime?: string;
    inquiryCategory?: string;
    inquiryDetails?: string;
    lamdaName?: string;
    table: string;
    userActive?: boolean;
    userName?: string;
  };

  export interface UserDataProps {
    userData: UserDataType
  };

  export type GetAuthServerAttributesType = {
    sub?: string | undefined;
    email_verified?: string | undefined;
    email?: string | undefined;
  };

  export type CreateProps = {
      billingActive?: boolean;
      billingID?: string;
      billingName?: string;
      billingOwner?: string;
      billingPassword?: string;
      calculatedDataValue?: number;
      cognitoIdentityID: string;
      functionId?: string;
      functionName?: string;
      groupId?: string;
      groupName?: string;
      groupOwner?: string;
      groupPassword?: string;
      reservationStartTime?: string;
      reservationEndTime?: string;
      inquiryCategory?: string;
      inquiryDetails?: string;
      lamdaName?: string;
      table: string;
      userActive?: boolean;
      userName?: string;
  }

  interface UserList {
    id: string;
    userName?: string | null;
    cognitoIdentityID?: string | null;
  }
