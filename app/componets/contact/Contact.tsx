"use client"

import { useState } from "react";
import { ContactFormState, ContactProps } from "./ContactType";
import Calender from "./Contact/Calender";
import Pulldown from "./Contact/Pulldown";
import Textarea from "./Contact/Textarea";
import CreateSubmit from "@/app/componets/elements/CreateSubmit";

export default function Contact({reservationArray,userData}:ContactProps) {
    const [contactForm, setContactForm] = useState<ContactFormState>({
        cognitoIdentityID: userData.cognitoIdentityID,
        reservationStartTime: "",
        reservationEndTime: "",
        inquiryCategory: "",
        inquiryDetails: "",
        table: "reservation",
});
const isFormEmpty = Object.entries(contactForm).some(([key, value]) => key !== "inquiryDetails" && value === "");
    return (
        <div className="flex flex-col items-center">
            <Calender contactForm = {contactForm} setContactForm={setContactForm} reservationArray = {reservationArray}/>
            <Pulldown contactForm={contactForm} setContactForm={setContactForm} />
            <Textarea contactForm={contactForm} setContactForm={setContactForm} />
            <CreateSubmit label="予約" formProps={contactForm} disable = {isFormEmpty} />
        </div>
    );
}