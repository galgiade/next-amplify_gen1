import UpdateSubmit from "../../elements/UpdateSubmit";
import Calender from "../Contact/Calender";
import Pulldown from "../Contact/Pulldown";
import Textarea from "../Contact/Textarea";
import { ReservationProps, UpdateContactFormState } from "../ContactType";

interface ReservationFormProps {
  setIsEditMode: (isEditMode: boolean) => void;
  contactForm: UpdateContactFormState;
  setContactForm: (contactForm: UpdateContactFormState) => void;
  reservationArray: ReservationProps[]
}

const ReservationForm = ({ setIsEditMode, contactForm, setContactForm, reservationArray }: ReservationFormProps) => {
  const isFormEmpty = Object.entries(contactForm).some(([key, value]) => key !== "inquiryDetails" && value === "");
  return (
    <div className="flex flex-col items-center mx-auto">
      <Calender contactForm = {contactForm} setContactForm={setContactForm} reservationArray={reservationArray}/>
      <Pulldown contactForm={contactForm} setContactForm={setContactForm} />
      <Textarea contactForm={contactForm} setContactForm={setContactForm} />
      <UpdateSubmit label="変更" formProps={contactForm} disable = {isFormEmpty} />
      <button onClick={() => setIsEditMode(false)}>
        戻る
      </button>
    </div>
  );
};

export default ReservationForm;