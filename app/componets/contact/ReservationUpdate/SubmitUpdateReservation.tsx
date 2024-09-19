import { CreateProps } from "@/api/apiType";
import { SubmitReservationProps } from "../ContactType";
import Update from "@/api/mutations/Update";

const SubmitUpdateReservation = ({contactForm}:SubmitReservationProps) => {
  const submitReservation = async () => {
    try {
      const response = await Update(contactForm);
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

  // inquiryDetailsはオプションなので、それ以外のcontactFormの中身が空文字""の場合にボタンを無効化する
  const isFormEmpty = Object.entries(contactForm).some(([key, value]) => key !== "inquiryDetails" && value === "");

  return (
    <button 
      onClick={submitReservation} 
      disabled={isFormEmpty} // ここでボタンの無効化を制御
      className={`text-lg w-24 h-12 rounded-md hover:bg-gray-200 ${isFormEmpty ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      予約
    </button>
  )
}

export default SubmitUpdateReservation