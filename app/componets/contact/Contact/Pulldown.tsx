import { ContactFormStateProps } from "../ContactType";

const Pulldown = ({ contactForm,setContactForm }:ContactFormStateProps) => {
  const SelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setContactForm({
        ...contactForm, // 既存のcontactFormの内容を保持
        inquiryCategory: event.target.value, // 新しい日付でreservationStartTimeを更新
    });
  };
  return (
    <div className="pb-4">
      <label htmlFor="colors">お問い合わせ内容:</label>
      <select
        id="colors"
        value={contactForm.inquiryCategory}
        onChange={SelectChange}
        className="
          block
          h-10
          px-4
          py-1
          w-96
          text-black
          border
          focus:ring-black
          rounded-md
          shadow-sm
          focus:ring-2
          text-lg
          "
      >
        <option value="" disabled hidden>
          選択してください
        </option>
        <option value="newProjects">新規の案件</option>
        <option value="changeExisting">既存のプログラムの修正</option>
        <option value="reportDefect">不具合の報告</option>
        <option value="others">その他</option>
      </select>

    </div>
  );
};

export default Pulldown;