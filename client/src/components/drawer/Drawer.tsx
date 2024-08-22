import React, { useState } from "react";
import { FormType } from "../../types/formType";
import TaskForm from "../forms/TaskForm";
import ListForm from "../forms/ListForm";
import Drawer from "react-modern-drawer";

const SideDrawer = ({
  formType,
  onCancel,
}: {
  formType: FormType;
  onCancel: () => {};
}) => {
  let formContent;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  switch (formType) {
    case FormType.Task:
      formContent = <TaskForm onCancel={onCancel} />;
      break;
    case FormType.List:
      formContent = <ListForm onCancel={onCancel} />;
      break;
    default:
      formContent = null;
  }

  return (
    <Drawer open={isOpen} direction="right" className="side-drawer">
      {formContent}
    </Drawer>
  );
};

export default SideDrawer;
