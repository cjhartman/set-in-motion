import React, { useState, useRef, useEffect } from "react";
import "./EditableText.scss";

const EditableText = ({
  value = "",
  size = "medium",
}: {
  value?: string;
  size?: "small" | "medium" | "large";
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [tempValue, setTempValue] = useState(value); // Temporary local value
  const [fontSize, setFontSize] = useState("1rem");

  useEffect(() => {
    // Dynamically set font size based on the size prop
    const getFontSize = (size: "small" | "medium" | "large") => {
      switch (size) {
        case "small":
          return "0.8rem";
        case "medium":
          return "1rem";
        case "large":
          return "1.4rem";
        default:
          return "1rem";
      }
    };

    const newFontSize = getFontSize(size);
    setFontSize(newFontSize);

    // Create a function to calculate the width of the text
    const calculateTextWidth = (text: string) => {
      const span = document.createElement("span");
      span.style.visibility = "hidden";
      span.style.fontSize = fontSize;
      span.style.fontWeight = "bold";
      span.style.position = "absolute";
      span.innerText = text || " ";
      document.body.appendChild(span);
      const width = span.offsetWidth; // 16 because we have 8px padding on the left and right
      document.body.removeChild(span);
      return width;
    };

    // Update input width when tempValue changes
    setInputWidth(calculateTextWidth(tempValue));
  }, [tempValue, fontSize]);

  const handleEditClick = () => {
    setIsEditing(true);
    setTempValue(value); // Ensure tempValue is reset to prop on edit start
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleBlur = () => {
    if (!tempValue || tempValue.trim() === "") {
      setTempValue(value); // Revert to prop if input is empty
    } else {
      setTempValue(tempValue);
    }
    setIsEditing(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      handleBlur(); // Same behavior when pressing Enter
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempValue(event.target.value);
  };

  const sizeClasses = {
    small: "editable-text editable-text--small",
    medium: "editable-text editable-text--medium",
    large: "editable-text editable-text--large",
  };

  return (
    <div className={sizeClasses[size]}>
      {isEditing ? (
        <input
          style={{ width: `${inputWidth}px` }}
          className="editable-text__input"
          type="text"
          ref={inputRef}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          value={tempValue}
          onChange={handleChange}
          maxLength={40}
        />
      ) : (
        <span className="editable-text__span" onClick={handleEditClick}>
          {value}
        </span>
      )}
    </div>
  );
};

export default EditableText;
