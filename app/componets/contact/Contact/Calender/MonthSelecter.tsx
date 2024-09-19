import { useState } from "react";
import { DateSelecterProps } from "../../ContactType";


const MonthSelecter: React.FC<DateSelecterProps> = ({ selectedDate, setSelectedDate }) => {
    const [isPastDate, setIsPastDate] = useState(false);
    function setMonthHandler(direction: 'prev' | 'next') {
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        let newDate = new Date(selectedDate);
        if (direction === 'prev') {
            newDate.setMonth(newDate.getMonth() - 1);
            if (newDate < tomorrow) {
                newDate = tomorrow;
                setIsPastDate(true);
            } else {
                setIsPastDate(false);
            }
        } else if (direction === 'next') {
            newDate.setMonth(newDate.getMonth() + 1);
            setIsPastDate(false);
        }
        setSelectedDate(newDate);
    }
    return (
        <div>
            <button onClick={() => setMonthHandler('prev')} disabled={isPastDate} className={`text-black w-12 h-12 ${isPastDate ? 'cursor-not-allowed' : 'hover:bg-gray-200 transition duration-200'}`}>&lt;</button>
            {selectedDate.toLocaleDateString()}
            <button onClick={() => setMonthHandler('next')} className="text-black hover:bg-gray-200 transition duration-200 w-12 h-12">&gt;</button>
        </div>
    );
}

export default MonthSelecter;