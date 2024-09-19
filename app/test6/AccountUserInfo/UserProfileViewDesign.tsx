import React from "react";

//typescriptでは、引数の型を定義する必要がある
export interface LabelValuePair {
  label: string;
  value: string;
}

const UserProfileViewDesign: React.FC<LabelValuePair> = ({ label, value }) => {
  return (
    <div className="rounded-md p-4 w-10/12 m-1">
      <div className="text-lg">{label}</div>
      <div className="text-lg">{value}</div>
    </div>
  );
};

export default UserProfileViewDesign;
