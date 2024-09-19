import React from "react";

//typescriptでは、引数の型を定義する必要がある
export interface LabelValuePair {
  label: string;
  value: string;
}

const AccountUpdateInputDesign: React.FC<LabelValuePair> = ({
  label,
  value,
}) => {
  return (
    <div className="border rounded-md p-4 w-96 ">
      <div className="flex justify-between">
        <div className="text-lg m-1">{label}</div>
        <div className="flex">
          <button className="text-lg mr-4">保存</button>
          <button className="text-lg mr-4">戻る</button>
        </div>
      </div>
      <input type="text" className="text-lg w-80 m-1" placeholder={value} />
    </div>
  );
};

export default AccountUpdateInputDesign;