import "./FormInput.scss";

function FormInput({
  placeholder,
  label,
  formId,
  ...rest
}: {
  placeholder: string;
  label?: string;
  formId: string;
}) {
  return (
    <div className="form-input">
      {label && <label id={formId}>{label}</label>}
      <input id={formId} type="text" placeholder={placeholder} />
    </div>
  );
}

export default FormInput;
