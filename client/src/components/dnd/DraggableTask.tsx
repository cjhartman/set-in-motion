import React, { useState } from "react";
import FormInput from "../ui/form-input/FormInput";
import { useDrag } from "react-dnd";
import "./DraggableTask.scss";
import Button from "../ui/button/Button";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setFormType,
  toggleDrawer,
  setTaskValue,
} from "../../reducers/sideDrawerReducer";
import { FormType } from "../../types/formType";
import { Task } from "../../types/task";

const API_URL = "http://localhost:4000/api/tasks";

function DraggableTask({
  listId,
  task,
  addNewTask,
  onCancel,
}: {
  listId?: number;
  task?: Task;
  addNewTask?: boolean;
  onCancel?: any;
}) {
  const [newTask, setNewTask] = useState({
    title: "",
    listId: listId,
  });

  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { id: task?.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  /**
   * Handles the form input for the form state
   * @param event input form event
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask({ ...newTask, [event.target.name]: event.target.value });
  };

  /**
   * Submit New Task to be saved
   * @returns
   */
  const handleSubmit = async () => {
    if (!newTask.title) {
      console.error("Task title is required");
      return;
    }

    try {
      await axios.post(API_URL, newTask);
    } catch (error) {
      console.error(error);
      // Handle errors gracefully, e.g., display an error message
    }
  };

  /**
   * Side Drawer Functionality
   */
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch(setFormType(FormType.Task));
    dispatch(toggleDrawer(true));
    dispatch(setTaskValue(task));
  };

  return (
    <div>
      {!addNewTask ? (
        <div
          ref={drag}
          className={`task hoverable
      ${isDragging ? "dragging" : ""}`}
          onClick={handleOpenDrawer}
        >
          <div>{task?.title}</div>
        </div>
      ) : (
        <div
          ref={drag}
          className={`task
      ${isDragging ? "dragging" : ""}`}
        >
          <div className="task-form">
            <FormInput
              placeholder="Type Task Name..."
              formId="taskId"
              name="title"
              value={newTask.title}
              onChange={handleChange}
            />

            <div className="task-form_submit">
              <Button
                text="Save"
                btnStyle="primary"
                onClick={handleSubmit}
              ></Button>
              <Button
                text="Cancel"
                btnStyle="outline"
                onClick={() => onCancel(listId)}
              ></Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export { DraggableTask };
