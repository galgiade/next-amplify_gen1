"use client"
import { useState } from 'react';
const UserDelete = ({data}: any) => {
  const [ids, setIds] = useState<string[]>([]);
  const extractIds = () => {
    const extractedIds = [
      ...data.functions.map(func => func.id),
      data.userInfo.id
    ];
    setIds(extractedIds);
  };
  return (
    <div>
      <div>Test9</div>
      <button onClick={extractIds} className="bg-blue-500 text-white p-2 rounded">
        IDを抽出
      </button>
      <ul>
        {ids.map((id, index) => (
          <li key={index}>{id}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserDelete;