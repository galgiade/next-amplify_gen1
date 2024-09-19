import { CreateProps } from "@/api/apiType";
import { UserDataType } from "@/componets/type/type";

export interface ContactFormState {
    cognitoIdentityID: string;
    reservationStartTime: string;
    reservationEndTime: string;
    inquiryCategory: string;
    inquiryDetails: string;
    table: string;
}
export interface UpdateContactFormState extends ContactFormState {
    id: string;
}

export interface ReservationProps {
    startTime: string;
    endTime: string;
}

export interface ContactProps {
    userData:UserDataType,
    reservationArray: ReservationProps[]
}

export interface ContactFormStateProps {
    contactForm: ContactFormData;
    setContactForm: (contactFormData: ContactFormData) => void;
}

export interface CalenderProps extends ContactFormStateProps{
    reservationArray: ReservationProps[]
}

export interface DateSelecterProps {
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface TimeSelecterProps extends CalenderProps {
    selectedDate: Date;
    setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

interface SubmitReservationProps {
    contactForm: CreateProps;
}

export interface ReservationViewProps{
    setIsEditMode: React.Dispatch<React.SetStateAction<boolean>>;
    contactForm: UpdateContactFormState;
}


