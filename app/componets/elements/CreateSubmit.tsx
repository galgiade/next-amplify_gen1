"use client"
import Create from "@/api/mutations/Create";
import { SubmitProps } from "@/app/componets/type/type";


const CreateSubmit = ({label,formProps,disable=false}:SubmitProps) => {
  const submitFunc = async () => {
    try {
      const response = await Create(formProps);
      console.log('Account created successfully:', response);
    } catch (error) {
      // その他のエラー処理をここに書く
      console.error('Error occurred while creating account:', error);
    }
    // レスポンスを処理
  };

  return (
    <button 
      onClick={submitFunc} 
      disabled={disable} // ここでボタンの無効化を制御
      className={`text-lg w-24 h-12 rounded-md hover:bg-gray-200 ${disable ? 'opacity-50 cursor-not-allowed aria-disabled="true"' : ''}`}
    >
      {label}
    </button>
  )
}

export default CreateSubmit