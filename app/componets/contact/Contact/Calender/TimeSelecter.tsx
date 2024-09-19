"use client"

import React from 'react'
import { TimeSelecterProps } from '../../ContactType'

function TimeSelecter({ selectedDate, setSelectedDate, contactForm, setContactForm, reservationArray }: TimeSelecterProps) {
    const startDate = new Date(selectedDate);
    const endDate = new Date(selectedDate);
    const setDateHandler = (date: number) => {
        if (isSelectedTime(date)) {
            setContactForm({
                ...contactForm,
                reservationStartTime:"", // 予約開始時間をnullに設定
                reservationEndTime:"", // 予約終了時間をnullに設定
            });
        } else {
            startDate.setHours(date, 0, 0, 0);
            endDate.setHours(date, 50, 0, 0);
            setContactForm({
                ...contactForm,
                reservationStartTime: startDate.toISOString(),
                reservationEndTime: endDate.toISOString(),
            });
        }
    };
    const timeList = [9, 10, 11, 13, 14, 15, 16]
    const isSelectedTime = (time: number) => {
        if (!contactForm.reservationStartTime) return false;
        const selectedStartTime = new Date(contactForm.reservationStartTime);
        return selectedStartTime.getHours() === time;
    };
    const isReservedTime = (time: number) => {
        return reservationArray.some(reservation => {
            const reservationStart = new Date(reservation.startTime);
            // 日付と時刻が選択された日付と一致するかどうかをチェック
            return reservationStart.getHours() === time && reservationStart.toDateString() === selectedDate.toDateString();
        });
    };
    return (
        <div>
            <ul className="border border-gray-300 rounded-lg p-4 shadow-lg w-96">
                {timeList.map((time) => (
                    <li key={time} className="flex justify-between items-center text-lg p-2">
                        <div className="text-left">{`${selectedDate.toLocaleDateString()} ${time}:00 ~ ${time}:50`}</div>
                        <button
                            key={time}
                            onClick={() => setDateHandler(time)}
                            className={`flex items-center justify-center w-20 h-8 p-2 rounded-md text-center ${isSelectedTime(time) ? 'bg-black text-white' : isReservedTime(time) ? ' text-gray-500 cursor-not-allowed' : 'hover:bg-gray-200'}`}
                            disabled={isReservedTime(time)}
                        >
                            {isSelectedTime(time) ? '選択' : isReservedTime(time) ? '予約済' : '予約'}
                        </button>
                    </li>
                ))}
            </ul>

        </div>
    )
}

export default TimeSelecter
