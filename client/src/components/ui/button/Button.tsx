import "./Button.scss";
import { FaEllipsisVertical, FaPlus } from "react-icons/fa6";

function Button({
  text,
  btnStyle: type,
  icon,
  disabled = false,
  onClick,
  ...rest
}: {
  btnStyle: "primary" | "outline";
  text?: string;
  disabled?: boolean;
  icon?: any;
  onClick?: (event: React.DOMAttributes<HTMLButtonElement>) => void;
}) {
  const buttonStyles = {
    primary: "btn-primary",
    outline: "btn-outline",
  };

  const iconMap: any = {
    "fa-plus": <FaPlus />,
    "fa-ellipsis": <FaEllipsisVertical />,
  };

  const spanClassName = icon ? "has-icon" : "";

  const handleClick = (event: any) => {
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={`btn ${buttonStyles[type]}`}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {icon && iconMap[icon]}
      {text && <span className={spanClassName}>{text}</span>}
    </button>
  );
}

export default Button;
