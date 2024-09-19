export type GroupFormStateProps = {
    cognitoIdentityID: string;
    groupName: string;
    groupPassword: string;
    groupOwner: string;
    lamdaNames: string[];
    functions: string[];
  };
  
  export type GroupDataStateProps = {
    groupData?: FormStateProps;
    setGroupData?: Dispatch<SetStateAction<FormStateProps>>;
  };

  export interface GroupFunctionFormProps extends GroupDataStateProps {
    functionList: string[];
  }
