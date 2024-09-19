"use client"
import Delete from "@/api/mutations/Delete";

const DeleteReservation = ({id}: {id: string}) => {
    const submitReservation = async () => {
        try {
          await Delete(id);

        } catch (error) {
          // その他のエラー処理をここに書く
          console.error('Error occurred while creating account:', error);
        }
        // レスポンスを処理
      };
  return (
    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700" onClick={submitReservation}>削除</button>
  )
}

export default DeleteReservation