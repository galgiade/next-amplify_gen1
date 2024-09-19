export type EditAccountFormProps = {
    id: string;
    userName: string;
    billingName: string;
};

export type EditAccountFormStateProps = {
    editAccountForm: EditAccountFormProps;
    setEditAccountForm: (editAccountForm: EditAccountFormProps) => void;
}

export interface CreateGroupProps {
    cognitoIdentityID:string,
    table: string,
    functionId: string[],
    functionName: string[],
    groupId: string,
    groupName: string,
    groupOwner: string,
    groupPassword: string,
    lambdaName: string[],
    userList:string[]
  };