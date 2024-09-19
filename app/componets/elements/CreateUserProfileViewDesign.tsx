import React from "react";

//typescriptでは、引数の型を定義する必要がある
export interface LabelValuePair {
  label: string;
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CreateUserProfileViewDesign: React.FC<LabelValuePair> = ({ label,name, onChange}) => {
  return (
    <div className="border rounded-md p-4 m-1">
      <div className="text-lg">{label}:</div>
      <input name= {name} onChange={onChange} className="text-lg" />
    </div>
  );
};

export default CreateUserProfileViewDesign;
