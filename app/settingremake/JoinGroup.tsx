import { getGroupId } from '@/api/queries/get/GetGroupIdClient';
import React, { useState } from 'react';
import CreateUserProfileViewDesign from "@/app/componets/elements/CreateUserProfileViewDesign";
import Create from '@/api/mutations/Create'; // Create関数をインポート

const JoinGroup = ({ setViewMode, userData }: { setViewMode: (mode: string) => void, userData: any }) => {
  const [groupId, setGroupId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'groupId') {
      setGroupId(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
  
    try {
      console.log(groupId);
      const response = await getGroupId(groupId);
      console.log(response);
      if (response && response.length > 0) {
        const group = response[0];
  
        // ユーザーがすでにグループに所属しているかどうかを確認
        const userAlreadyJoined = response.some((item: any) => item.cognitoIdentityID === userData.cognitoIdentityID);
  
        if (userAlreadyJoined) {
          setError('すでにこのグループに参加しています。');
          return;
        }
  
        if (group.groupPassword === password) {
          // パスワードが一致する場合の処理
          console.log('グループに参加:', groupId, password);
          const newData = response.map((item: any) => {
            return {
              cognitoIdentityID: userData.cognitoIdentityID,
              functionId: item.functionId,
              functionName: item.functionName,
              groupId: item.groupId,
              groupName: item.groupName,
              groupOwner: item.groupOwner,
              groupPassword: item.groupPassword,
              lambdaName: item.lambdaName,
              table: item.table
            };
          });

          // 新しいデータをAPIに送信して作成
          for (const data of newData) {
            console.log(newData);
            await Create(data, false);
          }

          console.log('グループ参加が完了しました');
          // 成功メッセージを表示するなどの処理を行う
        } else {
          // パスワードが一致しない場合のエラーメッセージを設定する
          setError('パスワードが間違っています。');
        }
      } else {
        // グループが存在しない場合のエラーメッセージを設定する
        setError('グループIDが間違っています。');
      }
    } catch (error) {
      console.error('グループ参加エラー:', error);
      setError('グループ参加中にエラーが発生しました。');
    }
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">グループに参加</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <CreateUserProfileViewDesign
          label="グループID"
          name="groupId"
          onChange={handleInputChange}
        />
        <CreateUserProfileViewDesign
          label="パスワード"
          name="password"
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          参加
        </button>
        <button className="py-2 px-4 rounded text-lg" onClick={() => setViewMode('view')}>
          戻る
        </button>
        <div>{groupId}</div>
      </form>
    </div>
  );
};

export default JoinGroup;