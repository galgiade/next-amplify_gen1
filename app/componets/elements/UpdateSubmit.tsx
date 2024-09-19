"use client"
import Update from "@/api/mutations/Update";
import { SubmitProps } from "@/app/componets/type/type";


const UpdateSubmit = ({label,formProps,disable=false}:SubmitProps) => {
  const submitFunc = async () => {
    try {
      const response = await Update(formProps);
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
    <button 
      onClick={submitFunc} 
      disabled={disable} // ここでボタンの無効化を制御
      className={`text-lg w-24 h-12 rounded-md hover:bg-gray-200 ${disable ? 'opacity-50 cursor-not-allowed aria-disabled="true"' : ''}`}
    >
      {label}
    </button>
  )
}

export default UpdateSubmit