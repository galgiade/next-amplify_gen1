import React from "react";

const StartGuide: React.FC = () => {
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-md max-w-xl">
      <h2 className="text-2xl font-bold mb-5">利用開始の手順</h2>
      <ol className="list-decimal pl-5">
        <li className="mb-4">
          <strong>ユーザー登録</strong>
          <p>
            ログインをクリックし、ユーザー登録してください。
          </p>
        </li>
        <li className="mb-4">
          <strong>仕様の打ち合わせ</strong>
          <p>
            問い合わせからミーティングの予約して、打ち合わせをします
          </p>
        </li>
        <li className="mb-4">
          <strong>利用開始</strong>
          <p>
            打ち合わせから2週間ほどで、サービスを開始できます。
          </p>
        </li>
      </ol>
    </div>
  );
};

export default StartGuide;
