export interface UserDataType{
    cognitoIdentityID: string;
    userInfo: UserInfoType;
    functions: FunctionType[];
    reservation: ReservationType | null;
};

export type SubmitProps = {
    label:string,
    formProps: any
    disable?:boolean
  }