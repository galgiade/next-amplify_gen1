"use client";
import React from 'react'
import { EditFormStateProps } from './EditUserForm';
import UpdateAccount from '@/api/mutations/Update';

const EditSubmitButton: React.FC<{ formState: EditFormStateProps }> = ({ formState }) => {
    const handleButtonClick = async () => {
        try {
          await UpdateAccount(formState);
          console.log(formState)
        } catch (error) {
          // その他のエラー処理をここに書く
          console.error('Error occurred while creating account:', error);
        }
        // レスポンスを処理
      };
  return (
    <button onClick={handleButtonClick}>送信</button>
  )
}

export default EditSubmitButton;