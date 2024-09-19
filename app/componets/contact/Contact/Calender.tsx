"use client"

import { useState } from "react";
import MonthSelecter from "./Calender/MonthSelecter";
import DaySelector from "./Calender/DaySelecter";
import TimeSelecter from "./Calender/TimeSelecter";
import { CalenderProps } from "../ContactType";

export default function Calender({contactForm, setContactForm,reservationArray}: CalenderProps) {
    //今日の日付
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    //一か月後の日付
    const [selectedDate, setSelectedDate] = useState(tomorrow);

    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex flex-col items-center pb-4">
            <MonthSelecter selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}/>
            <DaySelector selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}/>
            </div>
            <TimeSelecter selectedDate = {selectedDate} setSelectedDate = {setSelectedDate} contactForm = {contactForm} setContactForm = {setContactForm} reservationArray = {reservationArray}/>
        </div>
    );
}

