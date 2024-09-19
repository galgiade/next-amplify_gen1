import React from "react";
import AccountUpdateInputDesign from "./AccountUpdateInputDesign";

//typescriptでは、引数の型を定義する必要がある

const AccountUpdate: React.FC = () => {
  return (
    <div className="w-3/12 border rounded-md p-4 ">
      <div className="mb-2 text-lg">アカウント情報</div>
      <div className="rounded-md flex flex-col items-center">
        <AccountUpdateInputDesign label="名前" value="galgiade" />
      </div>
    </div>
  );
};

export default AccountUpdate;
