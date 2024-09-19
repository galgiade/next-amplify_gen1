"use client";
import React from 'react';
import Create from '@/api/mutations/Create';
import type { FormStateProps } from "./CreateUserInfoForm"

const CreateUserInfoButton: React.FC<{ formState: FormStateProps }> = ({ formState }) => {
  const handleButtonClick = async () => {
    try {
      const response = await Create(formState);
      if (response) {
        // 成功した場合の処理をここに書く
        console.log('Account created successfully:', response);
      } else {
        // レスポンスがnullの場合のエラー処理をここに書く
        console.error('Account creation failed');
      }
    } catch (error) {
      // その他のエラー処理をここに書く
      console.error('Error occurred while creating account:', error);
    }
    // レスポンスを処理
  };

  return (
    <button onClick={handleButtonClick}>
      送信
    </button>
  );
};

export default CreateUserInfoButton;