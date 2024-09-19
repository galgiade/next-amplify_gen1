import { UserDataProps } from '@/api/apiType';
import { useState } from 'react';

const GroupSelecter = ({
  userData,
  setViewMode
}: UserDataProps & { setViewMode: (mode: string) => void }) => {
  const [selectedGroup, setSelectedGroup] = useState<string>('');

  const handleGroupChange = (groupName: string) => {
    setSelectedGroup(groupName);
  };

  // 重複を省いたグループ名リストを生成
  const groupNames = Array.from(new Set(userData.functions.map(func => func.groupName))).filter(name => name);

  // 選択されたグループに属する関数のリストから重複を省いた関数名リストを生成
  const uniqueFunctionNames = userData.functions
    .filter(func => selectedGroup === '' || func.groupName === selectedGroup)
    .map(func => func.functionName)
    .filter((value, index, self) => self.indexOf(value) === index); // 重複を除去

  return (
    <div className="flex">
      <div className="w-72">
        <div>グループ名</div>
        <div className="overflow-auto h-96 border rounded-md">
          <ul className="whitespace-nowrap">
            <li
              className={`px-4 py-2 cursor-pointer ${selectedGroup === '' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
              onClick={() => handleGroupChange('')}
            >
              すべて
            </li>
            {groupNames.map((groupName, index) => (
              <li
                key={index}
                className={`px-4 py-2 cursor-pointer ${groupName === selectedGroup ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => handleGroupChange(groupName)}
              >
                {groupName}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-72 ml-4">
        <div>関数リスト</div>
        <ul>
          {uniqueFunctionNames.map((functionName, index) => (
            <li key={index}>{functionName}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col space-y-2 mt-4">
        <button className="font-bold py-2 px-4 rounded" onClick={() => setViewMode('create')}>
          グループ作成
        </button>
        <button className=" font-bold py-2 px-4 rounded" onClick={() => setViewMode('edit')}>
          グループ編集
        </button>
        <button className=" font-bold py-2 px-4 rounded" onClick={() => setViewMode('join')}>
          グループ参加
        </button>
      </div>
    </div>
  );
};
export default GroupSelecter;