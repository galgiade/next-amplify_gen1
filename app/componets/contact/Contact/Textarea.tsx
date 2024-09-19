import { ContactFormStateProps } from "../ContactType";

const Textarea = ({ contactForm, setContactForm }: ContactFormStateProps) => {
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContactForm({
      ...contactForm,
      inquiryDetails: event.target.value,
    });
  };

  return (
    <div>
      <textarea
        name="Details"
        placeholder="詳細"
        className="w-96 h-56 p-4 border rounded-md"
        value={contactForm.inquiryDetails}
        onChange={handleTextareaChange}
      />
    </div>
  );
};
export default Textarea;
