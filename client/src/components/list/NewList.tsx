import Button from "../ui/button/Button";
import FormInput from "../ui/form-input/FormInput";
import "./NewList.scss";

function NewList({ onSave, onCancel }: { onSave: any; onCancel: any }) {
  // Create form that will be saved
  // Once saved with no errors, then return onSave

  // If form is cancelled, then send up to tell the parent that we should enable the add list button
  // and we should remove the new card component from the screen

  return (
    <div className="new-list">
      <FormInput placeholder="Type List Name..." formId="listName"></FormInput>
      <div className="btn-container">
        <Button text="Save" btnStyle="primary" onClick={onSave}></Button>
        <Button text="Cancel" btnStyle="outline" onClick={onCancel}></Button>
      </div>
    </div>
  );
}

export default NewList;
