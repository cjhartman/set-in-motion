import "./Button.scss";
import { FaPlus } from "react-icons/fa6";

function Button({
  text,
  btnStyle: type,
  icon,
  disabled = false,
  onClick,
  ...rest
}: {
  text: string;
  btnStyle: "primary" | "outline";
  disabled?: boolean;
  icon?: any;
  onClick?: () => void;
}) {
  const buttonStyles = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  const iconMap: any = {
    "fa-plus": <FaPlus />,
  };

  const spanClassName = icon ? "has-icon" : "";

  return (
    <button
      className={`btn ${buttonStyles[type]}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {icon && iconMap[icon]}
      <span className={spanClassName}>{text}</span>
    </button>
  );
}

export default Button;
