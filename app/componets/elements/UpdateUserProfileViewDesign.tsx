import React from "react";

//typescriptでは、引数の型を定義する必要がある
export interface LabelValuePair {
  label: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UpdateUserProfileViewDesign: React.FC<LabelValuePair> = ({ label, name, value ,onChange }) => {
  return (
    <div className="border rounded-md p-4 m-1">
      <div className="text-lg">{label}:</div>
      <input name= {name} value={value} onChange={onChange} className="text-lg" />
    </div>
  );
};

export default UpdateUserProfileViewDesign;
