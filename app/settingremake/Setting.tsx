"use client"
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { UserDataType } from "@/api/apiType";
import AccountUserInfo from "../componets/settingremake/Account";
import Billing from "./Billing";
import FunctionInfo from "./FunctionInfo";

interface SettingProps {
    userData: UserDataType;
    users: any[];
}

const Setting = ({userData, users}: SettingProps) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [selectedTab, setSelectedTab] = useState('account');
    // URLからタブの状態を読み込む
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab) {
            setSelectedTab(tab);
        }
    }, [searchParams]);

    // タブを変更する関数
    const handleTabChange = (tabName: string) => {
        setSelectedTab(tabName);
        router.push(`/settingremake?tab=${tabName}`);
    };
    return (
        <div className="flex">
            <div className="w-1/4 p-4">
                <ul className="flex flex-col">
                    <li className={`p-2 ${selectedTab === 'account' ? 'bg-gray-200' : ''}`} onClick={() => handleTabChange('account')}>アカウント</li>
                    <li className={`p-2 ${selectedTab === 'function' ? 'bg-gray-200' : ''}`} onClick={() => handleTabChange('function')}>機能</li>
                    <li className={`p-2 ${selectedTab === 'billing' ? 'bg-gray-200' : ''}`} onClick={() => handleTabChange('billing')}>請求</li>
                </ul>
            </div>
            <div className="w-3/4 p-4">
                {selectedTab === 'account' && <AccountUserInfo userData={userData} />}
                {selectedTab === 'function' && <FunctionInfo userData={userData} users={users} />}
                {selectedTab === 'billing' && <Billing userData={userData} users={users}/>}
            </div>
        </div>
    );
}

export default Setting;