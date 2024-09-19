import React from "react";

//typescriptでは、引数の型を定義する必要がある

const Footer: React.FC = () => {
  return (
    <div className="bg-[#001f3f] text-lg text-white">
      <div className="h-28 flex justify-center items-center">
        <div className="flex w-full max-w-screen-xl">
          <div className="flex-1 pr-4 ">
            <div>株式会社コネクトテック</div>
            <div>業務のちょっとした自動化を</div>
            <div>よくある質問</div>
          </div>
          <div className="flex-1 pr-4 ">
            <div>会社情報</div>
            <div>電話番号: 090-3706-7654</div>
            <div>Email:</div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        © 2023 株式会社コネクトテック
      </div>
    </div>
  );
};

export default Footer;
