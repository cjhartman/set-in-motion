import "./FormInput.scss";

function FormInput({
  placeholder,
  label,
  formId,
  value,
  name,
  onChange,
}: {
  placeholder: string;
  label?: string;
  formId: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="form-input">
      {label && <label id={formId}>{label}</label>}
      <input
        id={formId}
        type="text"
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        autoComplete="off"
      />
    </div>
  );
}

export default FormInput;
