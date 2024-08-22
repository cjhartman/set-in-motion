import React, { useState } from "react";
import FormInput from "../ui/form-input/FormInput";
import { useDrag } from "react-dnd";
import "./DraggableTask.scss";
import Button from "../ui/button/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const API_URL = "http://localhost:4000/api/tasks";

function DraggableTask({
  listId,
  id,
  title,
  addNewTask,
  onCancel,
}: {
  listId?: number;
  id?: number;
  title?: string;
  addNewTask?: boolean;
  onCancel?: any;
}) {
  const [newTask, setNewTask] = useState({
    title: "",
    listId: listId,
  });

  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { id },
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
  const isSideDrawerOpen = useSelector((state: any) => state.sideDrawer);
  const dispatch = useDispatch();

  const handleOpenDrawer = () => {
    dispatch({ type: "OPEN_SIDE_DRAWER" });
  };

  return (
    <div>
      {!addNewTask ? (
        <div
          ref={drag}
          className={`task
      ${isDragging ? "dragging" : ""}`}
          onClick={handleOpenDrawer}
        >
          <div>{title}</div>
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
