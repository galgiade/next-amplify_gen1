"use client"
// このファイルは、グループデータのフォームを管理します。
// ReactとuseStateフックをインポートします。
// 利用可能な関数のリストを定義します。

import React, { useState } from 'react';
import DeleteListContentsButton from './DeleteListContentsButton';
import DeleteListItemButton from './DeleteListItemButton';
import { SelectFunctions } from './SelectFunctions';
import { GroupFunctionFormProps } from './GroupFormType';



// 子コンポーネント GroupDataForm
export default function GroupFunctionForm({ functionList, groupData, setGroupData }: GroupFunctionFormProps) {
    return (
        <div>
            <SelectFunctions
                functionList={functionList}
                groupData={groupData}
                setGroupData={setGroupData}
            />
            {/* 関数リストをマップして、各関数に対してボタンを作成 */}
            <div>選択中</div>
            {groupData.functions.map((func, index) => (
                <DeleteListItemButton
                    key={index}
                    func={func}
                    setGroupData={setGroupData}
                />
            ))}
            {/* 全消去ボタンをクリックすると、全ての関数を関数リストから削除 */}
            <DeleteListContentsButton setGroupData={setGroupData} />
        </div>
    );
}
