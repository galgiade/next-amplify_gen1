"use client";

import { useState } from "react";
import ReservationForm from "./ReservationUpdate/ReservationForm";
import ReservationView from "./ReservationUpdate/ReservationView";
import {  ContactFormStateProps, ContactProps, UpdateContactFormState } from "./ContactType";


const ReservationUpdate = ({userData,reservationArray}: ContactProps) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [contactForm, setContactForm] = useState<UpdateContactFormState>({
    id: userData.reservation.id,
    cognitoIdentityID: userData.reservation.cognitoIdentityID,
    reservationStartTime: userData.reservation.reservationStartTime,
    reservationEndTime: userData.reservation.reservationEndTime,
    inquiryCategory: userData.reservation.inquiryCategory,
    inquiryDetails: userData.reservation.inquiryDetails,
    table: userData.reservation.table
  });
  return (
    isEditMode ?
      <ReservationForm setIsEditMode = {setIsEditMode} contactForm = {contactForm} setContactForm = {setContactForm} reservationArray = {reservationArray}/>
      : <ReservationView setIsEditMode = {setIsEditMode} contactForm = {contactForm}/>
  );
};

export default ReservationUpdate;

