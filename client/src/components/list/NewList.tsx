import { useState } from "react";
import Button from "../ui/button/Button";
import FormInput from "../ui/form-input/FormInput";
import "./NewList.scss";
import { List } from "../../types/list";

function NewList({ onSave, onCancel }: { onSave: any; onCancel: any }) {
  const [newList, setNewList] = useState<List>({
    title: "",
    description: "",
    color: "",
    rank: 0, // Add optional rank field (default to 0)
    tasks: [], // Initialize the tasks array as empty
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewList((prevList) => ({
      ...prevList,
      title: event.target.value,
    }));
  };

  const handleSave = () => {
    if (newList.title) {
      onSave(newList);
      setNewList({ title: "", description: "", color: "", rank: 0, tasks: [] });
    } else {
      console.error("Please enter a list name before saving.");
    }
  };

  return (
    <div className="new-list">
      <FormInput
        placeholder="Type List Name..."
        formId="listName"
        value={newList.title}
        onChange={handleInputChange}
      />
      <div className="btn-container">
        <Button text="Save" btnStyle="primary" onClick={handleSave}></Button>
        <Button text="Cancel" btnStyle="outline" onClick={onCancel}></Button>
      </div>
    </div>
  );
}

export default NewList;
