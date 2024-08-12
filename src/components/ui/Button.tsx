import "./Button.scss";
import { FaPlus } from "react-icons/fa6";

function Button({
  text,
  type,
  icon,
  ...rest
}: {
  text: string;
  type: "primary" | "outline";
  icon?: any;
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
    <button className={`btn ${buttonStyles[type]}`} {...rest}>
      {icon && iconMap[icon]}
      <span className={spanClassName}>{text}</span>
    </button>
  );
}

export default Button;
