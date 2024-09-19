"use client"
import { DateSelecterProps } from "../../ContactType";

const DaySelecter: React.FC<DateSelecterProps> = ({ selectedDate, setSelectedDate }) => {
  const today = new Date();
  const newDate = new Date(selectedDate);
  const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
  const setDateHandler = (date: number) => {
    newDate.setDate(date);
    if (newDate <  today) {
      return; // 今日の日付より過去の日付は選択できない
    }
    setSelectedDate(newDate);
  };
  const isPastDate = (date: Date) => {
    return date <  today;
  };
  const isSelectDate = (date: Date) => {
    return date.toDateString() === selectedDate.toDateString();
  }
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  return (
    <div className="grid grid-cols-7 w-84">
    {days.map(day => (
          <div key={day} className="w-12 h-12 flex justify-center items-center">
            {day}
          </div>
        ))}
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <div key={index} className="w-12 h-12"></div>
        ))}
      {[...Array(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate())].map((_, index) => (
        <button 
        key={index} 
        onClick={() => setDateHandler(index + 1)} 
        className={`w-12 h-12 text-black
        ${isSelectDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1)) ? 'bg-black text-white rounded-full transition duration-0' : ''}
         ${isPastDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1)) 
          ? 'cursor-not-allowed text-gray-500 transition duration-0' : isSelectDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), index + 1)) ? '' : 'hover:bg-gray-200 transition duration-200 rounded-full'} 
        `}
      >
        {index + 1}
      </button>
      ))}
    </div>
  );
};

export default DaySelecter;