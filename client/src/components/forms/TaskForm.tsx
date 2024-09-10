import { useSelector } from "react-redux";
import EditableText from "../ui/editable-text/EditableText";
import { SideDrawerState } from "../../types/sideDrawer";
import { FaPenNib } from "react-icons/fa";
import "./TaskForm.scss";

function TaskForm({ onCancel }: { onCancel: any }) {
  const task = useSelector((state: SideDrawerState) => state.task);

  return (
    <div className="task-form">
      <div className="task-form--title">
        <FaPenNib size={18} />
        <EditableText value={task?.title} size="large"></EditableText>
      </div>
    </div>
  );
}

export default TaskForm;
