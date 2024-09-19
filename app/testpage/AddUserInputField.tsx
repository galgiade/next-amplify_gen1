interface TextareaProps {
  label: string;
  placeHolderValue: string;
  content: string;
  onContentChange: (value: string) => void;
  onAddButtonClick: () => void;
}

const AddUserInputField: React.FC<TextareaProps> = ({
  label,
  placeHolderValue,
  content,
  onContentChange,
  onAddButtonClick
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onContentChange(event.target.value); // ここで親の関数を呼ぶ
  };

  return (
    <div>
      <div className="text-lg m-1">{label}</div>
      <input
        type="text"
        className="text-lg w-96 m-1"
        placeholder={placeHolderValue}
        value={content}
        onChange={handleInputChange}
      />
      <button className = "text-lg ml-4"onClick={onAddButtonClick}>追加</button>
    </div>
  );
};
export default AddUserInputField;
