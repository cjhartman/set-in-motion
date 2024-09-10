import { FormType } from "./formType";
import { List } from "./list";
import { Task } from "./task";

export interface SideDrawerState {
  isOpen: boolean;
  formType: FormType;
  task: Task | null;
  list: List | null;
}
