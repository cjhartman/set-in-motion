import { FormType } from "../../types/formType";
import TaskForm from "../forms/TaskForm";
import ListForm from "../forms/ListForm";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useDispatch } from "react-redux";
import { setFormType, toggleDrawer } from "../../reducers/sideDrawerReducer";
import "./Drawer.scss";
import Button from "../ui/button/Button";

function SideDrawer({ formType }: { formType: FormType }) {
  let formContent;

  /**
   * Side Drawer Functionality
   */
  const dispatch = useDispatch();

  const handleCloseDrawer = () => {
    dispatch(setFormType(FormType.None));
    dispatch(toggleDrawer(false));
  };

  switch (formType) {
    case FormType.Task:
      formContent = <TaskForm onCancel={handleCloseDrawer} />;
      break;
    case FormType.List:
      formContent = <ListForm onCancel={handleCloseDrawer} />;
      break;
    default:
      formContent = null;
  }

  return (
    <Drawer
      open={!!formType}
      direction="right"
      enableOverlay={true}
      size="40vw"
      duration={1000}
    >
      <div className="side-drawer">
        <div className="side-drawer-header">
          <Button
            btnStyle="none"
            icon="fa-x"
            onClick={handleCloseDrawer}
          ></Button>
        </div>
        {formContent}
      </div>
    </Drawer>
  );
}

export default SideDrawer;
