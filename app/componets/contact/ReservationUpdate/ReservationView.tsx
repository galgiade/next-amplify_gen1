"use client"
import ViewDesign from "@/app/componets/elements/ViewDesign"
import { format } from 'date-fns'
import { ja } from 'date-fns/locale'
import type { ReservationViewProps } from '@/app/componets/contact/ContactType'
import DeleteReservation from "./DeleteReservation"

const ReservationView = ({contactForm, setIsEditMode}: ReservationViewProps) => {
    // ISO8601形式の日時をローカル時刻に変換する関数
    const formatToLocalTime = (isoString: string) => {
      return format(new Date(isoString), "yyyy/MM/dd HH:mm", { locale: ja });
  }

    // 英語のinquiryCategoryを日本語に翻訳する関数
    const translateInquiryCategory = (category: string) => {
        const categories: { [key: string]: string } = {
            newProjects: "新規の案件",
            changeExisting: "既存のプログラムの修正",
            reportDefect: "不具合の報告",
            others: "その他"
        };
        return categories[category] || category; // マッチしない場合は元の値を返す
    }

    const viewDesigns = [
        { label: "開始時間", value: formatToLocalTime(contactForm.reservationStartTime) },
        { label: "終了時間", value: formatToLocalTime(contactForm.reservationEndTime) },
        { label: "問い合わせカテゴリ", value: translateInquiryCategory(contactForm.inquiryCategory) },
        { label: "問い合わせ内容", value: contactForm.inquiryDetails }
    ];

  return (
    <div>
        {viewDesigns.map((design, index) => (
            <ViewDesign  key={index} label={design.label} value={design.value} />
        ))}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700" onClick={() => setIsEditMode(true)}>編集する</button>
        <DeleteReservation id={contactForm.id} />
    </div>
  )
}

export default ReservationView