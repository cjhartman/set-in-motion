import React from "react";
import { Task } from "../../types/task";

const TaskForm = ({ task, onCancel }: { task?: Task; onCancel: () => {} }) => {
  return (
    <div>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default TaskForm;
